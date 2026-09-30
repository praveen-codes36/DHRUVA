export interface ThemeTokens {
  bg: string;
  surface1: string;
  surface2: string;
  border: string;
  borderStrong: string;
  text: string;
  textMuted: string;
  textFaint: string;
  inkOnPaper: string;
  poleStarFg: string;
  poleStarFill: string;
  ember: string;
  onTimeFg: string;
  onTimeFill: string;
  cautionFg: string;
  cautionFill: string;
  alertFg: string;
  alertFill: string;
  trackBase: string;
}

export const hexToRgba = (hex: string, alpha: number): string => {
  if (hex.startsWith('rgba')) {
    return hex.replace(/[\d\.]+\)$/, `${alpha})`);
  }
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map((x) => x + x).join('');
  const num = parseInt(c, 16);
  if (isNaN(num)) return hex;
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
};

export const THEME_TOKENS: Record<'night' | 'day', ThemeTokens> = {
  night: {
    bg: '#05070D',
    surface1: '#0E1628',
    surface2: '#141F36',
    border: 'rgba(255, 255, 255, 0.08)',
    borderStrong: 'rgba(255, 255, 255, 0.16)',
    text: '#EDF1FA',
    textMuted: '#98A6C4',
    textFaint: '#5C6A8C',
    inkOnPaper: '#05070D',
    poleStarFg: '#F2B632',
    poleStarFill: '#F2B632',
    ember: '#FF9F58',
    onTimeFg: '#3ED07F',
    onTimeFill: '#3DDC84',
    cautionFg: '#F0A93A',
    cautionFill: '#E0912A',
    alertFg: '#FF6B57',
    alertFill: '#D24A3C',
    trackBase: '#141F36',
  },
  day: {
    bg: '#FAF7F0',
    surface1: '#FFFFFF',
    surface2: '#F1ECDF',
    border: '#E4DCC8',
    borderStrong: '#CFC3A7',
    text: '#14192B',
    textMuted: '#5B6478',
    textFaint: '#8991A6',
    inkOnPaper: '#14192B',
    poleStarFg: '#A6690E', // High contrast deep brass for text on light bg
    poleStarFill: '#F2B632', // Bright gold for fills/rings
    ember: '#D96B27',
    onTimeFg: '#1E8E52', // Darkened for AA contrast on light surface
    onTimeFill: '#3DDC84',
    cautionFg: '#B5680C',
    cautionFill: '#E0912A',
    alertFg: '#B23327',
    alertFill: '#D24A3C',
    trackBase: '#E4DCC8',
  },
};
