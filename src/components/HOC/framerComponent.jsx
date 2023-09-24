import { motion } from "framer-motion";

export function framerComponent(Component) {
  console.log("sahdes", arrayofShade.length);
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
    {arrayofShade.slice(0, 30).map((shade, idx) => {
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

    {arrayofShade.slice(10).map((shade, idx) => {
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
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#573586", text: "#fff" },
  { color: "#583786", text: "#fff" },
  { color: "#593886", text: "#fff" },
  { color: "#5a3a86", text: "#fff" },
  { color: "#5b3c86", text: "#fff" },
  { color: "#5c3d87", text: "#fff" },
  { color: "#5d3f87", text: "#fff" },
  { color: "#5e4187", text: "#fff" },
  { color: "#5f4287", text: "#fff" },
  { color: "#604487", text: "#fff" },
  { color: "#614687", text: "#fff" },
  { color: "#624887", text: "#fff" },
  { color: "#634a87", text: "#fff" },
  { color: "#654b87", text: "#fff" },
  { color: "#664d87", text: "#fff" },
  { color: "#674f87", text: "#fff" },
  { color: "#685187", text: "#fff" },
  { color: "#695387", text: "#fff" },
  { color: "#6a5587", text: "#fff" },
  { color: "#6b5787", text: "#fff" },
  { color: "#6c5986", text: "#fff" },
  { color: "#6d5b86", text: "#fff" },
  { color: "#6e5d86", text: "#fff" },
  { color: "#6f5f86", text: "#fff" },
  { color: "#6e5d86", text: "#fff" },
  { color: "#6f5f86", text: "#fff" },
  { color: "#6e5d86", text: "#fff" },
  { color: "#6f5f86", text: "#fff" },
  { color: "#706186", text: "#fff" },
  { color: "#716385", text: "#fff" },
  { color: "#736585", text: "#fff" },
  { color: "#746785", text: "#fff" },
  { color: "#756984", text: "#fff" },
  { color: "#766c84", text: "#fff" },
  { color: "#776e84", text: "#fff" },
  { color: "#787083", text: "#fff" },
  { color: "#797283", text: "#fff" },
  { color: "#7a7482", text: "#fff" },
  { color: "#7b7782", text: "#fff" },
  { color: "#7d7982", text: "#fff" },
  { color: "#7e7b81", text: "#fff" },
  { color: "#7f7e81", text: "#fff" },
  { color: "#808080", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
  { color: "#563485", text: "#fff" },
];
