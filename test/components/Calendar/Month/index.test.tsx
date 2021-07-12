import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalendarMonth from 'components/Calendar/Month';
import { LAS_VEGAS_EVENTS_2021 } from 'lib/constants';

test('displays calendar with default calendar dayLabels', () => {
  const year = 2021;
  const month = 7;
  const days = Object.values(LAS_VEGAS_EVENTS_2021[year][month]);

  render(
    <CalendarMonth
      year={year}
      month={month}
      today={`${year}-${month}-1`}
      days={days}
    />
  );

  const article = screen.getByRole('article', {
    name: /month/i,
  });

  const expectedDayLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  expectedDayLabels.forEach((label) => {
    expect(within(article).getByText(label)).toBeDefined();
  });
});

test('displays calendar without extra dates when the month is less than 31 days', () => {
  const year = 2021;
  const month = 2;
  const days = Object.values(LAS_VEGAS_EVENTS_2021[year][month]);

  render(
    <CalendarMonth
      year={year}
      month={month}
      today={`${year}-${month}-1`}
      days={days}
    />
  );

  expect(
    screen.queryByRole('article', { name: `${year}-${month}-30` })
  ).toBeNull();
  expect(
    screen.queryByRole('article', { name: `${year}-${month}-31` })
  ).toBeNull();
});
