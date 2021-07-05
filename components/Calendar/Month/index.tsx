import CalendarDate from 'components/Calendar/Date';
import type { GenericEvent } from 'lib/types';

export interface Props<T> {
  year: number;
  month: number;
  today: string;
  days?: T[][];
  dayLabels?: string[];
}

const Month = <T extends GenericEvent>({
  year,
  month,
  today,
  days,
  dayLabels,
}: Props<T>): JSX.Element | null => {
  const firstDay = new Date(year, month - 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();
  const startGap =
    firstDay > 0 ? <div className={`col-span-${firstDay}`} /> : null;

  return (
    <article className="grid grid-cols-7 gap-0">
      {dayLabels.map((label) => (
        <span key={label} className="text-right font-bold pr-2">
          {label}
        </span>
      ))}
      {startGap}
      {days.map((details, idx) => {
        const date = idx + 1;
        return date <= lastDate ? (
          <CalendarDate<T>
            key={date}
            date={date}
            details={details.length ? details : []}
            isToday={today === `${year}-${month}-${date}`}
          />
        ) : null;
      })}
    </article>
  );
};

Month.defaultProps = {
  days: [],
  dayLabels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
};

export default Month;
