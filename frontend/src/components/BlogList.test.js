import { render, screen } from '@testing-library/react';
import BlogList from './BlogList';

test('renders blog list component', () => {
  render(<BlogList blogs={[]} />);
  expect(screen.getByText(/no blogs available/i)).toBeInTheDocument();
});
