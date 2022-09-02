import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import '../../'

const TimelineVertical = () => {
  return (
    <>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="white">
            11/2021 - NOW
          </TimelineOppositeContent>
          <TimelineSeparator >
            <TimelineDot variant="outlined" color="info"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="white">
            DappsFactory <br/> Software Factory 
            <p>
            - Layout design and programming of views.
            - Develop platform views according to product area guidelines.
            - Collaborate with back-end developers and web designers to improve usability.
            - Coding of user interaction functionalities.
            - Bug-fixing and documentation.
            - Code review of colleagues in the same position.
            - Create quality models and prototypes.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="white">
            DappsFactory <br/> Software Factory 
            <p>
            - Layout design and programming of views.
            - Develop platform views according to product area guidelines.
            - Collaborate with back-end developers and web designers to improve usability.
            - Coding of user interaction functionalities.
            - Bug-fixing and documentation.
            - Code review of colleagues in the same position.
            - Create quality models and prototypes.
            </p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="info"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="white">06/2018 - 11/2021</TimelineContent>
        </TimelineItem>
        <TimelineItem>
         
          <TimelineSeparator sx={{height: '1px'}}>
            <TimelineDot variant="outlined" color="info"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="white"></TimelineContent>
        </TimelineItem>
        
      </Timeline>
    </>
  )
}

export default TimelineVertical