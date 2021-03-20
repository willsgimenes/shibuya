import * as React from 'react';
import { render } from '@testing-library/react';
import { DefaultCard } from '../stories/Card.stories';

describe('Card', () => {
  it('Should render the card without crashing', () => {
    const { getByText } = render(
      <DefaultCard>
        <div>渋谷区</div>
      </DefaultCard>
    );

    expect(getByText('渋谷区')).toBeInTheDocument();
    expect(
      <DefaultCard>
        <div>渋谷区</div>
      </DefaultCard>
    ).toMatchSnapshot();
  });
});
