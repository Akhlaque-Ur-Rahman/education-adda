export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  secondaryText: string;
  personName: string;
  personImage: string;
  accentColor: 'red' | 'blue' | 'green' | 'purple' | 'orange';
}

export const heroSlides: SlideData[] = [
  {
    id: 1,
    title: "Padhai Ka Adda !",
    subtitle: "Tayar Ho Jao AMU/JMI Ke Liye!",
    description: "Top-quality content | Zero confusion | Top-quality content.",
    ctaText: "Sign Up",
    secondaryText: "Know More",
    personName: "Shadab Perwez",
    personImage: "/images/Shadab.png",
    accentColor: "red"
  },
  {
    id: 2,
    title: "Master Your Skills !",
    subtitle: "Excel in Competitive Exams!",
    description: "Expert guidance | Proven methods | Success guaranteed.",
    ctaText: "Get Started",
    secondaryText: "Learn More",
    personName: "Expert Mentor",
    personImage: "/data/images/teacher-1.png",
    accentColor: "blue"
  }
];