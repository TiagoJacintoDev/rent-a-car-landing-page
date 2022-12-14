const TRANSITION_DURATION = { duration: 1 };
const TRANSITION_DELAY = { delay: 1 };

const viewport = { once: true };
const whileInView = { opacity: 1, y: 0, x: 0 };

export const MapAnims = {
  initial: { width: "50%" },
  whileInView: { width: "100%" },
  viewport,
  transition: TRANSITION_DURATION,
};

export const CarAnims = {
  initial: { x: "-30%", opacity: 0 },
  viewport,
  whileInView,
  transition: { ...TRANSITION_DELAY, ...TRANSITION_DURATION },
};

export const DemoAnims = {
  initial: { y: "-20%", opacity: 0 },
  viewport,
  whileInView,
  transition: { delay: 1.5, ...TRANSITION_DURATION },
};

export const sectionTitleAnims = {
  initial: { opacity: 0, y: "-55%" },
  whileInView,
  transition: {
    duration: 0.5,
  },
  viewport,
};

export const paragraphAnims = {
  initial: { opacity: 0, y: "-75%" },
  whileInView,
  transition: { ...TRANSITION_DELAY, duration: 0.5 },
  viewport,
};
