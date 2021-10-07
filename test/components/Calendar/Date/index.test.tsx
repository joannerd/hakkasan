import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalendarDate from 'components/Calendar/Date';

test('displays information for dates that are not the current date without placeholder styling', () => {
  render(
    <CalendarDate isToday={false} isPlaceholder={false} date={1} details={[]} />
  );

  expect(screen.getByRole('heading')).toHaveTextContent('1');
  expect(
    screen
      .getByRole('article', { name: /date/i })
      .classList.contains('opacity-20')
  ).toBe(false);
});

test('displays information for dates that are the current date without placeholder styling', () => {
  render(<CalendarDate isToday isPlaceholder={false} date={1} details={[]} />);

  expect(screen.getByRole('heading')).toHaveTextContent('1');
  expect(
    screen
      .getByRole('article', { name: /date/i })
      .classList.contains('opacity-20')
  ).toBe(false);
});

test('displays information for dates that are not the current date with placeholder styling', () => {
  render(<CalendarDate isToday={false} isPlaceholder date={1} details={[]} />);

  expect(screen.getByRole('heading')).toHaveTextContent('1');
  expect(
    screen
      .getByRole('article', { name: /date/i })
      .classList.contains('opacity-20')
  ).toBe(true);
});

test('displays information for dates that are the current date with placeholder styling', () => {
  render(<CalendarDate isToday isPlaceholder date={1} details={[]} />);

  expect(screen.getByRole('heading')).toHaveTextContent('1');
  expect(
    screen
      .getByRole('article', { name: /date/i })
      .classList.contains('opacity-20')
  ).toBe(true);
});
