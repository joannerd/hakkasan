import CalendarDate from 'components/Calendar/Date';
import { getMonthPlaceholderDates } from 'lib/format';
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
  const { lastDate, previousMonthPlaceholderDates, nextMonthPlaceholderDates } =
    getMonthPlaceholderDates({ year, month });

  return (
    <article className="grid grid-cols-7 gap-0" aria-label="month">
      {dayLabels.map((label) => (
        <span key={label} className="text-right font-bold pr-2">
          {label}
        </span>
      ))}
      {previousMonthPlaceholderDates.map((placeholderDate) => (
        <CalendarDate<T>
          key={`placeholder-${placeholderDate}`}
          date={placeholderDate}
          isPlaceholder
        />
      ))}
      {days.map((details, idx) => {
        const date = idx + 1;
        return date <= lastDate ? (
          <CalendarDate<T>
            name={`${year}-${month}-${date}`}
            key={date}
            date={date}
            details={details.length ? details : []}
            isToday={today === `${year}-${month}-${date}`}
          />
        ) : null;
      })}
      {nextMonthPlaceholderDates.map((placeholderDate) => (
        <CalendarDate<T>
          key={`placeholder-${placeholderDate}`}
          date={placeholderDate}
          isPlaceholder
        />
      ))}
    </article>
  );
};

Month.defaultProps = {
  days: [],
  dayLabels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
};

export default Month;
