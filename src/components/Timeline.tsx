import type { TimelineEntry } from '@/data/types';
import './Timeline.scss';

const Timeline = ({ entries }: { entries: TimelineEntry[] }) => (
  <ol className="timeline">
    {entries.map((entry) => (
      <li key={`${entry.org}-${entry.dates}`}>
        <div className="timeline-card">
          <div className="timeline-heading">
            <h3>{entry.org}</h3>
            <span className="dates">{entry.dates}</span>
          </div>
          <p className="role">{entry.role}</p>
          {entry.location && <p className="location">{entry.location}</p>}
          {entry.details && <p className="details">{entry.details}</p>}
        </div>
      </li>
    ))}
  </ol>
);

export default Timeline;
