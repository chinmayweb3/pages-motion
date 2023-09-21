import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./home";
import { About } from "./about";

import { AnimatePresence, motion } from "framer-motion";

const MotionFrame = (props) => {
  // console.log("sldkjfjk", parentClass);
  return (
    <motion.div
      initial={{ transform: "skewX(-45deg)" }}
      animate={{ transform: "skewX(-45deg) translate(0,900px)" }}
      exit={{ transform: "skewX(-45deg) translate(0,0)" }}
      transition={{ duration: 2, ease: "circOut" }}
      className={`${props.parentClass}`}
    >
      <motion.h1
        initial={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
        animate={{ transform: "skewX(45deg) translate(calc(-50% + 900px + 45px),calc(-50% - 900px))" }}
        exit={{ transform: "skewX(45deg) translate(calc(-50% + 45px),-50%)" }}
        transition={{ duration: 2, ease: "circOut" }}
        className={`${props.childClass}`}
      >
        Motion
      </motion.h1>
    </motion.div>
  );
};

const Framer = () => (
  <>
    <MotionFrame parentClass={"motion-scale-plane"} childClass={"motion-scale-h1"} />
    <MotionFrame parentClass={"motion-scale-plane2"} childClass={"motion-scale-h12"} />
    <MotionFrame parentClass={"motion-scale-plane3"} childClass={"motion-scale-h13"} />
    <MotionFrame parentClass={"motion-scale-plane4"} childClass={"motion-scale-h14"} />
    <MotionFrame parentClass={"motion-scale-plane5"} childClass={"motion-scale-h15"} />
    <MotionFrame parentClass={"motion-scale-plane6"} childClass={"motion-scale-h16"} />
    <MotionFrame parentClass={"motion-scale-plane7"} childClass={"motion-scale-h17"} />
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
    </motion.div> */}

    {/* <motion.div
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
