import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import CalendarDate from 'components/Calendar/Date';
import { getMonthPlaceholderDates } from 'lib/format';
import type { GenericEvent } from 'lib/types';

export interface Props<T> {
  year: number;
  month: number;
  today: string;
  days?: T[][];
  dayLabels?: string[];
  onTodayClick?: () => void;
}

const MonthMobile = <T extends GenericEvent>({
  year,
  month,
  today,
  days,
  dayLabels,
  onTodayClick,
}: Props<T>): JSX.Element | null => {
  const { lastDate } = getMonthPlaceholderDates({ year, month });
  const currentDateSlide = parseInt(today.split('-')[2], 10) - 1;

  return (
    <article className="w-80 sm:hidden flex">
      <CarouselProvider
        naturalSlideWidth={128}
        naturalSlideHeight={320}
        isIntrinsicHeight
        step={1}
        dragStep={1}
        visibleSlides={3}
        totalSlides={days.length}
        touchEnabled
        dragEnabled
        className="overflow-hidden"
      >
        <section className="mb-4 w-full flex justify-end">
          <ButtonBack className="text-gray-500 border-solid border border-gray-300 sm:px-1.5 sm:py-0.5 p-2 rounded-tl-md rounded-bl-md text-xs">
            ◀
          </ButtonBack>
          <Dot
            onClick={onTodayClick}
            slide={currentDateSlide}
            className="text-gray-500 border-solid border border-gray-300 px-4 rounded-sm text-sm"
            disabled={false}
          >
            Today
          </Dot>
          <ButtonNext className="text-gray-500 border-solid border border-gray-300 sm:px-1.5 sm:py-0.5 p-2 rounded-tr-md rounded-br-md text-xs">
            ▶
          </ButtonNext>
        </section>
        <Slider>
          {days.map((details, i) => {
            const date = i + 1;
            return date <= lastDate ? (
              <Slide index={i} key={date}>
                <span className="text-right font-bold pr-2">
                  {dayLabels[new Date(year, month - 1, date).getDay()]}
                </span>
                <CalendarDate<T>
                  name={`${year}-${month}-${date}`}
                  key={date}
                  date={date}
                  details={details.length ? details : []}
                  isToday={today === `${year}-${month}-${date}`}
                />
              </Slide>
            ) : null;
          })}
        </Slider>
      </CarouselProvider>
    </article>
  );
};

MonthMobile.defaultProps = {
  days: [],
  dayLabels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
};

export default MonthMobile;
