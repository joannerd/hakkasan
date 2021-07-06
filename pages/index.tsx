import { useEffect, useState } from 'react';
import { useFetch } from 'hooks';
import Layout from 'components/Layout';
import Filters from 'components/Filters';
import CalendarMonth from 'components/Calendar/Month';
import CalendarNavigation from 'components/Calendar/Navigation';
import { formatHakkasanDataIntoCalendar } from 'lib/format';
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
    return <>Loading...</>;
  }

  const { events, venues, artists } = formatHakkasanDataIntoCalendar(data);

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
        <CalendarNavigation
          onPreviousClick={
            isPreviousMonthValid() ? renderPreviousMonth : undefined
          }
          onTodayClick={renderCurrentMonth}
          onNextClick={isNextMonthValid() ? renderNextMonth : undefined}
        />
        <CalendarMonth<GenericEvent>
          key={`${year}-${month}`}
          year={year}
          month={month}
          today={`${currentYear}-${currentMonth}-${currentDate}`}
          days={Object.values(events[year][month])}
        />
      </section>
      <div className="flex flex-col mt-10">
        <Filters title="Venues" filters={venues} />
        <Filters title="Artists" filters={artists} />
      </div>
    </Layout>
  );
};

export default Home;
