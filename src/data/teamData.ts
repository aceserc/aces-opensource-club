export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  socialLinks: SocialLinks;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sandip Sapkota",
    role: "President",
    image: "/image.webp",
    description: "Sandip leads our club with vision and dedication, ensuring we meet our goals.",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    }
  },
  {
    name: "Tilak Thapa",
    role: "Vice President",
    image: "/image.webp",
    description: "Tilak oversees our projects and helps coordinate our various initiatives.",
    socialLinks: {
      github: "",
      linkedin: "https://linkedin.com",
      twitter: "",
    }
  },
  {
    name: "Pujan Neupane",
    role: "Treasurer",
    image: "/image.webp",
    description: "Pujan manages our finances and ensures we have the resources for our activities.",
    socialLinks: {
      github: "",
      linkedin: "https://linkedin.com",
      twitter: "",
    }
  },
  {
    name: "Arun Aryal",
    role: "Events Coordinator",
    image: "/image.webp",
    description: "Arun brings creativity and energy to our event planning and execution.",
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
    }
  },
  {
    name: "Aarju Gautam",
    role: "Outreach Officer",
    image: "image.webp",
    description: "Aarju builds strong relationships with our community partners and stakeholders.",
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
    }
  },
  {
    name: "Eron Panta",
    role: "Technology Lead",
    image: "/image.webp",
    description: "Eron keeps us at the forefront of technological advancements in our field.",
    socialLinks: {
      github: "https://github.com",
      linkedin: "",
      twitter: "",
    }
  }
];
