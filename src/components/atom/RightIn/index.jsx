/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function RightIn(props) {
  const { children, className } = props;

  const [lefttRef, leftInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [rightRef, rightInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const animateVariant = {
    visible: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: leftInView ? 100 : 100,
      opacity: 0,
    },
  };

  return (
    <motion.div
      ref={rightRef}
      initial="hidden"
      animate={rightInView ? "visible" : "hidden"}
      variants={animateVariant}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default RightIn;
