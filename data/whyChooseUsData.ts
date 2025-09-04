export interface WhyChooseUsImage {
  src: string
  alt: string
  fit: "cover" | "contain" | "fill"
}

export interface FeaturedHeadline {
  headline: string
  subText: string
}

export interface WhyChooseUsData {
  borderColor: string
  image: WhyChooseUsImage
  headlineBlock: FeaturedHeadline
  features: string[]
}

export const whyChooseUsData: WhyChooseUsData = {
  borderColor: "#ff0000",
  image: {
    src: "/images/fauxels.jpg",
    alt: "whyChooseUs",
    fit: "cover",
  },
  headlineBlock: {
    headline: "The all-in-one learning platform you’ve been waiting for",
    subText: "With Education Adda, you can:",
  },
  features: [
    "Live & Interactive Classes",
    "Access Recorded Lectures Anytime",
    "Attempt Mock Tests & Previous Year Papers",
  ],
}
