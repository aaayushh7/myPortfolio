import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Experience } from './data';

const time = () => {
    return (
<section className='w-full flex items-center justify-center pt-10' id='timeline'>
            <VerticalTimeline>
              {
                Experience && Experience.map(n => (
                  <VerticalTimelineElement
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
                    <p>
                      {n.description}
                    </p>
                  </VerticalTimelineElement>
                ))
              }
            </VerticalTimeline>
          </section>

);
};

export default time;