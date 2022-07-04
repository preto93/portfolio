import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const TimelineVertical = () => {
  return (
    <>
      <Timeline position="alternate" sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <TimelineItem>
          <TimelineOppositeContent color="white">
            11/2021 - NOW
          </TimelineOppositeContent>
          <TimelineSeparator sx={{height: '20vh'}}>
            <TimelineDot variant="outlined" color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="white">
            DappsFactory <br/> Software Factory 
            <p>
              Full Stack developer
            </p>
            <p>
              React JS <br /> Solidity 
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="white">
            <p>Freelancer</p>
            <p>MERN Stack</p>
            <p>Mongo Express React Node</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="white">06/2018 - 11/2021</TimelineContent>
        </TimelineItem>
        <TimelineItem>
         
          <TimelineSeparator sx={{height: '1px'}}>
            <TimelineDot variant="outlined" color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="white"></TimelineContent>
        </TimelineItem>
        
      </Timeline>
    </>
  )
}

export default TimelineVertical