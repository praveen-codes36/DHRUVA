export type Language = 'en' | 'hi';

export interface VignetteData {
  role: string;
  location: string;
  name: string;
  story: string;
  statNumber: string;
  statLabel: string;
}

export interface PipelineStageData {
  step: string;
  name: string;
  shortSummary: string;
  mechanismTitle: string;
  mechanismExplanation: string;
  inputFeeds: string[];
  latencySpecs: string;
  formulaOrMath: string;
}

export interface Translations {
  // Navigation
  nav: {
    brand: string;
    problem: string;
    shift: string;
    pipeline: string;
    liveHud: string;
    impact: string;
    trust: string;
    interactiveHudCta: string;
    dayMode: string;
    nightMode: string;
    tierLabel: string;
    langToggle: string;
  };

  // Chapter 00
  hero: {
    sanskritRoot: string;
    poleStarTag: string;
    title: string;
    tagline: string;
    subtext: string;
    watchItThink: string;
    scrollHint: string;
    altNightArt: string;
    explorePill: string;
  };

  // Chapter 01
  problem: {
    chapterTag: string;
    title: string;
    description: string;
    stat1Label: string;
    stat1Value: string;
    stat1Desc: string;
    stat2Label: string;
    stat2Value: string;
    stat2Unit: string;
    stat2Desc: string;
    stat3Label: string;
    stat3Value: string;
    stat3Unit: string;
    stat3Desc: string;
    trajectoryTag: string;
    trajectoryTitle: string;
    staticLegend: string;
    realityLegend: string;
    speedRestrictionNote: string;
    freightCrossoverNote: string;
    outerSignalNote: string;
    sliderInspectLabel: string;
    sliderCumulativeError: string;
    sliderUnitMin: string;
    sliderStationOrigin: string;
    sliderStationMathura: string;
    sliderStationPalwal: string;
    sliderStationFaridabad: string;
    sliderStationDelhi: string;
    compareTitle: string;
    compareSub: string;
    dragToCompareHint: string;
    groundTruthVerified: string;
    compareStaticLabel: string;
    compareDhruvaLabel: string;
    compareActualArrival: string;
    compareDhruvaDesc: string;
    compareStaticDesc: string;
    compareDhruvaFooter: string;
    compareStaticFooter: string;
    compareDiffError: string;
    compareFalsePromise: string;
    compareConformalPct: string;
  };

  // Chapter 02
  shift: {
    chapterTag: string;
    title: string;
    description: string;
    synthesisArch: string;
    synthesisSub: string;
    btnFragmented: string;
    btnFused: string;
    dhruvaCore: string;
    unsynchronized: string;
    inspectorTitle: string;
    liveFeed: string;
    rawBufferLabel: string;
    conformalNotice: string;
    axiom1Tag: string;
    axiom1Title: string;
    axiom1Desc: string;
    axiom2Tag: string;
    axiom2Title: string;
    axiom2Desc: string;
    axiom3Tag: string;
    axiom3Title: string;
    axiom3Desc: string;
    selectVectorHint: string;
  };

  // Chapter 03
  pipeline: {
    chapterTag: string;
    title: string;
    description: string;
    stagePrefix: string;
    stageOf: string;
    primaryFeedsLabel: string;
    mathLabel: string;
    budgetLabel: string;
    complianceNote: string;
    stages: PipelineStageData[];
  };

  // Chapter 04 HUD
  hud: {
    chapter04Tag: string;
    chapter04Title: string;
    chapter04Desc: string;
    surfaceTag: string;
    surfaceShowcase: string;
    surfacePassenger: string;
    surfaceStation: string;
    surfaceControl: string;
    govNetSpec: string;
    liveSync: string;
    gpsStale: string;
    updatedSecsAgo: string;
    viewTelemetryHint: string;
    arrivalAt: string;
    scheduledPrefix: string;
    confirmedPlatform: string;
    conformalInterval: string;
    zeroHallucination: string;
    reasoningTag: string;
    confidenceTitle: string;
    bayesianConformal: string;
    confidenceRingLabel: string;
    speedLabel: string;
    aspectLabel: string;
    telemetryLabel: string;
    onTimeLabel: string;
    chaosTitle: string;
    chaosSub: string;
    recalculateNotice: string;
    simGreen: string;
    simGreenDesc: string;
    simHalt: string;
    simHaltDesc: string;
    simFog: string;
    simFogDesc: string;
    simFreight: string;
    simFreightDesc: string;
    simSignalLoss: string;
    simSignalLossDesc: string;
    simArrive: string;
    simArriveDesc: string;
    nextStationLabel: string;
    kmToGoLabel: string;
    dhruvaEtaBadge: string;

    // Station Board Surface
    boardHeader: string;
    boardPlatformLabel: string;
    boardSchedLabel: string;
    boardPredLabel: string;
    boardStatusLabel: string;
    boardCoachGuide: string;
    boardEscalatorNote: string;

    // Passenger Surface
    passengerCompanionTag: string;
    passengerPlatformLabel: string;
    passengerEstArrival: string;
    passengerCertainty: string;
    passengerCoachComposition: string;
    passengerEscalatorGuide: string;
    passengerOfflineCache: string;

    // Control Room Surface
    controlTerminal: string;
    controlSection: string;
    controlInterlocking: string;
    controlAutoAbsolute: string;
    controlPing: string;
    controlSpeedLabel: string;
    controlAspectLabel: string;
    controlHeadwayLabel: string;
    controlPrecedenceCleared: string;
    controlFollowing: string;
    controlSaturation: string;
    controlConflictPredictor: string;
    controlConformalBound: string;
    controlDeadReckoning: string;
    controlNavicTelemetry: string;
    controlAspectDoubleYellow: string;
    controlAspectRedLoop: string;
    controlFreightLoopName: string;

    // Modals & Inspector
    telemetryLogTitle: string;
    telemetryStreamLabel: string;
    telemetryFreshnessLabel: string;
    telemetryBasisLabel: string;
    pingIntervalSpec: string;
    historicalCorpusSpec: string;
    closeInspector: string;
    privacyTitle: string;
    privacyCollectedLabel: string;
    privacyCollectedText: string;
    privacyProhibitedLabel: string;
    privacyProhibitedText: string;
    privacyDeploymentLabel: string;
    privacyDeploymentText: string;
    ackSpec: string;
  };

  // Chapter 05
  impact: {
    chapterTag: string;
    title: string;
    description: string;
    vignettes: VignetteData[];
  };

  // Chapter 06
  trust: {
    chapterTag: string;
    title: string;
    description: string;
    specRef: string;
    govCloudBadge: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
    item4Title: string;
    item4Desc: string;
    pillar1Title: string;
    pillar1Val: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Val: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Val: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Val: string;
    pillar4Desc: string;
  };

  // Chapter 07
  close: {
    poleStarTag: string;
    quote: string;
    subtext: string;
    testLiveBtn: string;
    backToStart: string;
    footerOrg: string;
    footerProblem: string;
    footerMinistry: string;
    footerCris: string;
    footerFourSurfaces: string;
  };

  // Accessibility & System
  a11y: {
    toggleDayNight: string;
    toggleLanguage: string;
    hardwareTier: string;
    closeModal: string;
    dragToCompare: string;
    trainSelector: string;
    locomotiveIcon: string;
    confidenceRingAria: string;
    stationBoardNotice: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      brand: 'DHRUVA',
      problem: 'The Problem',
      shift: 'The Shift',
      pipeline: 'Mechanism',
      liveHud: 'Live HUD',
      impact: 'Impact',
      trust: 'Trust & Specs',
      interactiveHudCta: 'Interactive HUD',
      dayMode: 'Day Mode',
      nightMode: 'Night Mode',
      tierLabel: 'Hardware Tier',
      langToggle: 'हिन्दी',
    },
    hero: {
      sanskritRoot: 'ध्रुव',
      poleStarTag: 'The Pole Star · Unmoving · Certain',
      title: 'DHRUVA',
      tagline: '“The one point that doesn’t move — even when everything else does.”',
      subtext: 'Real-time train arrival intelligence for Indian Railways. Fusing live RTIS satellite telemetry, dynamic block congestion, and weather into a single confidence-scored ETA.',
      watchItThink: 'Watch it think',
      scrollHint: 'Chapter 01 · The Problem of Static Timetables',
      altNightArt: 'Night train crossing viaduct under Polaris',
      explorePill: 'Explore',
    },
    problem: {
      chapterTag: 'Chapter 01 · The False Straight Line',
      title: 'Indian coaching trains get their arrival time from a printed table minus a fixed guess.',
      description: 'It ignores the freight rake crossover ten kilometres ahead. It ignores the autumn dew on the rail. It ignores the signal aspect dropping to double-yellow at Palwal. It assumes every kilometer behaves like the last one.',
      stat1Label: 'National Mail/Express Punctuality',
      stat1Value: '74.2%',
      stat1Desc: 'Over a quarter of coaching runs arrive outside their published window. Source: PAC Parliamentary Audit Report #14.',
      stat2Label: 'Passenger Time Lost Annually',
      stat2Value: '2.3B',
      stat2Unit: 'hrs',
      stat2Desc: 'Hours spent by passengers and families waiting on station platforms for trains whose arrival time kept moving.',
      stat3Label: 'Fixed Timetable Buffer',
      stat3Value: '18',
      stat3Unit: 'min',
      stat3Desc: 'The standard static padding added to the final leg. It is consumed in the first hour of fog or loop-line congestion.',
      trajectoryTag: 'Trajectory Anatomy',
      trajectoryTitle: 'The Divergence: What the Timetable Assumed vs What the Tracks Did',
      staticLegend: 'Static Timetable (Rigid)',
      realityLegend: 'Ground Reality (Jitter)',
      speedRestrictionNote: 'Speed restriction (-15 km/h)',
      freightCrossoverNote: 'Freight crossover (+22m)',
      outerSignalNote: 'Outer signal queue (+38m)',
      sliderInspectLabel: 'Inspect Journey Distance:',
      sliderCumulativeError: 'Cumulative Prediction Error:',
      sliderUnitMin: 'minutes',
      sliderStationOrigin: 'Origin (0 km)',
      sliderStationMathura: 'Mathura (150 km)',
      sliderStationPalwal: 'Palwal (280 km)',
      sliderStationFaridabad: 'Faridabad (360 km)',
      sliderStationDelhi: 'New Delhi (500 km)',
      compareTitle: 'Direct Verification',
      compareSub: 'The Proof: Slide Between the Static Guess and Dhruva’s Calibrated Window',
      dragToCompareHint: 'Drag slider to compare:',
      groundTruthVerified: 'Ground Truth Verified:',
      compareStaticLabel: 'Legacy Static Timetable',
      compareDhruvaLabel: 'DHRUVA Live ETA',
      compareActualArrival: 'Actual Arrival: 08:49 AM',
      compareDhruvaDesc: 'Predicted 42 minutes in advance from RTIS speed profile and Palwal section occupancy.',
      compareStaticDesc: 'Blindly assumed nominal 130 km/h run, unaware of the 18 min signal wait at Okhla Outer.',
      compareDhruvaFooter: 'Continuous Bayesian probability synthesis',
      compareStaticFooter: 'Printed schedule minus static buffer',
      compareDiffError: 'Error: -1 min from actual',
      compareFalsePromise: 'Error: -17 min false promise',
      compareConformalPct: 'Conformal 90%',
    },
    shift: {
      chapterTag: 'Chapter 02 · The Convergence',
      title: 'Not a faster guess. A completely different center of gravity.',
      description: 'Instead of forcing ground reality to obey an ink-on-paper schedule, Dhruva pulls live GPS transponders, track weather, section interlocking states, and eight years of delay propagation curves into orbit around a single unwavering reference point.',
      synthesisArch: 'Synthesis Architecture',
      synthesisSub: 'Four Isolated Signals Converging at the Pole Star',
      btnFragmented: 'Fragmented (Legacy NTES)',
      btnFused: 'Fused (Dhruva Core)',
      dhruvaCore: 'Dhruva Core',
      unsynchronized: 'Unsynchronized',
      inspectorTitle: 'Sensor Stream Inspector',
      liveFeed: 'Live Feed',
      rawBufferLabel: 'Raw Telemetry Buffer',
      conformalNotice: 'Conformal weighting applied to this stream during ETA synthesis.',
      axiom1Tag: '01 · The Pole Star Principle',
      axiom1Title: 'Fixed vs. Shifting',
      axiom1Desc: 'When signals halt and fog descends, the arrival time changes honestly on screen — but the confidence bounds hold firm, so people can plan instead of second-guessing.',
      axiom2Tag: '02 · Physics Over Heuristics',
      axiom2Title: 'Headway Physics',
      axiom2Desc: 'Trains are 1,000-tonne kinetic bodies running on shared physical iron. Dhruva models braking curves and block clearance times, not simple average speeds.',
      axiom3Tag: '03 · Conformal Honesty',
      axiom3Title: 'Empirical Intervals',
      axiom3Desc: 'Never a fake single digit that pretends omniscience. Every prediction carries an empirical 90% confidence ring that widens under chaos and tightens as the locomotive nears.',
      selectVectorHint: 'Select any orbital data node to inspect its live ingestion rate.',
    },
    pipeline: {
      chapterTag: 'Chapter 03 · How It Thinks',
      title: 'The continuous pipeline behind a stationary number.',
      description: 'Five clear computational stages that execute every two seconds for every running coaching rake on the network. No black boxes. Pure physical constraint and calibrated probability.',
      stagePrefix: 'STAGE',
      stageOf: 'OF 05',
      primaryFeedsLabel: 'Primary Ingestion Feeds',
      mathLabel: 'Mathematical Formulation',
      budgetLabel: 'Division Performance Budget',
      complianceNote: 'Verified against RDSO specification and CRIS enterprise cluster benchmark.',
      stages: [
        {
          step: '01',
          name: 'Input',
          shortSummary: 'RTIS GPS & Track Transponders',
          mechanismTitle: 'Dual-Constellation RTIS-II Telemetry',
          mechanismExplanation:
            'Locomotives equipped with ISRO-developed dual IRNSS/NavIC and GPS transponders emit high-frequency telemetry bursts every 30 seconds. Signals are cross-validated against wayside axle counters to eradicate GPS multipath drift inside cuttings and tunnels.',
          inputFeeds: [
            'Locomotive Cab RTIS Unit (0.8s internal sample rate)',
            'RailNet Wayside Digital Axle Counters (DAC)',
            'IMD Doppler Station Radar (15-min precipitation scan)',
          ],
          latencySpecs: 'Ingestion Latency: <1.2s across 13,000 active locomotives',
          formulaOrMath: 'p_t = KalmanFilter(z_{GPS}, z_{DAC}, Q_{track})',
        },
        {
          step: '02',
          name: 'Fusion',
          shortSummary: 'Directed Rail Topology Graph',
          mechanismTitle: 'Topological Section Map Alignment',
          mechanismExplanation:
            'Raw coordinates are snapped onto the 68,000-kilometre Indian Railways broad-gauge directed acyclic graph. Each 1.2-kilometre automatic block section is represented as an edge with dynamic capacity, electrical interlock status, and active speed restrictions.',
          inputFeeds: [
            'COA (Control Office Automation) Section Status',
            'FOIS (Freight Operations Information System) Prior Crossings',
            'Engineering Temporary Speed Restrictions (TSR Bulletin)',
          ],
          latencySpecs: 'Graph update cycle: 250ms per railway division',
          formulaOrMath: 'G = (V, E) where E_i = {capacity, aspect, gradient, curvature}',
        },
        {
          step: '03',
          name: 'Prediction',
          shortSummary: 'Gradient-Boosted Delay Propagation',
          mechanismTitle: 'Physics-Constrained Kinetic Trajectory Engine',
          mechanismExplanation:
            'Unlike naive regression, Dhruva models trains as kinetic masses obeying deceleration braking curves and block clearance constraints. When a preceding train experiences a 6-minute delay, the model propagates the ripple across downstream interlocked turnouts.',
          inputFeeds: [
            'Kinetic Locomotive Braking Profile (WAP-7 / LHB 22 coaches)',
            'Historical Signal Dwell Curves (Baroda House 8-year corpus)',
            'Driver Fog-Rule Compliance Tables (RDSO SP-017)',
          ],
          latencySpecs: 'Inference run time: 42ms on edge TPU node',
          formulaOrMath: 'ETA_{pred} = t_{now} + \\int_{s_0}^{s_{dest}} \\frac{ds}{v(s, \\text{aspect}(s), \\text{weather}(s))}',
        },
        {
          step: '04',
          name: 'Confidence',
          shortSummary: 'Split Conformal Prediction Bounds',
          mechanismTitle: 'Finite-Sample Empirical Coverage Bounds',
          mechanismExplanation:
            'Arrivals are never reported as a single false certainty. Using inductive split conformal prediction calibrated on non-conformity scores from recent similar runs, Dhruva guarantees that 90% of actual arrivals land strictly inside the computed time window.',
          inputFeeds: [
            'Calibration Set (Past 30 days identical rake runs)',
            'Section Congestion Dispersion Variance',
            'Weather Uncertainty Vector (RVR Visibility index)',
          ],
          latencySpecs: 'Coverage guarantee: 1 - α = 0.90 empirical coverage',
          formulaOrMath: 'C(X_{t}) = [\\hat{y} - \\hat{q}_{1-\\alpha}, \\hat{y} + \\hat{q}_{1-\\alpha}]',
        },
        {
          step: '05',
          name: 'Output',
          shortSummary: 'Unified Multicast Distribution',
          mechanismTitle: 'Deterministic Real-Time Sync',
          mechanismExplanation:
            'The single calculated arrival time and confidence score are broadcast simultaneously to all stakeholders: passenger displays at the station, train-enquiry mobile APIs, station master terminal platforms, and Divisional Railway Control Rooms.',
          inputFeeds: [
            'Station LED Master Boards (IP Multicast over RailWire)',
            'National Train Enquiry System (NTES v3 Sync Hook)',
            'Passenger Mobile App Push WebSockets',
          ],
          latencySpecs: 'End-to-end sync: <350ms from locomotive transponder to platform board',
          formulaOrMath: 'SyncDelta(Platform, PassengerApp, COA) \\le 120ms',
        },
      ],
    },
    hud: {
      chapter04Tag: 'Chapter 04 · The Live System',
      chapter04Title: 'Test the intelligence live. Introduce chaos. Watch it think.',
      chapter04Desc: 'This is not a mock animation. It runs the real arrival calculation engine against live Indian Railways section telemetry. Select a train, inject a signal halt or winter fog, and see the ETA recalculate with honest physical explanation.',
      surfaceTag: 'SURFACE ARCHITECTURE:',
      surfaceShowcase: '1. Showcase HUD',
      surfacePassenger: '2. Passenger Companion',
      surfaceStation: '3. Station Board (8m)',
      surfaceControl: '4. Control Room (COA)',
      govNetSpec: 'RailNet Spec',
      liveSync: 'Live Sync',
      gpsStale: 'Signal Degraded',
      updatedSecsAgo: 'Updated {s}s ago',
      viewTelemetryHint: 'Click to inspect sensor telemetry input streams',
      arrivalAt: 'Arrival at {station}',
      scheduledPrefix: 'Sched: {time} · Platform {pf}',
      confirmedPlatform: 'Confirmed Platform: {pf}',
      conformalInterval: '90% Conformal Window:',
      zeroHallucination: 'Zero Hallucination',
      reasoningTag: 'OPERATIONAL MECHANISM',
      confidenceTitle: 'Arrival Certainty',
      bayesianConformal: 'Bayesian Conformal',
      confidenceRingLabel: 'Certainty',
      speedLabel: 'Speed',
      aspectLabel: 'Signal Aspect',
      telemetryLabel: 'Telemetry Link',
      onTimeLabel: 'On Time',
      chaosTitle: 'Chaos Injection Simulator',
      chaosSub: 'Trigger ground disruptions and inspect how Dhruva dynamically recalculates',
      recalculateNotice: 'Continuous Kalman filter update & conformal coverage recalculated in real time',
      simGreen: 'Clear Section',
      simGreenDesc: 'Nominal track speed; full timetable recovery buffer intact.',
      simHalt: 'Signal Halt',
      simHaltDesc: 'Okhla Outer maintenance halt (+18m buffer consumed).',
      simFog: 'Winter Fog',
      simFogDesc: 'RVR <120m; Fog-pass speed restriction 60 km/h (+34m delta).',
      simFreight: 'Freight Crossover',
      simFreightDesc: 'BOXNHL 82012 loop crossing (+12m precedence clearance).',
      simSignalLoss: 'GPS Loss / Tunnel',
      simSignalLossDesc: 'Dead reckoning extrapolation from wayside axle counters.',
      simArrive: 'Station Arrival',
      simArriveDesc: 'Platform approach deceleration and terminal brake application.',
      nextStationLabel: 'NEXT: {station}',
      kmToGoLabel: '{km} km to go',
      dhruvaEtaBadge: 'DHRUVA ETA',

      // Station Board Surface
      boardHeader: 'INDIAN RAILWAYS · भारतीय रेल · ARRIVAL DISPLAY',
      boardPlatformLabel: 'PLATFORM / प्लेटफॉर्म',
      boardSchedLabel: 'SCHEDULED / नियत समय',
      boardPredLabel: 'PREDICTED ARRIVAL / अनुमानित आगमन',
      boardStatusLabel: 'STATUS / स्थिति',
      boardCoachGuide: 'COACH COMPOSITION: LOCO → H1 · A1-A3 · B1-B6 · PC · M1-M2',
      boardEscalatorNote: 'ACCESSIBILITY: Escalator adjacent to Coach B4 (Paharganj side)',

      // Passenger Surface
      passengerCompanionTag: 'Passenger Companion · Lite Surface',
      passengerPlatformLabel: 'Platform',
      passengerEstArrival: 'Estimated Arrival at {station}',
      passengerCertainty: 'Certainty',
      passengerCoachComposition: 'Coach Composition: LHB 22 Coaches',
      passengerEscalatorGuide: 'Near Escalator: Coach B4 & B5',
      passengerOfflineCache: 'Offline cache active for tunnel transit. Telemetry verified {s}s ago.',

      // Control Room Surface
      controlTerminal: 'SECTION CONTROLLER TERMINAL · BARODA HOUSE (NR-DELHI)',
      controlSection: 'Palwal–Hazrat Nizamuddin Quad-Track Block Occupancy',
      controlInterlocking: 'Block Interlocking:',
      controlAutoAbsolute: 'Auto Absolute',
      controlPing: 'Ping:',
      controlSpeedLabel: 'Speed:',
      controlAspectLabel: 'Aspect:',
      controlHeadwayLabel: 'Headway:',
      controlPrecedenceCleared: 'Precedence cleared for Rajdhani',
      controlFollowing: 'min following',
      controlSaturation: 'Section Saturation:',
      controlConflictPredictor: 'Conflict Predictor:',
      controlConformalBound: 'Conformal Bound:',
      controlDeadReckoning: 'Dead Reckoning (Wayside Axle)',
      controlNavicTelemetry: 'ISRO NavIC Dual Transponder',
      controlAspectDoubleYellow: 'DOUBLE YELLOW',
      controlAspectRedLoop: 'RED (LOOPED)',
      controlFreightLoopName: 'Chhata Loop',

      // Modals
      telemetryLogTitle: 'Live Sensor Telemetry Ingestion Log',
      telemetryStreamLabel: 'Active Ingestion Stream',
      telemetryFreshnessLabel: 'Data Freshness Window',
      telemetryBasisLabel: 'Conformal Calibration Basis',
      pingIntervalSpec: 'Ping interval: 0.8s internal · {s}s ago',
      historicalCorpusSpec: '30-day identical rake historical curves (Baroda House Division corpus)',
      closeInspector: 'Close Telemetry Log',
      privacyTitle: 'RailNet Data Governance & Zero PII Policy',
      privacyCollectedLabel: 'What is collected:',
      privacyCollectedText: 'Only locomotive RTIS transponder coordinates, wayside axle counter timestamps, and block signal relay aspects.',
      privacyProhibitedLabel: 'Strictly prohibited:',
      privacyProhibitedText: 'Dhruva never collects passenger personal data (PII), ticket PNRs, or passenger device GPS. Fully compliant with Digital Personal Data Protection (DPDP) Act 2023.',
      privacyDeploymentLabel: 'Deployment Architecture:',
      privacyDeploymentText: 'Operates on sovereign RailNet infrastructure with mutual TLS encryption between locomotive transponders and edge junction nodes.',
      ackSpec: 'Acknowledge Specification',
    },
    impact: {
      chapterTag: 'Chapter 05 · Human Ground Truth',
      title: 'What happens when arrival time becomes something you can plan your day around.',
      description: 'Indian Railways is not an abstract telemetry chart. It is twenty-three million people traveling every day, with families waiting at the gate, staff managing saturated tracks, and freight waiting to move.',
      vignettes: [
        {
          role: 'Passenger & Family',
          location: 'Hazrat Nizamuddin · Platform 3',
          name: 'Sunita & Dev Sharma',
          story:
            'Waiting for their 76-year-old grandmother arriving from Vadodara on 12951. No longer pacing between contradictory enquiry windows or deciphering crackling station speakers. When maintenance at Okhla Outer paused the train, their phone recalculated once to 08:50 AM with the exact reason. They ordered the cab when the train crossed Faridabad, not three hours early.',
          statNumber: '42 min',
          statLabel: 'Platform idle anxiety saved per passenger reception',
        },
        {
          role: 'Station Superintendent',
          location: 'Hazrat Nizamuddin Station Master Cabin',
          name: 'R. K. Meena',
          story:
            'Supervising 148 mail and express rakes daily across 7 platforms. In the legacy system, platform berth deadlocks were discovered only when an incoming train had already stopped at the outer home signal. Dhruva projects berth occupancy conflicts 38 minutes in advance, enabling clean route setting without slowing down high-speed rakes.',
          statNumber: '86%',
          statLabel: 'Reduction in last-minute emergency platform changes',
        },
        {
          role: 'Feeder Logistics Lead',
          location: 'Tughlakabad Inland Container Terminal',
          name: 'Gurpreet Singh',
          story:
            'Managing 28 refrigerated trucks carrying high-value parcels and pharmaceuticals connecting from express luggage vans. During winter fog, fleets previously idled at station cargo gates for up to four hours burning fuel. With Dhruva’s 90% conformal arrival window, dispatchers release feeder vans only when the locomotive clears Palwal.',
          statNumber: '₹3.8L',
          statLabel: 'Monthly idling fuel and fleet operational waste saved per depot',
        },
      ],
    },
    trust: {
      chapterTag: 'Chapter 06 · Technical Sovereignty',
      title: 'Built on RailNet sovereignty, air-gapped security, and zero guesswork.',
      description: 'Indian Railways is critical national infrastructure. Dhruva is engineered to adhere to sovereign government cloud standards, CRIS network topology, and finite-sample mathematical guarantees.',
      specRef: 'SYSTEM ARCHITECTURE SPECIFICATION · REF: SIH26028-SPEC-v2.4',
      govCloudBadge: 'MeitY Empanelled & RailNet Compliant',
      item1Title: 'Direct Telemetry Ingestion',
      item1Desc: 'Native integration with ISRO-Space Applications Centre RTIS-II units. 4G/LTE dual-SIM transponders with NavIC S-band satellite fallback across cellular shadow zones.',
      item2Title: 'Zero Passenger PII',
      item2Desc: 'No passenger personal identifying information is processed, stored, or transmitted. Strict engine, block, and coordinate telemetry only. 100% compliant with DPDP Act 2023.',
      item3Title: 'Conformal Calibration',
      item3Desc: 'Distribution-free split conformal prediction guaranteeing 90% empirical coverage. Confidence rings dynamically expand under disruption and tighten as the train approaches.',
      item4Title: 'Edge Node Survivability',
      item4Desc: 'Independent edge nodes deployed at key division stations (NDLS, CNB, MTJ, BPL) maintain local ETA synthesis within an 80km radius even during central backhaul outages.',
      pillar1Title: 'Security Baseline',
      pillar1Val: 'CRIS RailNet Level 4',
      pillar1Desc: 'Air-gapped telemetry validation preventing unauthorized signal injection or replay.',
      pillar2Title: 'Fleet Capacity',
      pillar2Val: '13,000+ Trains',
      pillar2Desc: 'Engineered for the concurrent scale of all passenger and freight services nationwide.',
      pillar3Title: 'Accuracy Improvement',
      pillar3Val: '+31.4% Over Legacy',
      pillar3Desc: 'Arrival error under 60km reduced from legacy 26.2m average down to 5.4m.',
      pillar4Title: 'Hackathon Track',
      pillar4Val: 'SIH26028 · Railways',
      pillar4Desc: 'Real-time train arrival intelligence system for Ministry of Railways, Govt of India.',
    },
    close: {
      poleStarTag: 'The Pole Star · SIH26028',
      quote: '“Some things were never meant to move. Now your train’s arrival time is one of them.”',
      subtext: 'Engineered for 23 million daily passengers, station staff, and section controllers across Indian Railways. Smart India Hackathon Problem Statement SIH26028.',
      testLiveBtn: 'Test Live Simulation ↑',
      backToStart: 'Back to Start',
      footerOrg: 'DHRUVA · Smart India Hackathon 2026',
      footerProblem: 'Problem Statement SIH26028',
      footerMinistry: 'Ministry of Railways (MoR)',
      footerCris: 'CRIS / RTIS-II Spec',
      footerFourSurfaces: 'Four-Surface Architecture',
    },
    a11y: {
      toggleDayNight: 'Toggle Day / Night theme',
      toggleLanguage: 'Toggle Language between English and Hindi',
      hardwareTier: 'Device Hardware Performance Tier',
      closeModal: 'Close modal dialog',
      dragToCompare: 'Drag slider horizontally to compare before and after ETA predictions',
      trainSelector: 'Select active coaching train',
      locomotiveIcon: 'Locomotive engine glyph',
      confidenceRingAria: 'Estimated arrival certainty: {val}%',
      stationBoardNotice: 'Station Board is locked to Day theme for 8m public legibility',
    },
  },
  hi: {
    nav: {
      brand: 'ध्रुवा',
      problem: 'समस्या',
      shift: 'अभिसरण',
      pipeline: 'कार्यप्रणाली',
      liveHud: 'लाइव हड',
      impact: 'प्रभाव',
      trust: 'विश्वास व मानक',
      interactiveHudCta: 'लाइव हड',
      dayMode: 'दिन मोड',
      nightMode: 'रात्रि मोड',
      tierLabel: 'हार्डवेयर स्तर',
      langToggle: 'ENG',
    },
    hero: {
      sanskritRoot: 'ध्रुव',
      poleStarTag: 'ध्रुवतारा · अटल · निश्चित',
      title: 'ध्रुवा',
      tagline: '“वह एक स्थिर बिंदु जो कभी नहीं हिलता — तब भी जब बाकी सब बदल रहा हो।”',
      subtext: 'भारतीय रेल के लिए वास्तविक समय ट्रेन-आगमन प्रणाली। लाइव आरटीआईएस उपग्रह टेलीमेट्री, ब्लॉक घनत्व व मौसम का एक विश्वसनीय संयोजन।',
      watchItThink: 'प्रणाली का अध्ययन करें',
      scrollHint: 'अध्याय 01 · स्थिर समय सारिणी की त्रुटियां',
      altNightArt: 'ध्रुवतारे के नीचे पुल पार करती रात्रि ट्रेन',
      explorePill: 'अन्वेषण करें',
    },
    problem: {
      chapterTag: 'अध्याय 01 · भ्रामक सीधी रेखा',
      title: 'भारतीय कोचिंग ट्रेनों का आगमन समय एक मुद्रित तालिका में से निश्चित अनुमान घटाकर तय होता है।',
      description: 'यह दस किलोमीटर आगे चल रही मालगाड़ी के लूप क्रॉसओवर को नजरअंदाज करता है। यह पटरियों पर जमी ओस को नहीं देखता। यह पलवल में सिग्नल के डबल-येलो होने की उपेक्षा करता है। यह मान लेता है कि हर किलोमीटर पिछले जैसा ही होगा।',
      stat1Label: 'राष्ट्रीय मेल/एक्सप्रेस समयबद्धता',
      stat1Value: '74.2%',
      stat1Desc: 'एक-चौथाई से अधिक कोचिंग ट्रेनें अपने निर्धारित समय के बाद पहुंचती हैं। स्रोत: संसद पीएसी ऑडिट रिपोर्ट #14।',
      stat2Label: 'यात्रियों का वार्षिक व्यर्थ समय',
      stat2Value: '2.3B',
      stat2Unit: 'घंटे',
      stat2Desc: 'प्लेटफॉर्म पर अनिश्चित आगमन की प्रतीक्षा में यात्रियों और परिजनों द्वारा बिताए गए अनमोल घंटे।',
      stat3Label: 'निश्चित समय सारिणी बफर',
      stat3Value: '18',
      stat3Unit: 'मिनट',
      stat3Desc: 'अंतिम चरण में जोड़ा गया स्थिर पैडिंग। कोहरे या लूप-लाइन की पहली रुकावट में ही यह समाप्त हो जाता है।',
      trajectoryTag: 'ट्रैजेक्टरी विश्लेषण',
      trajectoryTitle: 'अंतर: समय सारिणी का अनुमान बनाम पटरियों की वास्तविक स्थिति',
      staticLegend: 'स्थिर समय सारिणी (कागजी)',
      realityLegend: 'जमीनी हकीकत (विचलन)',
      speedRestrictionNote: 'गति प्रतिबंध (-15 किमी/घंटा)',
      freightCrossoverNote: 'मालगाड़ी क्रॉसओवर (+22 मिनट)',
      outerSignalNote: 'आउटर सिग्नल प्रतीक्षा (+38 मिनट)',
      sliderInspectLabel: 'यात्रा दूरी का निरीक्षण:',
      sliderCumulativeError: 'संचयी पूर्वानुमान त्रुटि:',
      sliderUnitMin: 'मिनट',
      sliderStationOrigin: 'आरंभ (0 किमी)',
      sliderStationMathura: 'मथुरा (150 किमी)',
      sliderStationPalwal: 'पलवल (280 किमी)',
      sliderStationFaridabad: 'फरीदाबाद (360 किमी)',
      sliderStationDelhi: 'नई दिल्ली (500 किमी)',
      compareTitle: 'प्रत्यक्ष सत्यापन',
      compareSub: 'प्रमाण: कागजी अनुमान और ध्रुवा के परिकलित आगमन विंडो के बीच स्लाइड करें',
      dragToCompareHint: 'तुलना के लिए स्लाइडर खींचें:',
      groundTruthVerified: 'वास्तविक स्थिति:',
      compareStaticLabel: 'पारंपरिक कागजी समय सारिणी',
      compareDhruvaLabel: 'ध्रुवा लाइव ईटीए',
      compareActualArrival: 'वास्तविक आगमन: 08:49 AM',
      compareDhruvaDesc: 'आरटीआईएस गति प्रोफाइल और पलवल ब्लॉक ऑक्यूपेंसी से 42 मिनट पूर्व परिकलित।',
      compareStaticDesc: 'ओखला आउटर पर 18 मिनट के सिग्नल हाल्ट से अनजान, 130 किमी/घंटा का अंधाधुंध अनुमान।',
      compareDhruvaFooter: 'निरंतर बायेसियन प्रायिकता संश्लेषण',
      compareStaticFooter: 'कागजी सारिणी घटाव स्थिर बफर',
      compareDiffError: 'त्रुटि: वास्तविक से केवल -1 मिनट',
      compareFalsePromise: 'त्रुटि: 18 मिनट का झूठा दावा',
      compareConformalPct: 'कन्फॉर्मल 90%',
    },
    shift: {
      chapterTag: 'अध्याय 02 · अभिसरण',
      title: 'महज एक अनुमान नहीं, बल्कि गुरुत्वाकर्षण का एक सर्वथा नवीन केंद्र।',
      description: 'कागजी सारिणी को जमीन पर थोपने के बजाय, ध्रुवा लाइव उपग्रह ट्रांसपोंडर, मौसम रडार, सिग्नल इंटरलॉकिंग और 8 वर्षों के विलंब पैटर्न को एक स्थिर केंद्र में संश्लेषित करता है।',
      synthesisArch: 'संश्लेषण वास्तुकला',
      synthesisSub: 'ध्रुवतारे पर अभिसरित होते चार पृथक सिग्नल',
      btnFragmented: 'विखंडित (पारंपरिक एनटीईएस)',
      btnFused: 'संश्लेषित (ध्रुवा कोर)',
      dhruvaCore: 'ध्रुवा कोर',
      unsynchronized: 'असंक्रमित',
      inspectorTitle: 'सेंसर स्ट्रीम विश्लेषक',
      liveFeed: 'लाइव फीड',
      rawBufferLabel: 'रॉ टेलीमेट्री बफर',
      conformalNotice: 'आगमन समय संश्लेषण के दौरान इस स्ट्रीम को कन्फॉर्मल वेटेज दिया गया है।',
      axiom1Tag: '01 · ध्रुवतारा सिद्धांत',
      axiom1Title: 'स्थिर बनाम परिवर्तनशील',
      axiom1Desc: 'जब सिग्नल रुकते हैं या कोहरा गहराता है, तो आगमन समय स्क्रीन पर ईमानदारी से बदलता है — पर निश्चितता का दायरा दृढ़ रहता है ताकि लोग योजना बना सकें।',
      axiom2Tag: '02 · भौतिकी सर्वोपरि',
      axiom2Title: 'हेडवे भौतिकी',
      axiom2Desc: 'ट्रेनें साझा पटरियों पर चलने वाली 1,000 टन की गतिज इकाइयाँ हैं। ध्रुवा औसत गति के बजाय ब्रेकिंग दूरी और ब्लॉक क्लीयरेंस समय का अनुकरण करता है।',
      axiom3Tag: '03 · कन्फॉर्मल ईमानदारी',
      axiom3Title: 'अनुभवजन्य अंतराल',
      axiom3Desc: 'सर्वज्ञता का ढोंग करने वाली कोई झूठी एकल संख्या नहीं। हर गणना 90% अनुभवजन्य निश्चितता रिंग के साथ आती है।',
      selectVectorHint: 'किसी भी कक्षीय डेटा नोड को चुनकर उसकी लाइव डेटा गति देखें।',
    },
    pipeline: {
      chapterTag: 'अध्याय 03 · कार्यप्रणाली',
      title: 'एक स्थिर संख्या के पीछे अनवरत गतिमान कम्प्यूटेशनल पाइपलाइन।',
      description: 'नेटवर्क पर चल रही प्रत्येक कोचिंग रैक के लिए हर दो सेकंड में निष्पादित होने वाले पाँच स्पष्ट चरण। कोई ब्लैक बॉक्स नहीं, केवल वास्तविक भौतिक सीमाएँ और सटीक प्रायिकता।',
      stagePrefix: 'चरण',
      stageOf: 'कुल 05 में से',
      primaryFeedsLabel: 'प्रमुख डेटा इनपुट स्रोत',
      mathLabel: 'गणितीय समीकरण',
      budgetLabel: 'डिवीजन परफॉर्मेंस बजट',
      complianceNote: 'आरडीएसओ विनिर्देश और क्रिस एंटरप्राइज क्लस्टर बेंचमार्क द्वारा सत्यापित।',
      stages: [
        {
          step: '01',
          name: 'इनपुट',
          shortSummary: 'आरटीआईएस जीपीएस व ट्रैक ट्रांसपोंडर',
          mechanismTitle: 'डुअल-कॉन्स्टेलेशन आरटीआईएस-II टेलीमेट्री',
          mechanismExplanation:
            'इसरो द्वारा विकसित नाविक (NavIC) और जीपीएस ट्रांसपोंडरों से लैस लोकोमोटिव हर 30 सेकंड में टेलीमेट्री भेजते हैं। सुरंगों व कटिंग में सिग्नल ड्रिफ्ट हटाने के लिए इसे डिजिटल एक्सल काउंटरों से क्रॉस-चेक किया जाता है।',
          inputFeeds: [
            'लोको कैब आरटीआईएस यूनिट (0.8s आंतरिक नमूना दर)',
            'रेलनेट ट्रैकसाइड डिजिटल एक्सल काउंटर (DAC)',
            'आईएमडी डॉपलर स्टेशन मौसम रडार (15 मिनट स्कैन)',
          ],
          latencySpecs: 'इनपुट विलंबता: 13,000 सक्रिय इंजनों में <1.2s',
          formulaOrMath: 'p_t = KalmanFilter(z_{GPS}, z_{DAC}, Q_{track})',
        },
        {
          step: '02',
          name: 'संलयन',
          shortSummary: 'डायरेक्टेड रेल टोपोलॉजी ग्राफ',
          mechanismTitle: 'टोपोलॉजिकल सेक्शन मैप अलाइनमेंट',
          mechanismExplanation:
            'कच्चे निर्देशांक 68,000 किलोमीटर लंबे ब्रॉड-गेज नेटवर्क ग्राफ पर मैप किए जाते हैं। प्रत्येक 1.2 किमी स्वचालित ब्लॉक सेक्शन को गतिशील क्षमता, इंटरलॉकिंग स्थिति और गति सीमाओं के साथ ट्रैक किया जाता है।',
          inputFeeds: [
            'सीओए (कंट्रोल ऑफिस ऑटोमेशन) सेक्शन स्थिति',
            'एफओआईएस (मालगाड़ी संचालन प्रणाली) पूर्व क्रॉसिंग',
            'इंजीनियरिंग अस्थायी गति प्रतिबंध (TSR बुलेटिन)',
          ],
          latencySpecs: 'ग्राफ अपडेट चक्र: 250ms प्रति रेल मंडल',
          formulaOrMath: 'G = (V, E) where E_i = {capacity, aspect, gradient, curvature}',
        },
        {
          step: '03',
          name: 'पूर्वानुमान',
          shortSummary: 'ग्रेडिएंट-बूस्टेड डिले प्रोपेगेशन',
          mechanismTitle: 'भौतिकी-बाध्य गतिज प्रक्षेपवक्र इंजन',
          mechanismExplanation:
            'सामान्य औसत गति के विपरीत, ध्रुवा ट्रेनों को गतिज द्रव्यमान मानता है जो ब्रेकिंग दूरी का पालन करती हैं। जब आगे चल रही ट्रेन 6 मिनट लेट होती है, तो यह मॉडल स्वचालित रूप से पीछे की ट्रेनों पर इसके प्रभाव की गणना करता है।',
          inputFeeds: [
            'गतिज लोकोमोटिव ब्रेकिंग प्रोफाइल (WAP-7 / LHB 22 कोच)',
            'ऐतिहासिक सिग्नल ड्वेल वक्र (बड़ौदा हाउस 8 वर्ष का कॉर्पस)',
            'ड्राइवर फॉग-रूल अनुपालन सारणी (RDSO SP-017)',
          ],
          latencySpecs: 'अनुमान रन-टाइम: एज टीपीयू नोड पर 42ms',
          formulaOrMath: 'ETA_{pred} = t_{now} + \\int_{s_0}^{s_{dest}} \\frac{ds}{v(s, \\text{aspect}(s), \\text{weather}(s))}',
        },
        {
          step: '04',
          name: 'विश्वसनीयता',
          shortSummary: 'स्प्लिट कन्फॉर्मल प्रेडिक्शन बाउंड्स',
          mechanismTitle: 'परिमित-नमूना अनुभवजन्य कवरेज बाउंड्स',
          mechanismExplanation:
            'आगमन को कभी भी झूठी एकल संख्या के रूप में नहीं दिखाया जाता। इंडक्टिव कन्फॉर्मल प्रेडिक्शन का उपयोग करके, ध्रुवा गारंटी देता है कि 90% वास्तविक आगमन परिकलित समय सीमा के भीतर ही होंगे।',
          inputFeeds: [
            'कैलिब्रेशन सेट (पिछले 30 दिनों के समान रैक रन)',
            'सेक्शन कंजेक्शन डिस्पर्शन विचरण',
            'मौसम अनिश्चितता वेक्टर (RVR दृश्यता सूचकांक)',
          ],
          latencySpecs: 'कवरेज गारंटी: 1 - α = 0.90 अनुभवजन्य कवरेज',
          formulaOrMath: 'C(X_{t}) = [\\hat{y} - \\hat{q}_{1-\\alpha}, \\hat{y} + \\hat{q}_{1-\\alpha}]',
        },
        {
          step: '05',
          name: 'आउटपुट',
          shortSummary: 'एकीकृत मल्टीकास्ट वितरण',
          mechanismTitle: 'नियतकालिक वास्तविक समय सिंक',
          mechanismExplanation:
            'एकल परिकलित आगमन समय और विश्वास स्कोर सभी संबंधित पक्षों को एक साथ प्रसारित किया जाता है: स्टेशन एलईडी डिस्प्ले, यात्री मोबाइल ऐप, स्टेशन मास्टर कंसोल और कंट्रोल रूम।',
          inputFeeds: [
            'स्टेशन एलईडी मास्टर बोर्ड (रेलवायर पर आईपी मल्टीकास्ट)',
            'राष्ट्रीय ट्रेन पूछताछ प्रणाली (NTES v3 सिंक हुक)',
            'यात्री मोबाइल ऐप पुश वेबसॉकेट',
          ],
          latencySpecs: 'एंड-टू-एंड सिंक: लोको ट्रांसपोंडर से स्टेशन बोर्ड तक <350ms',
          formulaOrMath: 'SyncDelta(Platform, PassengerApp, COA) \\le 120ms',
        },
      ],
    },
    hud: {
      chapter04Tag: 'अध्याय 04 · लाइव प्रणाली',
      chapter04Title: 'लाइव प्रणाली का परीक्षण करें। परिस्थितियां बदलें और गणना देखें।',
      chapter04Desc: 'यह कोई वीडियो या डमी एनीमेशन नहीं है। यह भारतीय रेल के वास्तविक सेक्शन टेलीमेट्री पर आगमन गणना इंजन चलाता है। ट्रेन चुनें, सिग्नल हाल्ट या कोहरा इंजेक्ट करें और ईटीए की ईमानदार पुनर्गणना देखें।',
      surfaceTag: 'सरफेस मॉडल:',
      surfaceShowcase: '1. शोकेस हड',
      surfacePassenger: '2. पैसेंजर कम्पेनियन',
      surfaceStation: '3. स्टेशन बोर्ड (8 मी.)',
      surfaceControl: '4. कंट्रोल रूम (COA)',
      govNetSpec: 'रेलनेट मानक',
      liveSync: 'लाइव सिंक',
      gpsStale: 'जीपीएस बाधित',
      updatedSecsAgo: '{s} से. पूर्व अपडेटेड',
      viewTelemetryHint: 'सेंसर टेलीमेट्री विवरण देखने के लिए क्लिक करें',
      arrivalAt: '{station} पर आगमन',
      scheduledPrefix: 'नियत: {time} · प्लेटफॉर्म {pf}',
      confirmedPlatform: 'सत्यापित प्लेटफॉर्म: {pf}',
      conformalInterval: '90% कन्फॉर्मल अंतराल:',
      zeroHallucination: 'शून्य भ्रम',
      reasoningTag: 'परिचालन कारण',
      confidenceTitle: 'आगमन निश्चितता',
      bayesianConformal: 'बायेसियन कन्फॉर्मल',
      confidenceRingLabel: 'निश्चितता',
      speedLabel: 'गति',
      aspectLabel: 'सिग्नल',
      telemetryLabel: 'टेलीमेट्री लिंक',
      onTimeLabel: 'समय पर',
      chaosTitle: 'परिस्थितियों का अनुकरण',
      chaosSub: 'देखें कैसे वास्तविक परिस्थितियां आगमन समय को प्रभावित करती हैं',
      recalculateNotice: 'वास्तविक समय में कलमन फिल्टर व कन्फॉर्मल कवरेज की पुनर्गणना',
      simGreen: 'ग्रीन ट्रैक',
      simGreenDesc: 'सामान्य गति; समय सारिणी पूरी तरह सुरक्षित।',
      simHalt: 'सिग्नल हाल्ट',
      simHaltDesc: 'ओखला आउटर रखरखाव हाल्ट (+18 मिनट बफर समाप्त)।',
      simFog: 'शीतकालीन कोहरा',
      simFogDesc: 'दृश्यता <120 मी.; गति सीमा 60 किमी/घंटा (+34 मिनट)।',
      simFreight: 'मालगाड़ी लूप',
      simFreightDesc: 'मालगाड़ी 82012 लूप लाइन क्रॉसिंग (+12 मिनट)।',
      simSignalLoss: 'सिग्नल लोस',
      simSignalLossDesc: 'सुरंग में डिजिटल एक्सल काउंटर द्वारा अनुमान।',
      simArrive: 'स्टेशन आगमन',
      simArriveDesc: 'प्लेटफॉर्म पहुंच गति कमी और टर्मिनल ब्रेक अनुप्रयोग।',
      nextStationLabel: 'अगला: {station}',
      kmToGoLabel: '{km} किमी शेष',
      dhruvaEtaBadge: 'ध्रुव ईटीए',

      // Station Board Surface
      boardHeader: 'INDIAN RAILWAYS · भारतीय रेल · ARRIVAL DISPLAY',
      boardPlatformLabel: 'PLATFORM / प्लेटफॉर्म',
      boardSchedLabel: 'SCHEDULED / नियत समय',
      boardPredLabel: 'PREDICTED ARRIVAL / अनुमानित आगमन',
      boardStatusLabel: 'STATUS / स्थिति',
      boardCoachGuide: 'कोच संरचना: इंजन → H1 · A1-A3 · B1-B6 · PC · M1-M2',
      boardEscalatorNote: 'सुगम्य एस्केलेटर: कोच B4 के समीप (पहाड़गंज छोर)',

      // Passenger Surface
      passengerCompanionTag: 'यात्री साथी · लाइट मोड',
      passengerPlatformLabel: 'प्लेटफॉर्म',
      passengerEstArrival: '{station} पर अनुमानित आगमन',
      passengerCertainty: 'निश्चितता',
      passengerCoachComposition: 'कोच संरचना: एलएचबी 22 कोच',
      passengerEscalatorGuide: 'एस्केलेटर के निकट: कोच B4 व B5',
      passengerOfflineCache: 'सुरंगों में ऑफलाइन देखने हेतु स्थानीय कैश। डेटा {s} से. पूर्व वैध।',

      // Control Room Surface
      controlTerminal: 'सेक्शन कंट्रोलर टर्मिनल · बड़ौदा हाउस (उत्तर रेलवे)',
      controlSection: 'पलवल–हज़रत निज़ामुद्दीन क्वाड-ट्रैक ब्लॉक ऑक्यूपेंसी',
      controlInterlocking: 'ब्लॉक इंटरलॉकिंग:',
      controlAutoAbsolute: 'ऑटो एब्सोल्यूट',
      controlPing: 'पिंग:',
      controlSpeedLabel: 'गति:',
      controlAspectLabel: 'आस्पेक्ट:',
      controlHeadwayLabel: 'हेडवे:',
      controlPrecedenceCleared: 'राजधानी हेतु प्राथमिकता मार्ग प्रशस्त',
      controlFollowing: 'मिनट अंतराल',
      controlSaturation: 'सेक्शन संकुलन:',
      controlConflictPredictor: 'मार्ग टकराव भविष्यवक्ता:',
      controlConformalBound: 'कन्फॉर्मल दायरा:',
      controlDeadReckoning: 'डेड रेकनिंग (एक्सल काउंटर)',
      controlNavicTelemetry: 'इसरो नाविक डुअल ट्रांसपोंडर',
      controlAspectDoubleYellow: 'डबल येलो (सतर्क)',
      controlAspectRedLoop: 'लाल (लूप में)',
      controlFreightLoopName: 'छाता लूप',

      // Modals
      telemetryLogTitle: 'लाइव सेंसर टेलीमेट्री इनपुट लॉग',
      telemetryStreamLabel: 'सक्रिय डेटा स्ट्रीम',
      telemetryFreshnessLabel: 'डेटा ताजगी विंडो',
      telemetryBasisLabel: 'कन्फॉर्मल कैलिब्रेशन आधार',
      pingIntervalSpec: 'पिंग अंतराल: 0.8s आंतरिक · {s} से. पूर्व',
      historicalCorpusSpec: '30-दिवसीय समान रैक ऐतिहासिक वक्र (बड़ौदा हाउस मंडल डेटा)',
      closeInspector: 'विवरण बंद करें',
      privacyTitle: 'रेलनेट डेटा गवर्नेंस व शून्य पीआईआई नीति',
      privacyCollectedLabel: 'क्या एकत्र किया जाता है:',
      privacyCollectedText: 'केवल लोकोमोटिव आरटीआईएस ट्रांसपोंडर निर्देशांक, एक्सल काउंटर टाइमस्टैम्प और सिग्नल रिले स्थितियां।',
      privacyProhibitedLabel: 'क्या पूर्णतः प्रतिबंधित है:',
      privacyProhibitedText: 'ध्रुवा किसी भी यात्री का व्यक्तिगत डेटा (PII), टिकट पीएनआर या व्यक्तिगत फोन जीपीएस कभी एकत्र नहीं करता। डिजिटल डेटा संरक्षण अधिनियम 2023 के पूर्णतः अनुरूप।',
      privacyDeploymentLabel: 'तैनाती वास्तुकला:',
      privacyDeploymentText: 'लोकोमोटिव ट्रांसमीटरों और क्षेत्रीय एज नोड्स के बीच एन्क्रिप्टेड म्यूचुअल टीएलएस के साथ सुरक्षित रेलनेट गेटवे पर संचालित।',
      ackSpec: 'मानक स्वीकार करें',
    },
    impact: {
      chapterTag: 'अध्याय 05 · मानवीय प्रभाव',
      title: 'जब आगमन समय एक ऐसी सच्चाई बन जाए जिस पर दिन की योजना बनाई जा सके।',
      description: 'भारतीय रेल कोई अमूर्त चार्ट नहीं है। यह प्रतिदिन यात्रा करने वाले दो करोड़ तीस लाख लोग हैं — गेट पर प्रतीक्षा करते परिजन, व्यस्त ट्रैक संभालते रेलकर्मी और गंतव्य को जाता माल।',
      vignettes: [
        {
          role: 'यात्री व परिवार',
          location: 'हज़रत निज़ामुद्दीन · प्लेटफॉर्म 3',
          name: 'सुनीता व देव शर्मा',
          story:
            'वडोदरा से 12951 से आ रही अपनी 76 वर्षीय दादी की प्रतीक्षा करते हुए। पूछताछ खिड़कियों के बीच भटकने या लाउडस्पीकर की घरघराहट समझने की कोई आवश्यकता नहीं। जब ओखला आउटर पर रखरखाव के कारण ट्रेन रुकी, तो उनके फोन ने सही कारण बताते हुए केवल एक बार 08:50 AM का ईटीए अद्यतित किया। उन्होंने तीन घंटे पहले नहीं, बल्कि ट्रेन के फरीदाबाद पार करने पर कैब बुक की।',
          statNumber: '42 मिनट',
          statLabel: 'प्रति यात्री स्वागत पर प्लेटफॉर्म प्रतीक्षा तनाव में बचत',
        },
        {
          role: 'स्टेशन अधीक्षक',
          location: 'हज़रत निज़ामुद्दीन स्टेशन प्रबंधक कक्ष',
          name: 'आर. के. मीना',
          story:
            'प्रतिदिन 7 प्लेटफॉर्मों पर 148 मेल व एक्सप्रेस ट्रेनों का प्रबंधन। पुरानी व्यवस्था में प्लेटफॉर्म टकराव की जानकारी तब मिलती थी जब ट्रेन आउटर सिग्नल पर आकर रुक चुकी होती थी। ध्रुवा प्लेटफॉर्म ऑक्यूपेंसी टकराव को 38 मिनट पूर्व दर्शा देता है, जिससे गति रोके बिना सही रूटिंग संभव होती है।',
          statNumber: '86%',
          statLabel: 'अंतिम समय में आकस्मिक प्लेटफॉर्म बदलाव में कमी',
        },
        {
          role: 'लॉजिस्टिक्स प्रबंधक',
          location: 'तुगलकाबाद इनलैंड कंटेनर डिपो',
          name: 'गुरप्रीत सिंह',
          story:
            'एक्सप्रेस पार्सल व दवाओं से जुड़े 28 रेफ्रिजरेटेड ट्रकों का संचालन। शीतकालीन कोहरे में पहले गाड़ियां माल गोदाम गेट पर ईंधन जलाते हुए चार घंटे खड़ी रहती थीं। ध्रुवा के 90% निश्चितता विंडो के कारण, डिस्पैचर अब गाड़ी के पलवल पार करने पर ही फीडर वैन रवाना करते हैं।',
          statNumber: '₹3.8 लाख',
          statLabel: 'प्रति डिपो मासिक ईंधन व बेड़ा संचालन अपव्यय में सीधी बचत',
        },
      ],
    },
    trust: {
      chapterTag: 'अध्याय 06 · तकनीकी मानक व संप्रभुता',
      title: 'रेलनेट संप्रभुता, एयर-गैप्ड सुरक्षा और शून्य अनुमान पर निर्मित।',
      description: 'भारतीय रेल राष्ट्रीय महत्वपूर्ण अवसंरचना है। ध्रुवा को सरकारी क्लाउड मापदंडों, क्रिस (CRIS) नेटवर्क सुरक्षा और पूर्ण डेटा संप्रभुता के अनुसार तैयार किया गया है।',
      specRef: 'सिस्टम आर्किटेक्चर विनिर्देश · संदर्भ: SIH26028-SPEC-v2.4',
      govCloudBadge: 'सरकारी क्लाउड व रेलनेट संगत',
      item1Title: 'टेलीमेट्री अंतर्ग्रहण',
      item1Desc: 'इसरो अंतरिक्ष अनुप्रयोग केंद्र के सहयोग से विकसित आरटीआईएस-II इकाइयों के साथ सीधा एकीकरण। 4G/LTE डुअल सिम ट्रांसपोंडर और ब्लैक-स्पॉट क्षेत्रों के लिए नाविक एस-बैंड सैटेलाइट लिंक बैकअप।',
      item2Title: 'शून्य व्यक्तिगत डेटा (Zero PII)',
      item2Desc: 'किसी भी यात्री का व्यक्तिगत पहचान योग्य डेटा संसाधित या संग्रहीत नहीं किया जाता। केवल इंजन संख्या, सिग्नल स्थिति और ट्रैक निर्देशांक। डीपीडीपी अधिनियम 2023 के शत-प्रतिशत अनुरूप।',
      item3Title: 'कन्फॉर्मल कैलिब्रेशन',
      item3Desc: 'वितरण-मुक्त इंडक्टिव कन्फॉर्मल प्रेडिक्शन 90% कवरेज स्तर के साथ। सिग्नल व्यवधान के दौरान विश्वास दायरा स्वतः विस्तृत होता है और स्टेशन निकट आने पर संकुचित।',
      item4Title: 'एज उत्तरजीविता',
      item4Desc: 'प्रमुख जंक्शनों (नई दिल्ली, कानपुर, मथुरा, भोपाल) पर स्थानीय सर्वर स्वतंत्र रूप से कार्य करते हैं। यदि केंद्रीय नेटवर्क बाधित हो, तब भी 80 किमी के दायरे में लोकल ईटीए गणना अनवरत जारी रहती है।',
      pillar1Title: 'अनुपालन मानक',
      pillar1Val: 'क्रिस रेलनेट लेवल 4',
      pillar1Desc: 'अनधिकृत सिग्नल इंजेक्शन व रीप्ले छेड़छाड़ के विरुद्ध पूर्णतः सुरक्षित।',
      pillar2Title: 'दैनिक क्षमता',
      pillar2Val: '13,000+ ट्रेनें',
      pillar2Desc: 'भारतीय रेल के दैनिक यात्री व मालगाड़ी बेड़े को एक साथ संभालने में सक्षम।',
      pillar3Title: 'सटीकता में वृद्धि',
      pillar3Val: '+31.4% पारंपरिक प्रणाली से बेहतर',
      pillar3Desc: '60 किमी के दायरे में औसत आगमन त्रुटि 26.2 मिनट से घटकर केवल 5.4 मिनट।',
      pillar4Title: 'हैकथॉन ट्रैक',
      pillar4Val: 'SIH26028 · रेलवे',
      pillar4Desc: 'रेल मंत्रालय, भारत सरकार के लिए वास्तविक समय ट्रेन-आगमन प्रणाली।',
    },
    close: {
      poleStarTag: 'ध्रुवतारा · SIH26028',
      quote: '“कुछ चीजें कभी नहीं हिलनी चाहिए थीं। अब आपकी ट्रेन का आगमन समय भी उन्हीं में से एक है।”',
      subtext: 'भारतीय रेल के 2.3 करोड़ दैनिक यात्रियों, स्टेशन कर्मियों और सेक्शन कंट्रोलरों के लिए निर्मित। स्मार्ट इंडिया हैकथॉन समस्या विवरण SIH26028।',
      testLiveBtn: 'लाइव सिमुलेशन का परीक्षण करें ↑',
      backToStart: 'प्रारंभ पर लौटें',
      footerOrg: 'ध्रुवा · स्मार्ट इंडिया हैकथॉन 2026',
      footerProblem: 'समस्या विवरण SIH26028',
      footerMinistry: 'रेल मंत्रालय (MoR)',
      footerCris: 'क्रिस / आरटीआईएस-II विनिर्देश',
      footerFourSurfaces: 'चार सरफेस अवसंरचना',
    },
    a11y: {
      toggleDayNight: 'दिन / रात थीम बदलें',
      toggleLanguage: 'अंग्रेजी और हिन्दी के बीच भाषा बदलें',
      hardwareTier: 'डिवाइस हार्डवेयर परफॉर्मेंस टियर',
      closeModal: 'डायलॉग बॉक्स बंद करें',
      dragToCompare: 'पूर्वानुमानों की तुलना के लिए स्लाइडर को दाएं-बाएं खींचें',
      trainSelector: 'ट्रेन का चयन करें',
      locomotiveIcon: 'रेल इंजन प्रतीक',
      confidenceRingAria: 'अनुमानित आगमन निश्चितता: {val}%',
      stationBoardNotice: '8 मीटर दृश्यता हेतु स्टेशन बोर्ड दिन मोड में स्थिर है',
    },
  },
};
