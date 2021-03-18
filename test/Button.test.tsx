import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { SCButton as Button } from '../stories/Button.stories';

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

    expect(buttonElement.classList.contains('text-white')).toBe(true);
    expect(buttonElement.classList.contains('text-red-700')).toBe(false);

    rerender(<Button text="test" variant="warning" />);

    expect(buttonElement.classList.contains('text-white')).toBe(false);
    expect(buttonElement.classList.contains('text-red-700')).toBe(true);
  });
});
