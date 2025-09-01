export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  secondaryText: string;
  personName: string;
  personImage: string;
  personPos: string;
  personProdText: string;
  personProdImage: string;
  personPower : string;
  accentColor: 'red' | 'blue' | 'green' | 'purple' | 'orange';
}
export interface GetRecom{
  title: string;
  icon: string;
  
}
export const GetRecomData: GetRecom[] = [
  {
    title: "Get Recommendations",
    icon: "/svg/shine.svg",
  },
  {
    
    title: "Board Exam Courses",
    icon: "/svg/courses.svg",
  },
  {
    
    title: "JMI Preparation",
    icon: "/svg/jmi.svg",
  },
  {
    
    title: "AMU",
    icon: "/svg/amu.svg",
  },
  {
    
    title: "Ask a Mentor",
    icon: "/svg/ask-mentor.svg",
  },
  {
    
    title: "Skill Based Learning",
    icon: "/svg/learning.svg",
  },
  {
    
    title: "Something else?",
    icon: "/svg/edit.svg",
  },
]

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
    personPos: "Founder & CEO",
    personProdText: "Payment",
    personProdImage: "/images/Shadab.png",
    personPower: "1000+ Students",
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
    personImage: "/images/Shadab.png",
    personPos: "Founder & CEO",
    personProdText: "Payroll",
    personProdImage: "/images/Shadab.png",
    personPower: "1000+ Students",
    accentColor: "blue"
  }
];