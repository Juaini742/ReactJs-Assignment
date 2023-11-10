/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function LeftIn(props) {
  const { children, className } = props;

  const [leftRef, leftInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [rightRef, rightInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const reverseAnimationVariants = {
    visible: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: rightInView ? 100 : -100,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className={className}
      ref={leftRef}
      initial="hidden"
      animate={leftInView ? "visible" : "hidden"}
      variants={reverseAnimationVariants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default LeftIn;
