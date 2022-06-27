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
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="white">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="white">Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="white">
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="white">Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="white">
            12:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="white">Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="white">
            9:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="white">Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  )
}

export default TimelineVertical