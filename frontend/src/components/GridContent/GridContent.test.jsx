import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { GridContent } from '.';
import mock from './mock';

describe('<GridContenxt/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
