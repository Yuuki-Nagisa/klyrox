import { motion, scale } from "motion/react";
import { useEffect, useRef, useState } from "react";
import ProgressDiv from "./ProgressDiv";

const services = [
  "Website Development",
  "Android Development",
  "Backend Development",
];

const hoverVairantsDiv = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};
const bgPositions = ["0% 0%", "0% 50%", "0% 100%"];
const Services = () => {
  const ref = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [pos, setPos] = useState({ x: "50%", y: "50%" });

  const handlePointerMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.width / 2;
    const y = e.clientY - rect.height / 2 - 100;

    setPos({ x: `${x}px`, y: `${y}px` });
  };
  const handlePointerLeave = () => setPos({ x: "-9999px", y: "-9999px" });

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="h-screen w-[99vw] bg-[#754e5f] flex items-center justify-center flex-col"
    >
      <div className="flex items-center justify center p-5">
        <h2 className="text-5xl font-black text-black uppercase">Services</h2>
      </div>
      <div className="flex border-black border-l-3 border-b-3 items-center justify-center flex-col">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            onHoverStart={() => setHoveredIndex(idx)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <ProgressDiv>{service}</ProgressDiv>
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={hoverVairantsDiv}
        style={{ x: pos.x, y: pos.y }}
        initial="hidden"
        animate={hoveredIndex !== null ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
        className="w-[200px] h-[200px] overflow-hidden pointer-events-none z-5"
      >
        <motion.img
          animate={{
            objectPosition:
              hoveredIndex !== null ? bgPositions[hoveredIndex] : "0% 0%",
          }}
          transition={{ duration: 0.4 }}
          src="images/imageRevealobject.png"
          alt="imageRevealobject"
          className="w-full h-full object-cover pointer-events-none select-none"
        />
      </motion.div>
    </div>
  );
};

export default Services;
