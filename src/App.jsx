import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./home";
import { About } from "./about";

import { AnimatePresence, motion } from "framer-motion";

const Framer = () => (
  <>
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 1, left: 0 }}
      animate={{ opacity: 1, left: "100%" }}
      transition={{ duration: 1 }}
      className="h-screen grid place-content-center bg-slate-500 fixed top-0 left-0 z-10 w-full"
    ></motion.div>
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 1, left: 0 }}
      animate={{ opacity: 1, left: "-100%" }}
      transition={{ duration: 1 }}
      className="h-screen grid place-content-center bg-slate-500 fixed top-0 left-0 z-10 w-full"
    ></motion.div>
  </>
);

const Page1 = () => (
  <motion.div
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="h-screen grid place-content-center bg-cyan-500"
  >
    <h2>Home</h2> <Link to={"/about"}>about</Link>
  </motion.div>
);
const Page2 = () => (
  <>
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 1, left: 0 }}
      animate={{ opacity: 1, left: "100%" }}
      transition={{ duration: 1 }}
      className="h-screen grid place-content-center bg-slate-500 fixed top-0 left-0 z-10 w-full"
    ></motion.div>
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 1, left: 0 }}
      animate={{ opacity: 1, left: "-100%" }}
      transition={{ duration: 1 }}
      className="h-screen grid place-content-center bg-slate-500 fixed top-0 left-0 z-10 w-full"
    ></motion.div>
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
