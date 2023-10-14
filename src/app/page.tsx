"use client";
import { createRef, useEffect, useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Profile from "./Components/profile";
import Skill from "./Components/skill";
import Project from "./Components/project";
import Contact from "./Components/contact";
import { useInView } from "react-intersection-observer";
import ScrollSpy from "react-ui-scrollspy";

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const Title = ({ id }: { id: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);
  return (
    <div ref={ref}>
      <motion.h2 style={{ y }}>{id}</motion.h2>
    </div>
  );
};

const Body = [
  {
    page: (
      <Profile>
        <Title id={"Profile"} />
      </Profile>
    ),
    id: "Profile",
  },
  {
    page: (
      <Skill>
        <Title id={"Language"} />
      </Skill>
    ),
    id: "Language",
  },
  {
    page: (
      <Project>
        <Title id={"Project"} />
      </Project>
    ),
    id: "Project",
  },
  {
    page: (
      <Contact>
        <Title id={"Contact"} />
      </Contact>
    ),
    id: "Contact",
  },
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <ScrollSpy
        activeClass="active-nav"
        offsetBottom={100}
        scrollThrottle={80}
        useBoxMethod
        updateHistoryStack={false}
      >
        {Body.map((v, idx) => {
          return (
            <div
              key={idx}
              id={v.id}
              className="h-[100vh] flex justify-center items-center relative snap-center flex-col"
            >
              {v.page}
            </div>
          );
        })}
      </ScrollSpy>
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
