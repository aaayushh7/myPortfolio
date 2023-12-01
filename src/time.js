import React, { useCallback, useState, useRef, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Make sure to import the styles
import { Experience } from './data';

const MemoizedTimelineElement = React.memo(VerticalTimelineElement);

const Time = React.memo(() => {
  const [visibleElements, setVisibleElements] = useState(() => (
    Array.from({ length: Experience.length }, (_, index) => index)
  ));

  const timelineRef = useRef(null);

  const handleVisibilityChange = useCallback(entries => {
    const visibleElementsSet = new Set(
      entries
        .filter(entry => entry.isIntersecting)
        .map(entry => Number(entry.target.dataset.index))
    );

    setVisibleElements([...visibleElementsSet]);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleVisibilityChange, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    });

    if (timelineRef.current) {
      const elements = timelineRef.current.getElementsByClassName('vertical-timeline-element');
      Array.from(elements).forEach((element, index) => {
        observer.observe(element);
        element.dataset.index = index;
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [handleVisibilityChange]);

  return (
    <section className='w-full flex items-center justify-center pt-10 flex-col' id='timeline'>
      <p className="w-full text-4xl text-center text-slate-300 font-bold pt-5 capitalize my-20 flex justify-center items-center pb-8">
        <b>Timeline</b>
      </p>
      <VerticalTimeline ref={timelineRef}>
        {Experience && visibleElements.map(index => {
          const n = Experience[index];
          return (
            <MemoizedTimelineElement
              key={n.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(25, 39, 52)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(136, 153, 166)' }}
              date={n.date}
              iconStyle={{ background: '#017562', color: '#fff' }}
              icon={n.iconsSrc}
            >
              <h3 className="vertical-timeline-element-title">{n.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
              <p>{n.description}</p>
            </MemoizedTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
});

export default Time;