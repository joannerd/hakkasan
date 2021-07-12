interface Props {
  onTodayClick: () => void;
  onPreviousClick?: () => void;
  onNextClick?: () => void;
}

const CalendarNavigation = ({
  onPreviousClick,
  onTodayClick,
  onNextClick,
}: Props): JSX.Element => (
  <section className="flex flex-row mb-4">
    <button
      type="button"
      onClick={onPreviousClick}
      disabled={!onPreviousClick}
      className={`${
        onPreviousClick
          ? ''
          : 'opacity-30 pointer-events-none focus:outline-none'
      } text-gray-500 border-solid border border-gray-300 px-1.5 py-0.5 rounded-tl-md rounded-bl-md text-xs`}
    >
      ◀
    </button>
    <button
      type="button"
      onClick={onTodayClick}
      className="text-gray-500 border-solid border border-gray-300 px-4 py-0.5 rounded-sm text-sm"
    >
      Today
    </button>
    <button
      type="button"
      onClick={onNextClick}
      disabled={!onNextClick}
      className={`${
        onNextClick ? '' : 'opacity-30 pointer-events-none focus:outline-none'
      } text-gray-500 border-solid border border-gray-300 px-1.5 py-0.5 rounded-tr-md rounded-br-md text-xs`}
    >
      ▶
    </button>
  </section>
);

CalendarNavigation.defaultProps = {
  onPreviousClick: undefined,
  onNextClick: undefined,
};

export default CalendarNavigation;
