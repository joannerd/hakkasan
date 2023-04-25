/* istanbul ignore file */
import type { Filter } from 'lib/types';

interface Props {
  title: string;
  filters: Filter[];
}

const Filters = ({ title, filters }: Props): JSX.Element => {
  const bgClasses = {
    blue: 'bg-blue-300 rounded-full h-4 w-4 mr-2 mt-1',
    green: 'bg-green-300 rounded-full h-4 w-4 mr-2 mt-1',
    purple: 'bg-purple-300 rounded-full h-4 w-4 mr-2 mt-1',
    red: 'bg-red-300 rounded-full h-4 w-4 mr-2 mt-1',
    gray: 'bg-gray-300 rounded-full h-4 w-4 mr-2 mt-1',
  };

  const textClasses = {
    blue: 'text-blue-700 font-medium leading-snug w-28',
    green: 'text-green-700 font-medium leading-snug w-28',
    purple: 'text-purple-700 font-medium leading-snug w-28',
    red: 'text-red-700 font-medium leading-snug w-28',
    gray: 'text-gray-700 font-medium leading-snug w-28',
  };

  return (
    <section className="mb-8 mt-4 md:mb-0">
      <h1 className="text-2xl font-bold text-gray-600 mb-1">{title}</h1>
      <ul className="flex flex-col overflow-y-scroll md:max-h-96 max-h-40">
        {filters.map(({ id, name, color }) => (
          <li key={`${id}-${name}`} className="flex items-start">
            <div aria-hidden className={title === 'Artists' ? 'd-none' : bgClasses[color]}/>
            <span className={textClasses[color]}>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Filters;
