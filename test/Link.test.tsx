import * as React from 'react';
import { render } from '@testing-library/react';

import { Link } from '../stories/Link.stories';

describe('Link', () => {
  it('should render link without crashin', () => {
    const { getByRole } = render(
      <Link external url="https://google.com">
        Google
      </Link>
    );

    const linkElement = getByRole('link', { name: 'Google' });

    expect(linkElement).toHaveAttribute('href', 'https://google.com');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toMatchSnapshot();
  });

  it('should render inverted link correct', () => {
    const { getByRole } = render(
      <Link external url="https://google.com" inverted>
        Google
      </Link>
    );

    const linkElement = getByRole('link', { name: 'Google' });

    expect(linkElement).toHaveAttribute('href', 'https://google.com');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.classList.contains('text-white')).toBe(true);
    expect(linkElement).toMatchSnapshot();
  });
});
