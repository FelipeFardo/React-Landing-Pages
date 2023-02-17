import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { GridTwoColumns } from '.';

import mock from './mock';

describe('<GridTwoColumn/>', () => {
  it('should render two columns grid', () => {
    const { container } = renderTheme(
      <GridTwoColumns {...mock}>Children</GridTwoColumns>,
    );
    expect(container).toMatchSnapshot();
  });
});
