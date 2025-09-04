export interface CourseCard {
  title: string
  description: string
  image?: string
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface CourseTab {
  name: string
  cards: CourseCard[]
}

export const coursesData: CourseTab[] = [
  {
    "name": "Jamia Millia Islamia",
    "cards": [
      {
        "title": "Live + Recorded Classes",
        "description": "Attend interactive lectures and re-watch anytime.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Enroll Now",
        "ctaSecondary": "Know More"
      },
      {
        "title": "Study Notes & PDFs",
        "description": "Download topic-wise notes instantly.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Get Notes",
        "ctaSecondary": "Preview"
      },
      {
        "title": "Mock Tests & PYQs",
        "description": "Practice like real exams and analyze performance.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Start Test",
        "ctaSecondary": "View Results"
      },
      {
        "title": "Doubt Solving",
        "description": "Real-time doubt clearance by expert mentors.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Ask Doubt",
        "ctaSecondary": "Chat Now"
      }
    ]
  },
  {
    "name": "Aligarh Muslim University",
    "cards": [
      {
        "title": "AMU Live Classes",
        "description": "Special batch for AMU entrance prep.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Join Batch",
        "ctaSecondary": "Know More"
      },
      {
        "title": "Notes & PDFs",
        "description": "Topic-wise AMU focused notes.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Download",
        "ctaSecondary": "Preview"
      },
      {
        "title": "Mock Tests",
        "description": "Attempt AMU-style mock tests.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Start Mock",
        "ctaSecondary": "Analyze"
      },
      {
        "title": "Mentorship",
        "description": "1-on-1 mentorship sessions.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Book Session",
        "ctaSecondary": "Know More"
      }
    ]
  },
  {
    "name": "Banaras Hindu University",
    "cards": [
      {
        "title": "BHU Prep Classes",
        "description": "Prepare with expert faculty for BHU exams.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Enroll Now",
        "ctaSecondary": "Know More"
      },
      {
        "title": "Notes & Study Material",
        "description": "Instant downloads for BHU syllabus.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Download",
        "ctaSecondary": "Preview"
      },
      {
        "title": "Mock Exams",
        "description": "Simulate BHU entrance tests.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Start Exam",
        "ctaSecondary": "Review"
      },
      {
        "title": "Doubt Clearing",
        "description": "Get doubts solved by subject experts.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Ask Doubt",
        "ctaSecondary": "Chat Now"
      }
    ]
  },
  {
    "name": "Jawaharlal Nehru University",
    "cards": [
      {
        "title": "JNU Masterclass Series",
        "description": "Expert-led sessions for JNU entrance exams (JNUEE).",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Join Classes",
        "ctaSecondary": "View Schedule"
      },
      {
        "title": "JNU Study Compendium",
        "description": "Curated notes and PDFs for all JNU courses.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Get Material",
        "ctaSecondary": "See Samples"
      },
      {
        "title": "JNUEE Mock Tests",
        "description": "Practice with tests based on the latest JNU pattern.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Attempt Test",
        "ctaSecondary": "Analyze Performance"
      },
      {
        "title": "Expert Guidance",
        "description": "Strategic guidance and doubt solving for JNU aspirants.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Ask an Expert",
        "ctaSecondary": "Book a Slot"
      }
    ]
  },
  {
    "name": "Delhi University",
    "cards": [
      {
        "title": "DU-CUET Live Prep",
        "description": "Comprehensive live classes for DU's CUET requirements.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Enroll Now",
        "ctaSecondary": "Learn More"
      },
      {
        "title": "Domain-Specific Notes",
        "description": "Download notes for CUET subjects relevant to DU courses.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Get Notes",
        "ctaSecondary": "Preview"
      },
      {
        "title": "CUET Mock Tests for DU",
        "description": "Practice with full-length mocks for General & Domain tests.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Start Test",
        "ctaSecondary": "View Analytics"
      },
      {
        "title": "Admission Counselling",
        "description": "Guidance on DU's CSAS portal and college preferences.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Get Help",
        "ctaSecondary": "Talk to Counselor"
      }
    ]
  },
  {
    "name": "University of Allahabad",
    "cards": [
      {
        "title": "AU Entrance Classes",
        "description": "Targeted coaching for Allahabad University's entrance tests.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Join Batch",
        "ctaSecondary": "Know More"
      },
      {
        "title": "AU Syllabus Notes",
        "description": "Concise study material covering the entire AU syllabus.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Download PDFs",
        "ctaSecondary": "Preview"
      },
      {
        "title": "Allahabad Uni Mocks",
        "description": "Attempt practice tests designed as per the AU exam pattern.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Start Practice",
        "ctaSecondary": "Check Score"
      },
      {
        "title": "Doubt Resolution",
        "description": "Instant doubt solving sessions with subject matter experts.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Ask Now",
        "ctaSecondary": "Join Group"
      }
    ]
  },
  {
    "name": "Lucknow University",
    "cards": [
      {
        "title": "LU Live Coaching",
        "description": "Prepare for Lucknow University's UG and PG entrance exams.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Enroll",
        "ctaSecondary": "Learn More"
      },
      {
        "title": "LU Study Material",
        "description": "Download chapter-wise notes and important questions.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Get Notes",
        "ctaSecondary": "View Samples"
      },
      {
        "title": "LU Entrance Mocks",
        "description": "Practice with mock tests that mirror the LU exam.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Take Test",
        "ctaSecondary": "Analyze Results"
      },
      {
        "title": "Student Mentorship",
        "description": "Connect with mentors for personalized guidance and strategy.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Find a Mentor",
        "ctaSecondary": "Chat Now"
      }
    ]
  },
  {
    "name": "University of Hyderabad",
    "cards": [
      {
        "title": "UoH Entrance Classes",
        "description": "Specialized classes for UoH's competitive PG entrances.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Join Now",
        "ctaSecondary": "Course Details"
      },
      {
        "title": "UoH Focused Notes",
        "description": "In-depth notes prepared by experts for UoH syllabus.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Download Now",
        "ctaSecondary": "Preview Notes"
      },
      {
        "title": "UoH Mock Test Series",
        "description": "Analyze your preparation with our UoH-specific test series.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Start Series",
        "ctaSecondary": "View Performance"
      },
      {
        "title": "Research Guidance",
        "description": "Guidance for interview and research proposal for PhD aspirants.",
        "image": "/svg/image-placeholder.svg",
        "ctaPrimary": "Book Session",
        "ctaSecondary": "Know More"
      }
    ]
  }
]
