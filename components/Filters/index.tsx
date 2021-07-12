/* istanbul ignore file */
import type { Filter } from 'lib/types';

interface Props {
  title: string;
  filters: Filter[];
}

const Filters = ({ title, filters }: Props): JSX.Element => (
  <section className="ml-2 mt-4">
    <h1 className="text-2xl font-bold text-gray-600">{title}</h1>
    <ul className="flex flex-col overflow-y-scroll max-h-96">
      {filters.map(({ id, name, color }) => (
        <li key={`${id}-${name}`} className="flex items-start">
          <div
            aria-hidden
            className={`bg-${color} rounded-full h-4 w-4 mr-2 mt-1`}
          />
          <span className={`text-${color} font-medium leading-snug`}>
            {name}
          </span>
        </li>
      ))}
    </ul>
  </section>
);

export default Filters;
