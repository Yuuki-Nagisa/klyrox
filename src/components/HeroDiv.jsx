import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const HeroDiv = () => {
  const words = ["Vision", "Code", "Impact"];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const smoothTranslateY = useSpring(translateY, {
    stiffness: 200, // lower = softer, higher = snappier
    damping: 10, // higher = less bounce
    mass: 1,
  });

  const smoothScale = useSpring(scale, {
    stiffness: 100,
    damping: 25,
    mass: 1,
  });

  const smoothBorderRadius = useSpring(borderRadius, {
    stiffness: 100,
    damping: 25,
  });
  return (
    <div
      className="h-[200vh] relative w-[99vw] flex justify-center bg-[#000000] overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="h-screen w-screen absolute flex items-center justify-center flex-col gap-5 bg-[#000000]"
        style={{ translateY: smoothTranslateY }}
      >
        <div
          className={`w-[95%] h-[20%] flex items-center justify-center gap-5 overflow-hidden `}
        >
          {words.map((word, idx) => (
            <motion.div
              key={idx}
              className={`${idx % 2 == 0 ? "text-transparent" : "text-[#754e5f]"} [-webkit-text-stroke:3px_#754e5f] text-9xl overflow-visible`}
              animate={{ x: ["120vw", "-120vw"] }}
              transition={{
                duration: 8,
                delay: idx * 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {word}
            </motion.div>
          ))}
          {words.map((word, idx) => (
            <motion.div
              key={idx + 3}
              className={`${idx % 2 == 1 ? "text-transparent" : "text-[#754e5f] "} [-webkit-text-stroke:3px_#754e5f] text-9xl overflow-visible`}
              animate={{ x: ["120vw", "-120vw"] }}
              transition={{
                duration: 8,
                delay: (idx + 3) * 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {word}
            </motion.div>
          ))}
        </div>
        <div
          className={`w-[95%] h-[20%] flex items-center justify-center gap-5 overflow-hidden `}
        >
          {words.map((word, idx) => (
            <motion.div
              key={idx}
              className={`${idx % 2 == 0 ? "text-transparent" : "text-[#754e5f]"} [-webkit-text-stroke:3px_#754e5f] text-9xl overflow-visible`}
              initial={{ x: "-125vw" }}
              animate={{ x: ["-120vw", "120vw"] }}
              transition={{
                duration: 8,
                delay: (6 - idx) * 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {word}
            </motion.div>
          ))}
          {words.map((word, idx) => (
            <motion.div
              key={idx + 3}
              className={`${idx % 2 == 1 ? "text-transparent" : "text-[#754e5f] "} [-webkit-text-stroke:3px_#754e5f] text-9xl overflow-visible`}
              animate={{ x: ["-120vw", "120vw"] }}
              transition={{
                duration: 8,
                delay: (3 - idx) * 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {word}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="h-screen relative w-screen flex items-center justify-center bg-gray-200 border-1 overflow-hidden"
        style={{
          translateY: smoothTranslateY,
          scale: smoothScale,
          borderRadius: smoothBorderRadius,
        }}
      >
        <img
          src="images/HeroDiv.jpeg"
          alt="hello"
          draggable="false"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute w-full h-200px overflow-hidden object-cover flex items-center justify-center ">
          <motion.h1
            className="text-[20rem] font-black text-white drop-shadow-lg tracking-wide uppercase"
            initial={{ y: 500, x: 0 }}
            animate={{ y: [500, 0, 0], x: [0, 0, 30] }}
            transition={{ duration: 1.3, delay: 0.2 }}
          >
            Klyrox
          </motion.h1>
        </div>
        <img
          src="images/masking.png"
          alt="hello"
          draggable="false"
          className="absolute w-full h-full object-cover "
        />
      </motion.div>
    </div>
  );
};

export default HeroDiv;
