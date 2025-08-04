import { easeInOut, type Variants } from "framer-motion";

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

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, type: "spring", stiffness: 100, damping: 15 },
  }),
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

const aboutPageSectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 120, damping: 14 },
  }),
};

const aboutPageTextVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

const aboutPageSubtitleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5, staggerChildren: 0.05 },
  },
  exit: { opacity: 0 },
};

const aboutPageLetterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
};
