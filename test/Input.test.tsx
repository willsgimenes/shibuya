import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { DefaultInput } from '../stories/Input.stories';

describe('Input', () => {
  it('should render input without crashing', () => {
    const ref = {};
    const { getByPlaceholderText } = render(
      <DefaultInput label="song" innerRef={ref} placeholder="Insert text" />
    );

    const element = getByPlaceholderText('Insert text');
    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  });

  it('should change value', () => {
    const ref = {};
    const mockedChange = jest.fn();

    const { getByPlaceholderText } = render(
      <DefaultInput
        label="song"
        innerRef={ref}
        placeholder="Insert text"
        onChange={mockedChange}
        value=""
      />
    );

    const element = getByPlaceholderText('Insert text');

    fireEvent.focus(element);
    fireEvent.change(element, { target: { value: 'silent' } });
    fireEvent.blur(element);
    expect(screen.getByDisplayValue('silent')).toBeInTheDocument();
  });

  it('should have disabled state', () => {
    const ref = {};
    const { getByPlaceholderText } = render(
      <DefaultInput
        label="song"
        innerRef={ref}
        placeholder="Insert text"
        value=""
        disabled
      />
    );

    const element = getByPlaceholderText('Insert text');
    expect(element).toBeDisabled();
  });
});
