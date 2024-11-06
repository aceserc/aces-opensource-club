// eventData.ts
export interface upcomingEvent {
  title: string;
  description: string;
  date: string;
  link: string;
  buttonText: string;
}

export const upcomingevents: upcomingEvent[] = [
  {
    title: "Open Source Hackathon",
    description: "Join us for a 24-hour coding marathon to create innovative open-source solutions.",
    date: "July 15-16, 2024",
    link: "/events",
    buttonText: "Register Now"
  },
  {
    title: "Tech Talk: Future of AI",
    description: "An insightful discussion on the future of AI and its impact on open-source development.",
    date: "August 5, 2024",
    link: "/events",
    buttonText: "RSVP"
  },
  {
    title: "Code Workshop: React & Next.js",
    description: "Learn how to build modern web applications using React and Next.js.",
    date: "September 10, 2024",
    link: "/events",
    buttonText: "Sign Up"
  }
];
