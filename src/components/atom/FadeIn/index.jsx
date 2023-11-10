/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FadeIn(props) {
  const { className, children } = props;

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const animateVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      className={className}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animateVariant}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
