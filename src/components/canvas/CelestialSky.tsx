import React, { useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { hexToRgba } from '../../tokens/theme';

interface CelestialSkyProps {
  className?: string;
  showStarSpikes?: boolean;
  starBrightness?: number;
  interactiveParallax?: boolean;
}

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
}

export const CelestialSky: React.FC<CelestialSkyProps> = ({
  className = '',
  showStarSpikes = true,
  starBrightness = 1,
  interactiveParallax = true,
}) => {
  const { tier, theme, tokens } = useApp();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (tier === 'lite') return; // Zero canvas on Lite tier

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (reducedMotion || isTouch || !interactiveParallax || tier !== 'cinematic') return;
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / width - 0.5;
      const ny = (e.clientY - rect.top) / height - 0.5;
      mouseRef.current.targetX = nx * 24;
      mouseRef.current.targetY = ny * 18;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Star count scaled by tier
    const divisor = tier === 'cinematic' ? 9000 : 20000;
    const maxStars = tier === 'cinematic' ? 120 : 35;
    const starCount = Math.min(Math.floor((width * height) / divisor), maxStars);

    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.85,
      size: Math.random() * 1.5 + 0.5,
      baseAlpha: Math.random() * 0.5 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = () => {
      time += 0.015;

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep sky gradient reading directly from current theme tokens
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, tokens.bg);
      skyGrad.addColorStop(0.65, tokens.surface1);
      skyGrad.addColorStop(1, tokens.bg);
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Render stars (only visible in night theme or faint in day)
      if (theme === 'night') {
        stars.forEach((star) => {
          const twinkle = Math.sin(time * star.twinkleSpeed * 100 + star.phase);
          const alpha = Math.max(0.1, star.baseAlpha + twinkle * 0.25) * starBrightness;

          const posX = (star.x + mouseRef.current.x * (star.size * 0.4) + width) % width;
          const posY = (star.y + mouseRef.current.y * (star.size * 0.4) + height) % height;

          ctx.fillStyle = hexToRgba(tokens.text, alpha);
          ctx.beginPath();
          ctx.arc(posX, posY, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // The Fixed Pole Star (Dhruva Tara)
      const polarisX = width * 0.5;
      const polarisY = Math.max(72, height * 0.16);
      const breathe = Math.sin(time * 1.8) * 0.15 + 0.85;

      const outerHalo = ctx.createRadialGradient(
        polarisX,
        polarisY,
        0,
        polarisX,
        polarisY,
        140 * breathe
      );
      outerHalo.addColorStop(0, hexToRgba(tokens.poleStarFill, 0.4));
      outerHalo.addColorStop(0.25, hexToRgba(tokens.ember, 0.18));
      outerHalo.addColorStop(0.6, hexToRgba(tokens.poleStarFill, 0.04));
      outerHalo.addColorStop(1, 'transparent');
      ctx.fillStyle = outerHalo;
      ctx.beginPath();
      ctx.arc(polarisX, polarisY, 140 * breathe, 0, Math.PI * 2);
      ctx.fill();

      // Middle ring
      const midGlow = ctx.createRadialGradient(
        polarisX,
        polarisY,
        0,
        polarisX,
        polarisY,
        36 * breathe
      );
      midGlow.addColorStop(0, hexToRgba(tokens.text, 0.95));
      midGlow.addColorStop(0.3, hexToRgba(tokens.poleStarFill, 0.8));
      midGlow.addColorStop(0.7, hexToRgba(tokens.ember, 0.3));
      midGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = midGlow;
      ctx.beginPath();
      ctx.arc(polarisX, polarisY, 36 * breathe, 0, Math.PI * 2);
      ctx.fill();

      // Classical 4-point spikes
      if (showStarSpikes) {
        ctx.save();
        ctx.strokeStyle = hexToRgba(tokens.poleStarFill, 0.45);
        ctx.lineWidth = 1;

        const spikeLenH = 55 * breathe;
        ctx.beginPath();
        ctx.moveTo(polarisX - spikeLenH, polarisY);
        ctx.lineTo(polarisX + spikeLenH, polarisY);
        ctx.stroke();

        const spikeLenV = 70 * breathe;
        ctx.beginPath();
        ctx.moveTo(polarisX, polarisY - spikeLenV);
        ctx.lineTo(polarisX, polarisY + spikeLenV);
        ctx.stroke();

        ctx.restore();
      }

      // Bright nucleus
      ctx.fillStyle = theme === 'day' ? tokens.poleStarFg : tokens.text;
      ctx.beginPath();
      ctx.arc(polarisX, polarisY, 3.2, 0, Math.PI * 2);
      ctx.fill();

      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [showStarSpikes, starBrightness, interactiveParallax, tier, theme, tokens]);

  if (tier === 'lite') {
    // Zero canvas — pure lightweight CSS/SVG representation
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none w-full h-full overflow-hidden ${className}`}
        style={{
          background: `radial-gradient(ellipse at 50% 16%, ${hexToRgba(tokens.poleStarFill, theme === 'day' ? 0.15 : 0.25)} 0%, transparent 60%)`,
        }}
      >
        {/* Simple static Polaris dot */}
        <div
          className="absolute top-[16%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--pole-star-fill)]"
          style={{ boxShadow: `0 0 16px ${tokens.poleStarFill}` }}
        />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
    />
  );
};
