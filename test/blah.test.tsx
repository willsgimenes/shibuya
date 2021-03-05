import React from 'react';
import { Default as Thing } from '../stories/Thing.stories';

import { render } from '@testing-library/react';

describe('Thing', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Thing />);

    expect(
      getByText('the snozzberries taste like snozzberries')
    ).toBeInTheDocument();
  });
});
