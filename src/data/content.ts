import type { LucideIcon } from 'lucide-react';
import {
  Warehouse,
  Sun,
  Umbrella,
  ShieldCheck,
  Wrench,
  Blocks,
  Truck,
  Spline,
  Layers,
} from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: 'carports',
    title: 'Commercial & Residential Carports',
    shortDescription:
      'Single, double, and multi-bay cantilever or gable designs built from high-grade structural steel and chromadek sheeting.',
    description:
      'Single, double, and multi-bay cantilever or gable designs built from high-grade structural steel and chromadek sheeting.',
    image:
      'https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Modern steel framework carport structure under clear sky',
    icon: Warehouse,
  },
  {
    id: 'solar-carports',
    title: 'Solar Integration Carports',
    shortDescription:
      'Dual-purpose photovoltaic canopies designed to protect vehicles while lowering commercial and residential energy overheads.',
    description:
      'Dual-purpose photovoltaic canopies designed to protect vehicles while lowering commercial and residential energy overheads.',
    image:
      'https://images.pexels.com/photos/9799764/pexels-photo-9799764.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Parking lot with solar panel canopy structures',
    icon: Sun,
  },
  {
    id: 'shade-netting',
    title: 'Shade Sail & Architectural Canopies',
    shortDescription:
      'Heavy-duty polyethylene shade net structures engineered for commercial parking lots, schools, and residential patios.',
    description:
      'Heavy-duty polyethylene shade net structures engineered for commercial parking lots, schools, and residential patios.',
    image:
      'https://images.pexels.com/photos/5511454/pexels-photo-5511454.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Shade sail canopy structures under blue sky',
    icon: Umbrella,
  },
  {
    id: 'gates-security',
    title: 'Driveway Automation & Security',
    shortDescription:
      'Sliding and swing gates, intercom integration, and perimeter security paired seamlessly with new carport builds.',
    description:
      'Sliding and swing gates, intercom integration, and perimeter security paired seamlessly with new carport builds.',
    image:
      'https://images.pexels.com/photos/32574417/pexels-photo-32574417.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Security gate with intercom system at driveway entrance',
    icon: ShieldCheck,
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Refurbishments',
    shortDescription:
      'Structural inspections, rust treatment, sheeting replacements, and storm damage repairs.',
    description:
      'Structural inspections, rust treatment, sheeting replacements, and storm damage repairs.',
    image:
      'https://images.pexels.com/photos/14539151/pexels-photo-14539151.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Construction worker welding steel beam on site',
    icon: Wrench,
  },
];

export type PavingService = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
};

export const pavingServices: PavingService[] = [
  {
    id: 'interlocking-paving',
    title: 'Interlocking & Brick Paving',
    description:
      'Heavy-duty interlocking pavers, cobbles, and flagstones professionally laid for driveways, parking lots, walkways, and commercial courtyards over compacted sub-base layers.',
    image:
      'https://images.pexels.com/photos/17366769/pexels-photo-17366769.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Close-up of interlocking grey brick pavement',
    icon: Blocks,
  },
  {
    id: 'hot-mix-asphalt',
    title: 'Hot-Mix Asphalt & Tar Surfacing',
    description:
      'Premium grade asphalt paving engineered for commercial driveways, access roads, and residential entryways designed to handle heavy vehicular traffic.',
    image:
      'https://images.pexels.com/photos/34272103/pexels-photo-34272103.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Asphalt truck paving a street on a sunny day',
    icon: Truck,
  },
  {
    id: 'kerbing',
    title: 'Kerbing & Edge Restraints',
    description:
      'Extruded and precast concrete kerbing installation to manage stormwater runoff, protect structural perimeters, and deliver clean architectural finishes.',
    image:
      'https://images.pexels.com/photos/2489/street-building-construction-industry.jpg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Excavator working on road kerb construction',
    icon: Spline,
  },
  {
    id: 'surface-rehab',
    title: 'Surface Rehabilitation & Resurfacing',
    description:
      'Professional pothole patching, crack sealing, slurry sealing, and total resurfacing for distressed concrete or tar surfaces.',
    image:
      'https://images.pexels.com/photos/6018652/pexels-photo-6018652.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Road maintenance with asphalt and worker tools',
    icon: Layers,
  },
];

export type ProjectCategory =
  | 'Residential Carports'
  | 'Commercial Shade Netting'
  | 'Solar Carports'
  | 'Gate & Perimeter Integration'
  | 'Paving & Tar';

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  scope: string;
  materials: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Double-Bay Cantilever Carport',
    category: 'Residential Carports',
    location: '[City], [Province]',
    scope: 'Design, fabrication, and installation of a double-bay cantilever carport with concrete foundation.',
    materials: 'Structural steel, chromadek sheeting, concrete foundation',
    description:
      'A bespoke cantilever carport designed to provide covered parking for two vehicles, engineered to withstand high wind loads typical of the region.',
    image:
      'https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Contemporary luxury home with spacious paved driveway',
  },
  {
    id: 'p2',
    title: 'Commercial Solar Carport Array',
    category: 'Solar Carports',
    location: '[City], [Province]',
    scope: 'Installation of a multi-bay solar carport array with integrated photovoltaic panels and inverter system.',
    materials: 'Galvanised steel frame, PV panels, mounting hardware',
    description:
      'A commercial-grade solar carport installation providing covered parking while generating clean energy to offset the facility\'s electricity consumption.',
    image:
      'https://images.pexels.com/photos/9799727/pexels-photo-9799727.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Aerial view of parking lot with solar panel canopies',
  },
  {
    id: 'p3',
    title: 'School Shade Net Canopy',
    category: 'Commercial Shade Netting',
    location: '[City], [Province]',
    scope: 'Supply and installation of heavy-duty shade net structures for a school parking area.',
    materials: 'Steel posts, HDPE shade net, tensioning hardware',
    description:
      'A large-scale shade net installation covering a school parking lot, providing UV protection for vehicles and comfortable drop-off zones.',
    image:
      'https://images.pexels.com/photos/18715567/pexels-photo-18715567.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Outdoor terrace with shade structures under blue sky',
  },
  {
    id: 'p4',
    title: 'Automated Sliding Gate & Intercom',
    category: 'Gate & Perimeter Integration',
    location: '[City], [Province]',
    scope: 'Installation of an automated sliding gate with intercom integration and perimeter security.',
    materials: 'Steel gate, automation motor, intercom system',
    description:
      'A secure automated entrance solution combining a heavy-duty sliding gate with intercom access control, integrated alongside a new carport installation.',
    image:
      'https://images.pexels.com/photos/16580841/pexels-photo-16580841.png?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Security gate at a residential driveway entrance',
  },
  {
    id: 'p5',
    title: 'Commercial Driveway Paving',
    category: 'Paving & Tar',
    location: '[City], [Province]',
    scope: 'Laying of interlocking pavers for a commercial driveway and parking area.',
    materials: 'Interlocking concrete pavers, compacted sub-base',
    description:
      'A professionally laid interlocking brick paving project for a commercial property, engineered for heavy vehicular traffic with proper drainage.',
    image:
      'https://images.pexels.com/photos/17366774/pexels-photo-17366774.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Herringbone pattern grey stone pavers from above',
  },
  {
    id: 'p6',
    title: 'Multi-Bay Gable Carport',
    category: 'Residential Carports',
    location: '[City], [Province]',
    scope: 'Design and installation of a multi-bay gable carport for a residential property.',
    materials: 'Structural steel, chromadek roofing, concrete footings',
    description:
      'A spacious gable-style carport providing covered parking for multiple vehicles, engineered to complement the architectural style of the home.',
    image:
      'https://images.pexels.com/photos/19739988/pexels-photo-19739988.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Modern family house with spacious driveway in Pretoria, South Africa',
  },
  {
    id: 'p7',
    title: 'Solar Canopy — Office Park',
    category: 'Solar Carports',
    location: '[City], [Province]',
    scope: 'Installation of solar canopies across an office park visitor parking area.',
    materials: 'Steel canopy frame, photovoltaic panels, grid-tie inverter',
    description:
      'An office park solar carport project delivering shaded visitor parking while feeding generated power back into the building\'s electrical system.',
    image:
      'https://images.pexels.com/photos/9799761/pexels-photo-9799761.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Close-up of solar panels on metal structure with sunlight',
  },
  {
    id: 'p8',
    title: 'Asphalt Access Road',
    category: 'Paving & Tar',
    location: '[City], [Province]',
    scope: 'Hot-mix asphalt surfacing for a commercial access road.',
    materials: 'Hot-mix asphalt, aggregate sub-base, kerbing',
    description:
      'A premium asphalt surfacing project for a commercial access road, designed to handle heavy delivery vehicles with integrated stormwater kerbing.',
    image:
      'https://images.pexels.com/photos/34648982/pexels-photo-34648982.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Road tanker applying asphalt on a rural road',
  },
  {
    id: 'p9',
    title: 'Shade Sail — Restaurant Patio',
    category: 'Commercial Shade Netting',
    location: '[City], [Province]',
    scope: 'Custom shade sail installation for a restaurant outdoor seating area.',
    materials: 'Stainless steel posts, architectural shade fabric',
    description:
      'Architectural shade sails providing weather protection for a restaurant patio, engineered for wind resistance and visual appeal.',
    image:
      'https://images.pexels.com/photos/31894395/pexels-photo-31894395.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Coloured canopy structures over an outdoor area',
  },
  {
    id: 'p10',
    title: 'Estate Perimeter Security Gates',
    category: 'Gate & Perimeter Integration',
    location: '[City], [Province]',
    scope: 'Manufacture and installation of swing gates with intercom for a residential estate.',
    materials: 'Steel gates, automation motors, intercom, access control',
    description:
      'A pair of automated swing gates securing a residential estate entrance, integrated with intercom and access control systems.',
    image:
      'https://images.pexels.com/photos/12861897/pexels-photo-12861897.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Metal gate blocking a gravel road with access sign',
  },
  {
    id: 'p11',
    title: 'Retail Centre Parking Canopy',
    category: 'Commercial Shade Netting',
    location: '[City], [Province]',
    scope: 'Large-scale shade net canopy installation for a retail centre parking lot.',
    materials: 'Steel columns, tensioned shade fabric, concrete footings',
    description:
      'A commercial shade structure spanning a retail centre parking area, providing sun protection for customers and their vehicles.',
    image:
      'https://images.pexels.com/photos/19893266/pexels-photo-19893266.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Modern parking structure with curved canopy under blue sky',
  },
  {
    id: 'p12',
    title: 'Residential Tar Driveway',
    category: 'Paving & Tar',
    location: '[City], [Province]',
    scope: 'Hot-mix asphalt surfacing for a residential driveway.',
    materials: 'Hot-mix asphalt, compacted base, edge restraints',
    description:
      'A premium asphalt driveway installation for a residential property, providing a smooth, durable surface engineered for longevity.',
    image:
      'https://images.pexels.com/photos/8134848/pexels-photo-8134848.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Modern minimalist house with spacious driveway',
  },
];

export const projectCategories: (ProjectCategory | 'All')[] = [
  'All',
  'Residential Carports',
  'Commercial Shade Netting',
  'Solar Carports',
  'Gate & Perimeter Integration',
  'Paving & Tar',
];

export const processSteps = [
  { step: '01', title: 'Consultation', description: 'We discuss your requirements, budget, and vision for the project.' },
  { step: '02', title: 'Site Assessment', description: 'Our team visits your site to assess ground conditions, dimensions, and access.' },
  { step: '03', title: 'Engineering & Design', description: 'We engineer and design the structure to meet your specifications and local regulations.' },
  { step: '04', title: 'Foundations', description: 'Concrete foundations are excavated, poured, and cured to structural specifications.' },
  { step: '05', title: 'Installation', description: 'Steel fabrication, erection, sheeting, and finishing work completed by our team.' },
  { step: '06', title: 'Final Inspection', description: 'A thorough quality inspection and handover, backed by our structural warranty.' },
];

export const companyInfo = {
  name: 'Nova Carports',
  tagline: 'Structural Carports & Engineering Solutions',
  phone: '0670777845',
  whatsapp: '27670777845',
  email: '[BUSINESS EMAIL]',
  location: '7 Elsburg Road, Delville, Germiston',
};
