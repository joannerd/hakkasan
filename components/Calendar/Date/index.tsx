import type { GenericEvent } from 'lib/types';

export interface Props<T> {
  date: number;
  name?: string;
  isToday?: boolean;
  isPlaceholder?: boolean;
  details?: T[];
}

const Date = <T extends GenericEvent>({
  isToday,
  isPlaceholder,
  date,
  name,
  details,
}: Props<T>): JSX.Element => (
  <article
    aria-label={name}
    className={`${
      isPlaceholder ? 'opacity-20' : ''
    } h-80 sm:h-28 w-full border-solid border border-gray-300 p-2 flex flex-col items-end`}
  >
    <h4
      className={`${
        isToday ? 'bg-indigo-200' : ''
      } text-center mb-1 text-sm w-6 leading-6 rounded-full`}
    >
      {date}
    </h4>
    <section className="flex flex-col sm:max-h-16 overflow-scroll leading-snug w-full text-sm">
      {details.map(({ text, color }) => {
        const classes = {
          blue: 'text-blue-700 bg-blue-200 border-blue-400 border-solid border-l-4 pl-1',
          green:
            'text-green-700 bg-green-300 border-green-500 border-solid border-l-4 pl-1',
          purple:
            'text-purple-700 bg-purple-200 border-purple-400 border-solid border-l-4 pl-1',
          red: 'text-red-700 bg-red-200 border-red-400 border-solid border-l-4 pl-1',
        };

        return (
          <p key={`${date}-${text}`} className={classes[color]}>
            {text}
          </p>
        );
      })}
    </section>
  </article>
);

Date.defaultProps = {
  isToday: false,
  details: [],
  name: 'date',
};

export default Date;
