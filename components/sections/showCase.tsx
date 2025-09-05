import React from 'react'
import JoinCourses from '../ui/joinCourses'
import AttemptMockTests from '../ui/attemptMockTest'
import ClearDoubts from '../ui/ClearDoubts'
import TrackProgress from '../ui/TrackProgress'
import AccessStudyMaterial from '../ui/AccessStudyMaterial'

const Sections = [
  { id: 1, Component: JoinCourses, title: "Join Courses" },
  { id: 2, Component: AttemptMockTests, title: "Attempt Mock Tests" },
  { id: 3, Component: AccessStudyMaterial, title: "Access Study Material" },
  { id: 4, Component: ClearDoubts, title: "Clear Doubts" },
  { id: 5, Component: TrackProgress, title: "Track Progress" },
];

const ShowCase = () => {
  return (
    <section className="px-0 py-2 lg:px-[60px] lg:pt-[10px] lg:pb-[60px] bg-[#F5EDED]">
      {Sections.map((step, index) => {
        const Comp = step.Component;
        const number = String(index + 1).padStart(2, "0"); // adds leading zero
        const total = String(Sections.length).padStart(2, "0"); // total also padded
        return <Comp key={step.id} number={`${number}/${total}`} />;
      })}
    </section>

  )
}

export default ShowCase
