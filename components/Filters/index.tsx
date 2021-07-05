import type { Filter } from 'lib/types';

interface Props {
  title: string;
  filters: Filter[];
}

const Filters = ({ title, filters }: Props): JSX.Element => (
  <div className="flex flex-col ml-2 mt-4 overflow-y-scroll max-h-96">
    <h1 className="text-2xl font-bold text-gray-600">{title}</h1>
    {filters.map(({ name, color }) => (
      <div key={name} className="flex items-start">
        <div
          aria-hidden
          className={`bg-${color} rounded-full h-4 w-4 mr-2 mt-1`}
        />
        <span className={`text-${color} w-34 font-medium leading-snug`}>
          {name}
        </span>
      </div>
    ))}
  </div>
);

export default Filters;
