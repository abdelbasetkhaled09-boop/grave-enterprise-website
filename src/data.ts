import { Service, Product, Review, ProjectSample, FAQItem } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'auto-repair',
    title: 'Full-Service Auto Repair',
    category: 'repair',
    description: 'Complete mechanical diagnosis, engine timing, brake replacement, steering, suspension, and drivetrain repairs.',
    iconName: 'Wrench',
    features: ['Brake diagnostics & replacement', 'Engine diagnostics & rebuilding', 'Transmission services', 'Suspension repairs'],
    startingPrice: '$85/hr',
    estimatedTime: 'Varies by repair'
  },
  {
    id: 'ac-repair',
    title: 'Auto A/C Repair & Service',
    category: 'repair',
    description: 'Keep cool in the intense Texas heat. Full A/C system diagnostics, evacuation, recharge, leaks repair, and compressor swap.',
    iconName: 'SunSnow',
    features: ['A/C system diagnostics', 'Freon recharge (R134a & R1234yf)', 'Compressor & condenser replacement', 'Leak detection with UV dye'],
    startingPrice: '$99 & up',
    estimatedTime: '1 - 2 hours'
  },
  {
    id: 'state-inspections',
    title: 'Texas State Vehicle Inspections',
    category: 'inspections',
    description: 'Official multi-point safety testing and emissions inspections for standard passenger cars, light trucks, and SUVs.',
    iconName: 'ShieldAlert',
    features: ['Safety component checking', 'Emissions testing (when applicable)', 'Quick diagnostic scans', 'Certified Texas inspectors'],
    startingPrice: '$7.00',
    estimatedTime: '15 - 30 minutes'
  },
  {
    id: 'dot-inspections',
    title: 'DOT Commercial Inspections',
    category: 'inspections',
    description: 'Federally aligned commercial vehicle inspections. Ensure your heavy-duty truck, trailer, or fleet complies strictly with DOT regulations.',
    iconName: 'Truck',
    features: ['Brake and drum measurements', 'Steering gear inspections', 'Structural and frame check', 'Official DOT decals & reports'],
    startingPrice: '$120',
    estimatedTime: '1 - 1.5 hours'
  },
  {
    id: 'tire-services',
    title: 'Tire Sales & Installation',
    category: 'repair',
    description: 'High-performance highway, street, and ultra-rugged off-road all-terrain/mud-terrain tires. Laser mounting and high-speed balancing.',
    iconName: 'Disc',
    features: ['Off-road & heavy duty tires', 'Computerized tire balancing', 'Flat tire repairs & patch service', 'TPMS sensor re-programming'],
    startingPrice: 'Varies by size',
    estimatedTime: '45 - 60 minutes'
  },
  {
    id: 'exhaust-systems',
    title: 'Exhaust Systems & Custom Pipes',
    category: 'repair',
    description: 'Muffler swaps, catalytic converter replacements, and custom bending for sound performance, heavy-duty flow, and dual exhaust upgrades.',
    iconName: 'Flame',
    features: ['Welded & clamp configurations', 'Performance exhaust systems', 'Catalytic converter replacement', 'Manifold repairs'],
    startingPrice: '$149 & up',
    estimatedTime: '1 - 3 hours'
  },
  {
    id: 'lift-kits',
    title: 'Lift Kits & Leveling Kits',
    category: 'accessories',
    description: 'Aggressive stance upgrades. Premium high-clearance brand lift package installations, subframe improvements, and custom alignment.',
    iconName: 'Maximize2',
    features: ['Suspension lifts', 'Torsion key & spacer leveling', 'Coilover upgrades', 'Alignment & geometry calibration'],
    startingPrice: '$350 & up',
    estimatedTime: '1 - 2 days'
  },
  {
    id: 'truck-accessories',
    title: 'Premium Truck Accessories',
    category: 'accessories',
    description: 'Heavy duty modifications to outfit any standard, light, or commercial truck for hard work and harsh road environments.',
    iconName: 'Sliders',
    features: ['Bed covers (tri-fold, rolling)', 'Fender flares', 'LED light bars & auxiliary pods', 'Toolboxes & headache racks'],
    startingPrice: 'Varies',
    estimatedTime: '1 - 4 hours'
  },
  {
    id: 'grille-guards',
    title: 'Grille Guards & Heavy Duty Bumpers',
    category: 'accessories',
    description: 'Uncompromising front-end defense against wildlife and severe off-road impacts. Certified direct-to-frame heavy steel installs.',
    iconName: 'Shield',
    features: ['Ranch Hand steel grille guards', 'Replacement winch bumpers', 'Rear custom replacement steel bumpers', 'Powder-coated rust resistance'],
    startingPrice: '$499 & up',
    estimatedTime: '2 - 4 hours'
  },
  {
    id: 'running-boards',
    title: 'Running Boards & Side Steps',
    category: 'accessories',
    description: 'Sturdy, high-grip footing solutions for lifted or standard vehicles, including heavy steel side rails, nerf bars, and automated power steps.',
    iconName: 'Footprints',
    features: ['Wheel-to-wheel nerf bars', 'Heavy textured hoop steps', 'Automatic electric drop steps', 'Saddle pad style designs'],
    startingPrice: '$249 & up',
    estimatedTime: '1 - 2 hours'
  },
  {
    id: 'trailer-hitches',
    title: 'Trailer Hitches & Towing Systems',
    category: 'accessories',
    description: 'Class I to Class V receiver hitches, under-bed fifth wheels, goosenecks, adjustable balls, and complete brake-controller integrations.',
    iconName: 'Anchor',
    features: ['B&W Turnoverball goosenecks', 'Receiver hitch packages', '7-way and 4-way wiring looms', 'Electronic trailer brakes installation'],
    startingPrice: '$180 & up',
    estimatedTime: '1 - 3 hours'
  },
  {
    id: 'spray-bed-liners',
    title: 'Rhino Pro Spray-On Bed Liners',
    category: 'accessories',
    description: 'Ultra-tough, textured, direct-bond polyurethane protection. Watertight barrier that eliminates scrapes, vibrations, and rust formation.',
    iconName: 'Paintbrush',
    features: ['rhino Pro heavy thickness formula', 'Seamless complete watertight shell', 'High UV-fade stable finish', 'Lifetime warranty on peeling'],
    startingPrice: '$450',
    estimatedTime: 'Same-day service'
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'brand-ranch-hand-guards',
    name: 'Ranch Hand Grille Guards',
    brand: 'Ranch Hand',
    category: 'Grille Guards',
    description: 'Original heavy-duty steel grille guards. Handcrafted in Texas, engineered to provide full wraps around vehicle headlights for absolute front-end defense.',
    image: '/src/assets/images/grave_grille_guard_1781203068603.jpg',
    features: ['One-piece fully welded mounting steel structure', 'Frame-mounted frame loops', 'No vehicle drilling required on most vehicles', 'Heavy-duty punch plate insert']
  },
  {
    id: 'brand-ranch-hand-bumpers',
    name: 'Ranch Hand Heavy Duty Bumpers',
    brand: 'Ranch Hand',
    category: 'Bumpers',
    description: 'Complete bumper replacement systems. Designed to absorb severe shock from Texas wildlife, rocks, and equipment.',
    image: '/src/assets/images/ranch_hand_bumper_1781208025163.jpg',
    features: ['Schedule 40 pipe steel construction', 'Built-in receiver hitches', 'Matches rugged pick-up profiles', 'Black powdercoat anti-corrosion finish']
  },
  {
    id: 'brand-ready-lift',
    name: 'ReadyLift Suspension Upgrades',
    brand: 'ReadyLift',
    category: 'Lift Kits',
    description: 'Professional high-clearance lift kits and leveling packages. Get custom stance and fit rugged off-road tires safely up to 37" sizes.',
    image: '/src/assets/images/grave_lift_truck_1781203057031.jpg',
    features: ['Saves original driving feel', 'Robust forged iron steering knuckles', 'Aggressive shock absorber options', 'Precision height increase']
  },
  {
    id: 'brand-westin-boards',
    name: 'Westin Nerf Bars & Step Bars',
    brand: 'Westin',
    category: 'Running Boards',
    description: 'Heavy duty cab-length side steps with custom black textured styling. Non-slip molded foot pads for reliable access.',
    image: '/src/assets/images/westin_steps_new_1781208563509.jpg',
    features: ['Heavy, textured military-grade steel tube', 'Slip-resistant stepping pads', 'Available in chrome or black powdercoat', 'Bolt-on frame installs']
  },
  {
    id: 'brand-bw-hitches',
    name: 'B&W Turnoverball Gooseneck',
    brand: 'B&W Trailer Hitches',
    category: 'Trailer Hitches',
    description: 'The number one selling gooseneck hitch in America. Pull heavy cattle, machinery, and RV campers with a clean open truck bed when not towing.',
    image: '/src/assets/images/gooseneck_hitch_1781208050108.jpg',
    features: ['Convertible ball flipped in seconds', 'Tough 30,000 lbs towing capacity', 'Direct bolt-on underbed installation', 'Fits perfectly between chassis rails']
  },
  {
    id: 'brand-rhino-pro',
    name: 'Rhino Pro Spray-On Liners',
    brand: 'Rhino Pro',
    category: 'Bed Liners',
    description: 'Durable, high-build commercial polyurethane elastomeric shield. Form-fits to every contour of your truck cargo area.',
    image: '/src/assets/images/grave_bed_liner_1781203082459.jpg',
    features: ['Superb anti-slip coarse texture', 'No reduction in cargo bed volume', 'Perfect watertight, rust-proof lock', 'Won\'t detach or warp']
  },
  {
    id: 'brand-weathertech',
    name: 'WeatherTech Digital Floor Liners',
    brand: 'WeatherTech',
    category: 'Floor Mats',
    description: 'Laser-custom-measured interior carpet defense. Channels fluids, sand, mud, and farm grime away from your truck carpets.',
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
    text: 'Friendly service & friendly staff. Brought my truck in for state commercial inspection and some custom Westin running boards install. Outstanding quality, zero hassle, and extremely honest prices.',
    verified: true,
    avatarBlur: 'D'
  },
  {
    id: 'review-2',
    author: 'Cody W.',
    rating: 5,
    date: '1 month ago',
    text: 'GREAT customer service and did an amazing job at the best price around! They installed a Ranch Hand grille guard and spray-in bed liner on my f-250. Clean weld, flawless fit. Highly recommend Grave Enterprise.',
    verified: true,
    avatarBlur: 'C'
  },
  {
    id: 'review-3',
    author: 'Amanda M.',
    rating: 5,
    date: '3 months ago',
    text: 'They have a repeat customer here. Handled my car A/C repair during the hottest week of summer. Fast diagnosis, fair rate, and the cold air has been pumping beautifully ever since. Professional crew!',
    verified: true,
    avatarBlur: 'A'
  },
  {
    id: 'review-4',
    author: 'Preston T.',
    rating: 5,
    date: '4 months ago',
    text: 'Best shop in Sweetwater for truck upgrades. Got a premium B&W gooseneck installation and ReadyLift leveling kit. They are meticulous with the suspension geometry and explain everything in detail.',
    verified: true,
    avatarBlur: 'P'
  }
];

export const BEFORE_AFTER_DATA: ProjectSample[] = [
  {
    id: 'proj-1',
    title: 'Truck Front-End Transformation',
    category: 'Grille Guards & Bumpers',
    description: 'Equipped a highway-exposed GMC Denali HD truck with a full-steel replacement Ranch Hand bumper guard for maximum Texas road security.',
    beforeImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600', // Stock truck front
    afterImage: '/src/assets/images/grave_grille_guard_1781203068603.jpg' // Custom grille guard
  },
  {
    id: 'proj-2',
    title: 'Aggressive Stance & Offroad Tires',
    category: 'Lift Kits & Leveling',
    description: 'Elevated a RAM 2500 with a 4-inch ReadyLift suspension package and heavy-duty 35-inch terrain tires.',
    beforeImage: 'https://images.unsplash.com/photo-1611245785134-8b65287515d9?auto=format&fit=crop&q=80&w=600', // Stock Dodge
    afterImage: '/src/assets/images/grave_lift_truck_1781203057031.jpg' // Lifted Dodge sunset
  },
  {
    id: 'proj-3',
    title: 'Heavy Service Bed Protection',
    category: 'Spray-In Bed Liners',
    description: 'Cleaned, prepped, and sprayed a farm-abused truck bed with Rhino Pro thick elastomer. Resulting in a seamless water-tight armor.',
    beforeImage: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=600', // Scratched open bed
    afterImage: '/src/assets/images/grave_bed_liner_1781203082459.jpg' // Sprayed bed close up
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a spray-in bed liner take to install?',
    answer: 'A professional Rhino Pro spray-in bed liner installation is a same-day service. Usually, the vehicle is prepped, masked, sprayed, and cured in 3 to 5 hours, allowing you to pick it up the same afternoon.',
    category: 'accessories'
  },
  {
    id: 'faq-2',
    question: 'Do you perform official DOT commercial vehicle inspections?',
    answer: 'Yes! Grave Enterprise is a certified official station for both standard Texas state safety vehicle inspections and federal DOT commercial truck and trailer trailer inspections. All safety logs are completed on-site.',
    category: 'inspections'
  },
  {
    id: 'faq-3',
    question: 'Will installing a lift kit or leveling kit void my factory warranty?',
    answer: 'No. Under the federal Magnuson-Moss Warranty Act, vehicle dealers cannot simply void your warranty because aftermarket parts were installed. Only if a custom installation is found to have directly caused a mechanical failure can that specific warranty claim be denied. We calibrate suspension loops precisely to maintain optimal performance.',
    category: 'accessories'
  },
  {
    id: 'faq-4',
    question: 'How often should I have the vehicle A/C system inspected?',
    answer: 'For West Texas drivers who endure high-intensity summer heat, we recommend an annual A/C performance check-up prior to summer. We verify pressures, check for microscopic refrigerant leaks, and replace cabin filters.',
    category: 'repair'
  },
  {
    id: 'faq-5',
    question: 'What models can you fit with your Ranch Hand guards and bumpers?',
    answer: 'Ranch Hand designs custom-engineered direct-to-frame bumpers and guards for almost all major heavy-duty trucks from Ford, Chevy, GMC, Ram, and Jeep. Give us a call with your model and year, and we can find the perfect matching grid.',
    category: 'accessories'
  }
];

export const SERVICE_AREAS: string[] = [
  'Sweetwater',
  'Snyder',
  'Roscoe',
  'Colorado City',
  'Roby',
  'Rotan',
  'Merkel',
  'Trent',
  'Loraine',
  'Hermleigh',
  'Abilene',
  'Blackwell'
];

export const SHOP_HOURS = [
  { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 12:00 PM (By Appointment)' },
  { day: 'Sunday', hours: 'Closed (Resting up for Monday)' }
];
