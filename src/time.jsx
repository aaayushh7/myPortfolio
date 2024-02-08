import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience } from './data';

const Time = () => {
  return (
    <section className='w-full flex items-center justify-center pt-10 flex-col' id='timeline'>
      <p className="w-full text-4xl text-center text-[#262627] font-bold pt-5 capitalize my-20 flex justify-center items-center pb-8">
        <b>Timeline</b>
      </p>
      <VerticalTimeline lineColor='#605c5e'>
        {Experience.map(n => (
          <VerticalTimelineElement
            key={n.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(222,239,244,255)', color: '#262627' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(147,183,195)' }}
            date={n.date}
            iconStyle={{ background: '#7296c0', color: '#fff' }}
            icon={n.iconsSrc}
          >
            <h3 className="vertical-timeline-element-title">{n.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
            <p>{n.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Time;