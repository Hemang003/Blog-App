import { render, screen, fireEvent } from '@testing-library/react';
import BlogForm from './BlogForm';

test('submits blog form correctly', () => {
  const mockSubmit = jest.fn();
  render(<BlogForm onSubmit={mockSubmit} />);

  fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'New Blog' } });
  fireEvent.click(screen.getByText(/submit/i));

  expect(mockSubmit).toHaveBeenCalledWith({ title: 'New Blog', content: '' });
});