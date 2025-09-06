// / ShowCase.tsx
"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";

import JoinCourses from "../ui/joinCourses";
import AttemptMockTests from "../ui/attemptMockTest";
import ClearDoubts from "../ui/ClearDoubts";
import TrackProgress from "../ui/TrackProgress";
import AccessStudyMaterial from "../ui/AccessStudyMaterial";
import Card from "../ui/cardProps";

const Sections = [
  { id: 1, Component: JoinCourses, title: "Join Courses" },
  { id: 2, Component: AttemptMockTests, title: "Attempt Mock Tests" },
  { id: 3, Component: AccessStudyMaterial, title: "Access Study Material" },
  { id: 4, Component: ClearDoubts, title: "Clear Doubts" },
  { id: 5, Component: TrackProgress, title: "Track Progress" },
];

const ShowCase = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative bg-[#F5EDED] mt-14">
      {Sections.map((step, index) => {
        const Comp = step.Component;
        const number = String(index + 1).padStart(2, "0");
        const total = String(Sections.length).padStart(2, "0");
        const range = [index * 0.25, 1];
        const targetScale = 1 - (Sections.length - index) * 0.05;

        return (
          <Card
            key={step.id}
            i={index}
            Component={Comp}
            number={number}
            total={total}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default ShowCase;