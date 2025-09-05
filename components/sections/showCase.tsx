import React from 'react'
import JoinCourses from '../ui/joinCourses'
import AttemptMockTests from '../ui/attemptMockTest'
import ClearDoubts from '../ui/ClearDoubts'
import TrackProgress from '../ui/TrackProgress'
import AccessStudyMaterial from '../ui/AccessStudyMaterial'

const ShowCase = () => {
  return (
    <section className='px-0 py-2 lg:px-[60px] lg:pt-[10px] lg:pb-[60px] bg-[#F5EDED]'>
      <JoinCourses/>
      <AttemptMockTests/>
      <AccessStudyMaterial/>
      <ClearDoubts/>
      <TrackProgress/>
    </section>

  )
}

export default ShowCase
