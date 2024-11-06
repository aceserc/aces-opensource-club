// projectData.ts
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  buttonText: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    title: "ACES Open Source Club Website",
    description: "A modern website for the ACES Open Source Club built with Tailwind CSS ,shadcn-ui and React.",
    imageUrl: "/website.png",
    altText: "Project 1",
    buttonText: "View Project",
    githubLink: "https://github.com/aceserc/aces-opensource-club"
  },
];
