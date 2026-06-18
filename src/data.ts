import { Service, Product, Review, ProjectSample, FAQItem } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'engine-diagnostic-repair',
    title: 'Engine Diagnostics & Repair',
    category: 'repair',
    description: 'Expert diagnostics with state-of-the-art computer scanning tools. Complete auto engine repair, diagnostics, professional tuning, and rebuilding services.',
    iconName: 'Wrench',
    features: ['Computerized engine diagnostics', 'Engine tuning & spark plugs', 'Transmission diagnosis & repair', 'Water leak & head gasket repair'],
    startingPrice: 'Diagnostic from $65',
    estimatedTime: 'Varies by repair'
  },
  {
    id: 'ac-repair',
    title: 'Auto A/C Service & Recharge',
    category: 'repair',
    description: 'Full air conditioning repair, system inspection, leak testing, recharging Freon, and complete auto A/C module replacement.',
    iconName: 'SunSnow',
    features: ['Diagnostic pressure test', 'Eco-friendly Freon recharge', 'A/C compressor replacement', 'Cab filter replacement'],
    startingPrice: '$89 & up',
    estimatedTime: '1 - 2 hours'
  },
  {
    id: 'brakes-suspension',
    title: 'Brakes, Steering & Suspension',
    category: 'repair',
    description: 'Complete brake pad & rotor replacement, steering system troubleshooting, strut/shock rebuilding, and wheel alignment controls for stable driving.',
    iconName: 'Sliders',
    features: ['Brake pads & rotors service', 'Caliper & brake lines maintenance', 'Steering gear & suspension alignment', 'Struts & shocks upgrade'],
    startingPrice: 'Brakes from $110',
    estimatedTime: '1 - 3 hours'
  },
  {
    id: 'battery-electrical',
    title: 'Battery & Electrical Systems',
    category: 'repair',
    description: 'Comprehensive electrical diagnostics, alternator servicing, starter replacements, battery maintenance, and professional auto battery replacement.',
    iconName: 'ShieldAlert',
    features: ['Diagnostic voltage testing', 'Battery maintenance & terminal cleaning', 'Starter & alternator repairs', 'Wiring leak troubleshooting'],
    startingPrice: 'Battery from $129',
    estimatedTime: '30 - 60 minutes'
  },
  {
    id: 'auto-painting-bodywork',
    title: 'Complete Paint Jobs & Body Trim',
    category: 'accessories',
    description: 'Professional vehicle body repair, trim replacements, painting, and mirror services inside our modern specialized painting spray booth.',
    iconName: 'Paintbrush',
    features: ['Flawless full-body paint jobs', 'Scratch & dent auto repair', 'Side view mirror replacement', 'Body trim & fender realignments'],
    startingPrice: 'Custom Quote',
    estimatedTime: '2 - 5 days'
  },
  {
    id: 'general-maintenance',
    title: 'General Maintenance & Oil Checks',
    category: 'repair',
    description: 'Stay proactive with routine fluid flushes, oil checks, air and cabin filters, tire balancing, and complete multi-point Virginia vehicle maintenance checks.',
    iconName: 'Disc',
    features: ['Synthetic oil changes', 'Air & cabin filters swap', 'Tire rotations & balancing', 'Fluid level topping and coolant'],
    startingPrice: '$49 & up',
    estimatedTime: '30 - 45 minutes'
  },
  {
    id: 'glass-windshield-repair',
    title: 'Auto Glass & Windshield Service',
    category: 'accessories',
    description: 'Fixing star chips, windshield cracks, and replacing broken glass or side-view mirror assemblies back to factory specifications.',
    iconName: 'Maximize2',
    features: ['Fast windshield replacements', 'Auto glass crack repair', 'Eroded weatherstrip & seam sealing', 'Side-view mirror replacement'],
    startingPrice: '$79 & up',
    estimatedTime: '1 - 3 hours'
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'brand-premium-paints',
    name: 'Premium Automotive Refinish Paints',
    brand: 'Nason / Axalta',
    category: 'Refinishing & Paint',
    description: 'Top-tier automotive refinish coatings. High-solid formulas designed for exact paint matching and exceptional gloss longevity through Virginia seasonal changes.',
    image: '/src/assets/images/williams_paint_job_1781813646859.jpg',
    features: ['Color-match factory calibration', 'High solid basecoats and clearcoats', 'Outstanding sun & chip protection', 'Smooth mirror paint finish']
  },
  {
    id: 'brand-acdelco-batteries',
    name: 'ACDelco Gold Professional Batteries',
    brand: 'ACDelco',
    category: 'Electrical & Ignition',
    description: 'Severe duty passenger car and light truck battery replacements, featuring high cranking amps and deep reserve capacity.',
    image: '/src/assets/images/williams_engine_diagnostic_1781813658778.jpg',
    features: ['36-month replacement protection', 'Superior vibration-resistance', 'Ready to run in cold winter states', 'Direct OE sizing fits']
  },
  {
    id: 'brand-wagner-brakes',
    name: 'Wagner OEx Ceramic Premium Brakes',
    brand: 'Wagner',
    category: 'Braking Systems',
    description: 'Ceramic brake formulations designed specifically for trucks, SUVs, and passenger cars to stop shorter, run quieter, and leave zero black dust.',
    image: '/src/assets/images/williams_brake_rotors_service_1781813923463.jpg',
    features: ['Patented aerodynamic pad design', 'Up to 50% noise reduction', 'Custom fit for all major vehicle makes', 'Hardware installation kit included']
  },
  {
    id: 'brand-weathertech',
    name: 'WeatherTech Digital Floor Liners',
    brand: 'WeatherTech',
    category: 'Vehicle Protection',
    description: 'Laser-custom-measured interior carpet defense. Channels fluids, sand, mud, and Virginia red clay grime away from your vehicle carpets.',
    image: '/src/assets/images/weathertech_mats_1781207152412.jpg',
    features: ['Laser-measured vehicle floor contouring', 'High-density heavy synthetic material', 'Deep reservoir design', 'Easy wash-and-spray cleaning']
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'review-1',
    author: 'Daniel G.',
    rating: 5,
    date: '2 weeks ago',
    text: 'Great people, great service and the wait time was nothing. Clean auto work, honest prices with none of the usual upcharging hassle. Highly recommended for any car repair!',
    verified: true,
    avatarBlur: 'D'
  },
  {
    id: 'review-2',
    author: 'Sandra L.',
    rating: 5,
    date: '1 month ago',
    text: 'Brought my SUV in for battery replacement and some minor body trim painting. The paint job matches my original red coat to perfection. This spot is Scottsville’s real deal auto asset!',
    verified: true,
    avatarBlur: 'S'
  },
  {
    id: 'review-3',
    author: 'Mark W.',
    rating: 5,
    date: '3 months ago',
    text: 'My vehicle had broken rims and ugly broken caps. They helped me fix them up, replace missing assemblies, and did an amazing paint refresh that looks excellent. Terrific value or speed!',
    verified: true,
    avatarBlur: 'M'
  },
  {
    id: 'review-4',
    author: 'Cody T.',
    rating: 4.8,
    date: '4 months ago',
    text: 'Super dependable, extremely fast diagnostics. They quickly identified an under-hood coolant leak, replaced the hoses, recharged my A/C, and had me back on Glenmore Rd in no time.',
    verified: true,
    avatarBlur: 'C'
  }
];

export const BEFORE_AFTER_DATA: ProjectSample[] = [
  {
    id: 'proj-1',
    title: 'Premium Automotive Paint Renewal',
    category: 'Refinishing & Paint Jobs',
    description: 'Prepped, primed, and sprayed a weathered vehicle fender using clean ventilation booths and color-matched high gloss coatings.',
    beforeImage: '/src/assets/images/williams_before_fender_1781814176721.jpg',
    afterImage: '/src/assets/images/williams_paint_job_1781813646859.jpg'
  },
  {
    id: 'proj-2',
    title: 'Complete Engine Tune & Diagnostic',
    category: 'Engine Diagnostics',
    description: 'Diagnosed a persistent misfire code with advanced scanners, replaced aging spark plugs, reconfigured software loops, and cleared all telemetry errors.',
    beforeImage: '/src/assets/images/williams_before_engine_1781814189345.jpg',
    afterImage: '/src/assets/images/williams_engine_diagnostic_1781813658778.jpg'
  },
  {
    id: 'proj-3',
    title: 'A/C Recharging & Compressor Setup',
    category: 'Auto A/C Repair',
    description: 'Fixed a severe system cabin leak, flushed aging lines, and recharged the refrigerant system to pump 40 degrees cold air out again.',
    beforeImage: '/src/assets/images/williams_before_ac_1781814200697.jpg',
    afterImage: '/src/assets/images/ac_service_1781208062260.jpg'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where are you guys located on Glenmore Rd?',
    answer: 'We are located at 2280 Glenmore Rd, Scottsville, VA 24590. We are easy to find and have spacious parking for diagnostics and painting.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'How fast takes a general automotive A/C recharge or battery job?',
    answer: 'An auto A/C recharge or battery replacement is usually completed in less than 1 hour. We can diagnose and swap equipment in real-time while you wait!',
    category: 'repair'
  },
  {
    id: 'faq-3',
    question: 'Do you offer paint matching for single dent/panel repairs?',
    answer: 'Yes! We use advanced optical camera devices to analyze your vehicle’s clearcoat and factory paint pigment. This ensures single doors, panels, or side-view mirrors look completely identical to the rest of your vehicle outline.',
    category: 'accessories'
  },
  {
    id: 'faq-4',
    question: 'Do you do water leak services and windshield glass?',
    answer: 'Absolutely. We fix windshield cracks, replace auto glass, configure sideview mirrors, and reseal door water leaks or roof weatherlining strips.',
    category: 'repair'
  }
];

export const SERVICE_AREAS: string[] = [
  'Scottsville',
  'Glenmore Road',
  'Charlottesville',
  'Palmyra',
  'Fork Union',
  'Kents Store',
  'Keene',
  'Esmont',
  'Schuyler',
  'Arvonia',
  'Albemarle County',
  'Fluvanna County'
];

export const SHOP_HOURS = [
  { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' }
];
