import type { GenericEvent } from 'lib/types';

export interface Props<T> {
  date: number;
  isToday?: boolean;
  details?: T[];
}

const Date = <T extends GenericEvent>({
  isToday,
  date,
  details,
}: Props<T>): JSX.Element => (
  <article className="h-28 w-32 border-solid border border-gray-300 p-2 flex flex-col items-end">
    <h4
      className={`${
        isToday ? 'bg-indigo-200' : ''
      } text-center mb-1 text-sm w-6 leading-6 rounded-full`}
    >
      {date}
    </h4>
    <section className="flex flex-col max-h-16 overflow-scroll leading-snug w-full text-sm">
      {details.map(({ text, color }) => {
        const [hue, shade] = color.split('-');
        const darkColor = `${hue}-${parseInt(shade, 10) + 100}`;
        const lightColor = `${hue}-${parseInt(shade, 10) - 100}`;
        return (
          <p
            key={text}
            className={`text-${darkColor} bg-${lightColor} border-${darkColor} border-solid border-l-4 pl-1`}
          >
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
};

export default Date;
