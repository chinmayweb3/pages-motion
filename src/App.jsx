import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./home";
import { About } from "./about";

import { AnimatePresence, motion } from "framer-motion";

const MotionFrame = (props) => {
  return (
    <motion.div
      initial={{ transform: "skewX(-45deg) translate(0,0)" }}
      animate={{ transform: "skewX(-45deg) translate(0,100%)", transition: { duration: props.duration / 5, ease: "easeIn", delay: 1 } }}
      exit={{ transform: "skewX(-45deg) translate(0,0)", transition: { duration: props.duration / 5, ease: "easeOut" } }}
      className={`${props.parentClass}`}
    >
      <motion.h1
        initial={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
        animate={{
          transform: "skewX(45deg) translate(calc(-50% + 900px + 45px),calc(-50% - 900px))",
          transition: { duration: props.duration / 5, ease: "easeInOut", delay: 1 },
        }}
        exit={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)", transition: { duration: props.duration / 5, ease: "easeInOut" } }}
        // transition={{ duration: props.duration / 5, ease: "easeInOut" }}
        className={`${props.childClass}`}
      >
        Motion
      </motion.h1>
    </motion.div>
  );
};

const Framer = () => (
  <>
    <MotionFrame parentClass={"motion-scale-plane-1"} childClass={"motion-scale-h1-1"} duration={1} />
    <MotionFrame parentClass={"motion-scale-plane0"} childClass={"motion-scale-h10"} duration={2} />
    <MotionFrame parentClass={"motion-scale-plane"} childClass={"motion-scale-h1"} duration={3} />
    <MotionFrame parentClass={"motion-scale-plane2"} childClass={"motion-scale-h12"} duration={4} />
    <MotionFrame parentClass={"motion-scale-plane3"} childClass={"motion-scale-h13"} duration={5} />
    <MotionFrame parentClass={"motion-scale-plane4"} childClass={"motion-scale-h14"} duration={6} />
    <MotionFrame parentClass={"motion-scale-plane5"} childClass={"motion-scale-h15"} duration={5} />
    <MotionFrame parentClass={"motion-scale-plane6"} childClass={"motion-scale-h16"} duration={5.5} />
    <MotionFrame parentClass={"motion-scale-plane7"} childClass={"motion-scale-h17"} duration={6} />
  </>
);

const Page1 = () => (
  <>
    <Framer />
    <div className="h-screen grid place-content-center bg-cyan-500">
      <h2>Home</h2> <Link to={"/about"}>about</Link>
    </div>
  </>
);

const Page2 = () => (
  <>
    {/* <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 1, left: "0" }}
      animate={{ opacity: 1, left: 0 }}
      transition={{ duration: 100 }}
      className="motion-scale"
    > */}
    <Framer />
    {/* <motion.div
      initial={{ transform: "skewX(-45deg)" }}
      animate={{ transform: "skewX(-45deg) translate(0,900px)" }}
      exit={{ transform: "skewX(-45deg) translate(0,0)" }}
      transition={{ duration: 1 }}
      className="motion-scale-plane"
    >
      <motion.h1
        initial={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
        animate={{ transform: "skewX(45deg) translate(calc(-50% + 900px + 45px),calc(-50% - 900px))" }}
        exit={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
        transition={{ duration: 1 }}
        className="motion-scale-h1 "
      >
        Motion
      </motion.h1>
    </motion.div>

    <motion.div
      initial={{ transform: "skewX(-45deg)" }}
      animate={{ transform: "skewX(-45deg) translate(0,900px)" }}
      exit={{ transform: "skewX(-45deg) translate(0,0)" }}
      transition={{ duration: 1 }}
      className="motion-scale-plane2"
    >
      <motion.h1
        initial={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
        animate={{ transform: "skewX(45deg) translate(calc(-50% + 900px + 45px),calc(-50% - 900px))" }}
        exit={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
        transition={{ duration: 1 }}
        className="motion-scale-h12 "
      >
        Motion
      </motion.h1>
    </motion.div>

    <motion.div
      initial={{ transform: "skewX(-45deg)" }}
      animate={{ transform: "skewX(-45deg) translate(0,900px)" }}
      exit={{ transform: "skewX(-45deg) translate(0,0)" }}
      transition={{ duration: 1 }}
      className="motion-scale-plane3"
    >
      <motion.h1
        initial={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
        animate={{ transform: "skewX(45deg) translate(calc(-50% + 900px + 45px),calc(-50% - 900px))" }}
        exit={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
        transition={{ duration: 1 }}
        className="motion-scale-h13"
      >
        Motion
      </motion.h1>
    </motion.div>

    <motion.div
      initial={{ transform: "skewX(-45deg)" }}
      animate={{ transform: "skewX(-45deg) translate(0,900px)" }}
      exit={{ transform: "skewX(-45deg) translate(0,0)" }}
      transition={{ duration: 1 }}
      className="motion-scale-plane4"
    >
      <motion.h1
        initial={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
        animate={{ transform: "skewX(45deg) translate(calc(-50% + 900px + 45px),calc(-50% - 900px))" }}
        exit={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
        transition={{ duration: 1 }}
        className="motion-scale-h14"
      >
        Motion
      </motion.h1>
    </motion.div>

    <motion.div
      initial={{ transform: "skewX(-45deg)" }}
      animate={{ transform: "skewX(-45deg) translate(0,900px)" }}
      exit={{ transform: "skewX(-45deg) translate(0,0)" }}
      transition={{ duration: 1 }}
      className="motion-scale-plane5"
    >
      <motion.h1
        initial={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
        animate={{ transform: "skewX(45deg) translate(calc(-50% + 900px + 45px),calc(-50% - 900px))" }}
        exit={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
        transition={{ duration: 1 }}
        className="motion-scale-h15"
      >
        Motion
      </motion.h1>
    </motion.div> */}
    {/* </motion.div> */}

    <div>
      <div className="h-screen grid place-content-center bg-cyan-500 text-white">
        <h2>About</h2> <Link to={"/"}>home</Link>
      </div>
      <div className="h-screen grid place-content-center bg-cyan-500 text-white">
        <h2>About</h2> <Link to={"/"}>home</Link>
      </div>
    </div>
  </>
);

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page1 />} />
          <Route path="/about" element={<Page2 />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
