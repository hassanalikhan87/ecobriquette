import { FacilityIcon, LeafClusterIcon, ShieldFlameIcon } from "@/components/icons/highlight-icons";
import type {
  Application,
  Faq,
  Highlight,
  ProcessStep,
  Stat,
} from "@/lib/types/home";

export const highlights: Highlight[] = [
  {
    title: "Deploy anywhere",
    description:
      "Mobile densification units pack into a single crate and commission within 48 hours, bringing clean conversion technology to remote feedstock piles.",
    Icon: LeafClusterIcon,
  },
  {
    title: "Climate-positive outputs",
    description:
      "Produce premium biochar, densified briquettes, and process heat that qualify for durable carbon removal credits and circular supply chains.",
    Icon: ShieldFlameIcon,
  },
  {
    title: "Inclusive value chains",
    description:
      "Offer farmer cooperatives, municipalities, and forestry teams a revenue stream for residues while eliminating smoky field-burning practices.",
    Icon: FacilityIcon,
  },
];

export const stats: Stat[] = [
  { value: "95%", label: "less smoke than open burning" },
  { value: "2.3×", label: "energy yield over raw residues" },
  { value: "48 hr", label: "micro-hub deployment time" },
  { value: "2.6 tCO₂e", label: "removed per tonne biochar" },
];

export const applications: Application[] = [
  {
    title: "Carbon removal developers",
    points: [
      "Secure high-quality biochar supply with transparent monitoring, reporting, and verification (MRV).",
      "Bundle carbon credits with heat off-take to strengthen project economics.",
    ],
  },
  {
    title: "Rural cooperatives",
    points: [
      "Transform crop residues into premium soil inputs and smokeless briquettes on-site.",
      "Create new income streams for smallholder networks through carbon participation.",
    ],
  },
  {
    title: "Waste authorities",
    points: [
      "Divert green waste from landfills and wildfire-prone stockpiles.",
      "Deploy modular conversion hubs that scale with seasonal feedstock peaks.",
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
      "Low-power shredding and drying modules condition biomass within the micro-hub enclosure using captured waste heat.",
  },
  {
    title: "Oxygen-lean conversion",
    description:
      "A staged torrefaction and pyrolysis sequence yields biochar, process heat, and syngas while suppressing particulate emissions.",
  },
  {
    title: "Distribution & MRV",
    description:
      "Automated bagging, briquetting, and cloud reporting tie physical products to carbon registry documentation in real time.",
  },
];

export const faqs: Faq[] = [
  {
    question: "How does EcoBriquette differ from other biochar systems?",
    answer:
      "Our modular reactors are engineered for field deployment and plug into low-power grids. Integrated preprocessing, emissions scrubbing, and MRV sensors ship standard with every unit, compressing the learning curve for partners.",
  },
  {
    question: "What carbon programs recognize EcoBriquette output?",
    answer:
      "We align with Puro.earth and Verra biochar methodologies, providing traceability packages that include kiln telemetry, lab assays, and soil application evidence.",
  },
  {
    question: "Can the system co-produce energy for local use?",
    answer:
      "Yes. Captured syngas and heat can run dryers, greenhouses, or small steam loops. We design heat recovery packages around each deployment’s load profile.",
  },
];
