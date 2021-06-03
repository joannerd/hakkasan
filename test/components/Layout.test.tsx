/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Layout from 'components/Layout';

describe('Layout component', () => {
  test('should render children', async () => {
    const testChildren = 'Test children';
    render(<Layout>{testChildren}</Layout>);
    expect(screen.getByText(testChildren)).toBeInTheDocument();
  });
});
