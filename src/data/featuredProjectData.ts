// featuredProjectData.ts
export interface FeaturedProject {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  link: string;
  buttonText: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Open Source CMS",
    description: "A flexible content management system built with modern web technologies.",
    imageUrl: "/placeholder.jpg",
    altText: "Project 1",
    link: "/projects",
    buttonText: "Learn More"
  },
  {
    title: "AI Study Assistant",
    description: "An AI-powered tool to help students organize and optimize their study sessions.",
    imageUrl: "/placeholder.jpg",
    altText: "Project 2",
    link: "/projects",
    buttonText: "Learn More"
  },
  {
    title: "Eco Tracker",
    description: "A mobile app for tracking and reducing personal carbon footprint.",
    imageUrl: "/placeholder.jpg",
    altText: "Project 3",
    link: "/projects",
    buttonText: "Learn More"
  }
];
