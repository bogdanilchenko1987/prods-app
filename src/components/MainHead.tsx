import { motion } from "framer-motion";
import { container } from "../utils/motionContainer";

export default function MainHead() {
  return (
    <motion.h1
      variants={container(0.5, 100)}
      initial="hidden"
      animate="visible"
      className="heading"
    >
      Find your DREAM products in My store today!
    </motion.h1>
  );
}
