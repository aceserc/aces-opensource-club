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
    name: "Alex Johnson",
    role: "President",
    image: "/image.webp",
    description: "Alex leads our club with vision and dedication, ensuring we meet our goals.",
    socialLinks: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
    }
  },
  {
    name: "Samantha Lee",
    role: "Vice President",
    image: "/image.webp",
    description: "Samantha oversees our projects and helps coordinate our various initiatives.",
    socialLinks: {
      github: "",
      linkedin: "https://linkedin.com/in/samanthalee",
      twitter: "",
    }
  },
  {
    name: "Michael Chen",
    role: "Treasurer",
    image: "/image.webp",
    description: "Michael manages our finances and ensures we have the resources for our activities.",
    socialLinks: {
      github: "",
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "",
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Events Coordinator",
    image: "/image.webp",
    description: "Emily brings creativity and energy to our event planning and execution.",
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
    }
  },
  {
    name: "David Okonkwo",
    role: "Outreach Officer",
    image: "image.webp",
    description: "David builds strong relationships with our community partners and stakeholders.",
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
    }
  },
  {
    name: "Lisa Tanaka",
    role: "Technology Lead",
    image: "/image.webp",
    description: "Lisa keeps us at the forefront of technological advancements in our field.",
    socialLinks: {
      github: "https://github.com/lisatanaka",
      linkedin: "",
      twitter: "",
    }
  }
];
