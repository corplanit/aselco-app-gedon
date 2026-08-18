import { render } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

test('renders without passing computedMatch to fragments', () => {
  const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);

  render(<App />);

  const warning = errorSpy.mock.calls.some(
    ([message]) => typeof message === 'string' && message.includes('Invalid prop `computedMatch` supplied to `React.Fragment`'),
  );

  expect(warning).toBe(false);
  errorSpy.mockRestore();
});
