import { useOnKeydown } from 'hooks';
import { KEYNAMES } from 'lib/constants';

interface Props {
  onTodayClick: () => void;
  onPreviousClick?: () => void;
  onNextClick?: () => void;
}

const CalendarNavigation = ({
  onPreviousClick,
  onTodayClick,
  onNextClick,
}: Props): JSX.Element => {
  useOnKeydown({ keyname: KEYNAMES.ArrowLeft, onKeydown: onPreviousClick });
  useOnKeydown({ keyname: KEYNAMES.ArrowRight, onKeydown: onNextClick });

  return (
    <section className="flex flex-row mb-1 sm:mb-4">
      <button
        type="button"
        onClick={onPreviousClick}
        disabled={!onPreviousClick}
        className={`${
          onPreviousClick
            ? ''
            : 'opacity-30 pointer-events-none focus:outline-none'
        } text-gray-500 border-solid border border-gray-300 sm:px-1.5 sm:py-0.5 p-2 rounded-tl-md rounded-bl-md text-xs`}
      >
        <span className="hidden sm:block">◀</span>
        <span className="sm:hidden block">Previous month</span>
      </button>
      <button
        type="button"
        onClick={onTodayClick}
        className="hidden sm:block text-gray-500 border-solid border border-gray-300 px-4 py-0.5 rounded-sm text-sm"
      >
        Today
      </button>
      <button
        type="button"
        onClick={onNextClick}
        disabled={!onNextClick}
        className={`${
          onNextClick ? '' : 'opacity-30 pointer-events-none focus:outline-none'
        } text-gray-500 border-solid border border-gray-300 sm:px-1.5 sm:py-0.5 p-2 rounded-tr-md rounded-br-md text-xs`}
      >
        <span className="hidden sm:block">▶</span>
        <span className="sm:hidden block">Next month</span>
      </button>
    </section>
  );
};

CalendarNavigation.defaultProps = {
  onPreviousClick: undefined,
  onNextClick: undefined,
};

export default CalendarNavigation;
