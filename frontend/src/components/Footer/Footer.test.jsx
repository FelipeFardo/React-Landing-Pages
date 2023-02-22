import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { Footer } from '.';

describe('<Footer/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html="<h1>Olá mundão</h1>" />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
      }

      .c2 {
        font-size: 2.4rem;
      }

      .c1 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
      }

      <div>
        <div
          class="c0"
        >
          <div
            class="c1"
          >
            <div
              class="c2"
            >
              <h1>
                Olá mundão
              </h1>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
