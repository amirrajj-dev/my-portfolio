import { easeInOut, type Variants } from "framer-motion";

// CodeEditort.tsx

const codeEditorContainerVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
};

const codeLineVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.02,
      type: "spring" as const,
      stiffness: 160,
      damping: 14,
    },
  }),
};

// CodeEditor.tsx Variants Ended


//  About.tsx , Contact.tsx , FeaturedProjects.tsx , ProjectCard.tsx
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, type: "spring", stiffness: 100, damping: 15 },
  }),
};

// About.tsx
const textVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

// Hero.tsx(about and projects and skills) , Journey.tsx , Skills.tsx  
const aboutPageSectionVariants : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.4, type: "spring", stiffness: 120, damping: 14 },
  }),
};

// Hero.tsx(about and projects)
const aboutPageTextVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

// Hero.tsx(about)
const aboutPageSubtitleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5, staggerChildren: 0.05 },
  },
  exit: { opacity: 0 },
};

// Hero.tsx(about)
const aboutPageLetterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// JourneyCard.tsx
const cardVariants: Variants = {
  hidden: { opacity: 0, x: 0, rotate: 0 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { delay: i * 0.3, type: "spring", stiffness: 120, damping: 14 },
  }),
}

// ContactForm.tsx
const fieldVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 100, damping: 15 },
  }),
};

// Intro.tsx(home)
const introVariants : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 120, damping: 15 },
  }),
};


// ProjectCard.tsx , Skills.tsx
const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, type: "spring", stiffness: 150, damping: 12 },
  }),
};

// Skills.tsx
const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 120, damping: 12 },
  }),
};

export {
  codeLineVariants,
  codeEditorContainerVariants,
  sectionVariants,
  textVariants,
  aboutPageSectionVariants,
  aboutPageTextVariants,
  aboutPageSubtitleVariants,
  aboutPageLetterVariants,
  cardVariants,
  fieldVariants,
  introVariants,
  iconVariants,
  buttonVariants
};
