export interface WhyChooseUsImage {
  src: string
  alt: string
  fit: "cover" | "contain" | "fill"   // 👈 union type for safety
}

export interface WhyChooseUsData {
  borderColor: string
  image: WhyChooseUsImage
}

export const whyChooseUsData: WhyChooseUsData = {
  borderColor: "#ff0000",
  image: {
    src: "/images/fauxels.jpg",
    alt: "whyChooseUs",
    fit: "cover",   // 👈 change to "contain" or "fill" anytime
  },
}
