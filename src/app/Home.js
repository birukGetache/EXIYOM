"use client";

import dynamic from "next/dynamic";
import Text from "./components/text";
import Navbar from "./components/Nav";
import About from "./components/About";
import Services from "./components/Service";
import Team from "./components/Team";
import Project from "./components/Project";
import Partner from "./components/Partner";
import Fotter from "./components/Fotter";

const DynamicHome = dynamic(
  () =>
    Promise.resolve(() => {
      return (
        <div className="w-screen">
          <img src="/grid.svg" alt="grid" style={{ height: "100vh", width: "100vw" }} />
          <div className=" w-screen">
            <Text />
          </div>

          <div className="relative sm:mt-20 md:mt-20">
            <About />
          </div>
          <Services />
          <Team />
          <Project />
          <Partner />
          <Fotter />
        </div>
      );
    }),
  { ssr: false }
);

export default DynamicHome;
