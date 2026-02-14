import { motion } from "motion/react";
import React, { useState } from "react";

const hoverVairantsDiv = {
  hidden: { opacity: 0.8, width: "0%", height: "0%" },
  visible: { opacity: 1, width: "100%", height: "100%" },
};
const hoverVairantsColor = {
  hidden: { color: "#000000" },
  visible: { color: "#754e5f" },
};
const ProgressDiv = ({ children }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      className="flex relative items-center p-2 w-[800px] overflow-hidden"
    >
      <motion.div
        variants={hoverVairantsDiv}
        initial="hidden"
        animate={isHover ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-black w-5 h-5 "
      />
      <motion.h2
        variants={hoverVairantsColor}
        initial="hidden"
        animate={isHover ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 p-1 text-3xl font text-black cursor-pointer"
      >
        {children}
      </motion.h2>
      <div className="h-10 w-full"></div>
    </motion.div>
  );
};

export default ProgressDiv;
