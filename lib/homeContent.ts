import { FacilityIcon, LeafClusterIcon, ShieldFlameIcon } from "@/components/icons/highlight-icons";
import type {
  Application,
  Highlight,
  ProcessStep,
  Stat,
} from "@/lib/types/home";

export const highlights: Highlight[] = [
  {
    title: "Rapid Deployment",
    description:
      "Our mobile units rapidly commission at any location to convert remote feedstock piles using clean pyrolysis technology.",
    Icon: LeafClusterIcon,
  },
  {
    title: "Climate-positive outputs",
    description:
      "Transform biomass into premium biochar and briquettes for lasting carbon removal and circular value.",
    Icon: ShieldFlameIcon,
  },
  {
    title: "Inclusive value chains",
    description:
      "Monetizing agricultural and forestry residues while replacing smoky burns with clean, sustainable solutions.",
    Icon: FacilityIcon,
  },
];

export const stats: Stat[] = [
  { value: "10–30%", label: "Increase in crop yields" },
  { value: "up to 20%", label: "improved water retention" },
  { value: "48 hr", label: "mobile deployment time" },
  { value: "up to 3 Tonnes CO₂", label: "removed per tonne biochar" },
];

export const applications: Application[] = [
  {
    title: "Carbon removal",
    points: [
      "Deliver verified, high-quality biochar through robust monitoring, reporting, and verification.",
    ],
  },
  {
    title: "Rural cooperatives",
    points: [
      "Transform crop residues into premium soil inputs on-site.",
      "Create new income streams for smallholder networks through carbon participation.",
    ],
  },
  {
    title: "Waste authorities",
    points: [
      "Divert green waste from landfills and wildfire-prone stockpiles.",
      "Deploy mobile units that scale with seasonal feedstock peaks.",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Feedstock mapping",
    description:
      "Digitally assess residue types, ash content, and logistics to configure the right conversion recipe for each territory.",
  },
  {
    title: "On-site preparation",
    description:
      "Low-power shredding and drying modules condition biomass within the mobile units.",
  },
  {
    title: "Oxygen-lean conversion",
    description:
      "A staged torrefaction and pyrolysis sequence yields biochar while suppressing particulate emissions.",
  },
  {
    title: "Distribution",
    description:
      "Automated bagging, briquetting, and cloud reporting tie physical products to carbon registry documentation in real time.",
  },
];

export const partnersList: ProcessStep[] = [
  {
    title: "Feedstock mapping",
    description:
      "Digitally assess residue types, ash content, and logistics to configure the right conversion recipe for each territory.",
  },
  {
    title: "On-site preparation",
    description:
      "Low-power shredding and drying modules condition biomass within the mobile units.",
  },
  {
    title: "Oxygen-lean conversion",
    description:
      "A staged torrefaction and pyrolysis sequence yields biochar while suppressing particulate emissions.",
  },
  {
    title: "Distribution",
    description:
      "Automated bagging, briquetting, and cloud reporting tie physical products to carbon registry documentation in real time.",
  },
];
