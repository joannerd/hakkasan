/* eslint-disable no-console */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalendarNavigation from 'components/Calendar/Navigation';

const mockOnClick = () => console.log('click');

test('displays previous, today, and next navigation buttons with proper text content', () => {
  render(
    <CalendarNavigation
      onPreviousClick={mockOnClick}
      onTodayClick={mockOnClick}
      onNextClick={mockOnClick}
    />
  );

  expect(screen.getByRole('button', { name: /◀/i })).toBeDefined();
  expect(screen.getByRole('button', { name: /Today/i })).toBeDefined();
  expect(screen.getByRole('button', { name: /▶/i })).toBeDefined();
});

test('displays a disabled button when there is no onPreviousClick callback', () => {
  render(
    <CalendarNavigation
      onPreviousClick={undefined}
      onTodayClick={mockOnClick}
      onNextClick={mockOnClick}
    />
  );

  expect(screen.getByRole('button', { name: /◀/i })).toBeDisabled();
});

test('displays a disabled button when there is no onNextClick callback', () => {
  render(
    <CalendarNavigation
      onPreviousClick={mockOnClick}
      onTodayClick={mockOnClick}
      onNextClick={undefined}
    />
  );

  expect(screen.getByRole('button', { name: /▶/i })).toBeDisabled();
});
