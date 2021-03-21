import * as React from 'react';
import { render } from '@testing-library/react';

import { DefaultTypography as Typography } from '../stories/Text.stories';

describe('Typography', () => {
  it('should render text elements without crashing', () => {
    const { getByRole } = render(<Typography />);
    expect(getByRole('heading', { name: 'Heading 1' })).toBeInTheDocument();

    expect(getByRole('heading', { name: 'Heading 2' })).toBeInTheDocument();
  });
});
