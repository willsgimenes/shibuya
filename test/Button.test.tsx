import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { PrimaryButton as Button } from '../stories/Button.stories';

describe('Button', () => {
  it('should render the button without crashing', () => {
    const { getByRole } = render(<Button text="test" />);
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should call the onClick method when a user clicks on the button', () => {
    const mockedClick = jest.fn();

    const { getByRole } = render(<Button text="test" onClick={mockedClick} />);

    const buttonElement = getByRole('button');

    fireEvent.click(buttonElement);
    expect(mockedClick).toHaveBeenCalledTimes(1);
  });

  it('should have right text color based on variant', () => {
    const { getByRole, rerender } = render(<Button text="test" />);

    const buttonElement = getByRole('button', { name: 'test' });

    expect(buttonElement.classList.contains('bg-purple-800')).toBe(true);
    expect(buttonElement.classList.contains('bg-red-800')).toBe(false);

    rerender(<Button text="test" variant="secondary" />);

    expect(buttonElement.classList.contains('bg-purple-800')).toBe(false);
    expect(buttonElement.classList.contains('bg-red-800')).toBe(true);
  });

  it('should have correct disabled style', () => {
    const { getByRole } = render(<Button text="Button Disabled" disabled />);

    const buttonElement = getByRole('button', { name: 'Button Disabled' });

    expect(buttonElement).toBeDisabled();
  });
});
