import { motion } from "framer-motion";

export function framerComponent(Component) {
  return function () {
    return (
      <>
        <Framer />
        <Component />
      </>
    );
  };
}
const MotionFramerAuto = (props) => (
  <motion.div
    style={{
      backgroundColor: props.bgColor,
      left: props.pLeft,
      width: props.pWidth,
    }}
    initial={{ transform: "skewX(-45deg) translate(0,0)" }}
    animate={{ transform: "skewX(-45deg) translate(0,100%)", transition: { duration: props.duration / 8, ease: "easeIn", delay: 1 } }}
    exit={{ transform: "skewX(-45deg) translate(0,0)", transition: { duration: props.duration / 8, ease: "easeOut" } }}
    className={`plane-common`}
  >
    <motion.h1
      style={{
        left: `calc(50vw - ${props.hLeft})`,
        color: props.tColor,
      }}
      initial={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
      animate={{
        transform: "skewX(45deg) translate(calc(-50% + 100vh + 45px),calc(-50% - 100vh))",
        transition: { duration: props.duration / 8, ease: "easeInOut", delay: 1 },
      }}
      exit={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)", transition: { duration: props.duration / 8, ease: "easeInOut" } }}
      className={`plane-h1-common font-orbitron font-semibold md:text-[116px] whitespace-nowrap text-[32px]`}
    >
      PAGE TRANSITION
    </motion.h1>
  </motion.div>
);

const Framer = (props) => (
  <>
    {arrayofShade.slice(0, 25).map((shade, idx) => {
      const duration = Math.random() * (12 - 1 + 1) + 1;
      return (
        <MotionFramerAuto
          key={idx * 1}
          duration={duration}
          bgColor={shade.color}
          pWidth="5%"
          pLeft={idx * -5 + "%"}
          hLeft={idx * -100 + "%"}
          tColor={shade.text}
        />
      );
    })}

    {arrayofShade.slice(15).map((shade, idx) => {
      const duration = Math.random() * (12 - 1 + 1) + 1;
      return (
        <MotionFramerAuto
          key={idx * 13}
          duration={duration}
          bgColor={shade.color}
          pWidth="5%"
          pLeft={idx * 5 + "%"}
          hLeft={idx * 100 + "%"}
          tColor={shade.text}
        />
      );
    })}
  </>
);

const arrayofShade = [
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#eef2f2", text: "#0e0e11" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
  { color: "#0e0e11", text: "#eef2f2" },
];
