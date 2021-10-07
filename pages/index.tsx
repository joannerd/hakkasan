import { useEffect, useState } from 'react';
import { useFetch } from 'hooks';
import Layout from 'components/Layout';
import Loading from 'components/Loading';
import Filters from 'components/Filters';
import CalendarMonthDesktop from 'components/Calendar/Month/Desktop';
import CalendarMonthMobile from 'components/Calendar/Month/Mobile';
import CalendarNavigation from 'components/Calendar/Navigation';
import { formatHakkasanDataIntoCalendar } from 'lib/format';
import { MONTHS, LAS_VEGAS } from 'lib/constants';
import type { GenericEvent, HakkasanResponse } from 'lib/types';

const Home = (): JSX.Element => {
  const current = new Date();
  const currentDate = current.getDate();
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth() + 1;
  const [year, setYear] = useState<number>(currentYear);
  const [month, setMonth] = useState<number>(currentMonth);

  const { data, isLoading, fetchData } = useFetch<HakkasanResponse>(
    '/api/hakkasan?ref=events&ref=artists'
  );

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading || !data.events || !data.artists) {
    return <Loading />;
  }

  const { events, venues, artists } = formatHakkasanDataIntoCalendar({
    data,
    city: LAS_VEGAS,
  });

  const isPreviousMonthValid = (): boolean => {
    let previousYear = year;
    let previousMonth = month - 1;
    if (month === 1) {
      previousYear = year - 1;
      previousMonth = 12;
    }

    if (!events[previousYear] || !events[previousYear][previousMonth]) {
      return false;
    }

    const numberOfEvents = Object.values(
      events[previousYear][previousMonth]
    ).reduce((acc, currentVal) => acc + currentVal.length, 0);

    return numberOfEvents !== 0;
  };

  const isNextMonthValid = (): boolean => {
    let nextYear = year;
    let nextMonth = month + 1;
    if (month === 12) {
      nextYear = year + 1;
      nextMonth = 1;
    }

    if (!events[nextYear] || !events[nextYear][nextMonth]) {
      return false;
    }

    const numberOfEvents = Object.values(events[nextYear][nextMonth]).reduce(
      (acc, currentVal) => acc + currentVal.length,
      0
    );

    return numberOfEvents !== 0;
  };

  const renderPreviousMonth = () => {
    if (month === 1) {
      setYear((yearState) => yearState - 1);
      setMonth(12);
      return;
    }

    setMonth((monthState) => monthState - 1);
  };

  const renderCurrentMonth = () => {
    setYear(currentYear);
    setMonth(currentMonth);
  };

  const renderNextMonth = () => {
    if (month === 12) {
      setYear((yearState) => yearState + 1);
      setMonth(1);
      return;
    }

    setMonth((monthState) => monthState + 1);
  };

  return (
    <Layout>
      <section className="flex flex-col justify-center">
        <section className="flex justify-between">
          <h1 className="text-2xl font-bold">{MONTHS[month]}</h1>
          <CalendarNavigation
            onPreviousClick={
              isPreviousMonthValid() ? renderPreviousMonth : undefined
            }
            onTodayClick={renderCurrentMonth}
            onNextClick={isNextMonthValid() ? renderNextMonth : undefined}
          />
        </section>
        <CalendarMonthDesktop<GenericEvent>
          key={`${year}-${month}-desktop`}
          year={year}
          month={month}
          today={`${currentYear}-${currentMonth}-${currentDate}`}
          days={Object.values(events[year][month])}
        />
        <CalendarMonthMobile<GenericEvent>
          key={`${year}-${month}-mobile`}
          year={year}
          month={month}
          today={`${currentYear}-${currentMonth}-${currentDate}`}
          days={Object.values(events[year][month])}
          onTodayClick={renderCurrentMonth}
        />
      </section>
      <div className="md:flex-col md:justify-center flex flex-row mt-4 md:mt-12 md:ml-6 lg:ml-8">
        <Filters title="Venues" filters={venues} />
        <Filters title="Artists" filters={artists} />
      </div>
    </Layout>
  );
};

export default Home;
