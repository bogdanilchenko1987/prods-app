export const container = (delay: number, x: number) => ({
  hidden: { x: x, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});
