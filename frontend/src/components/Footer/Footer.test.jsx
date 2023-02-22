import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { Footer } from '.';

describe('<Footer/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html="<h1>Olá mundão</h1>" />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c4 {
        font-size: 2.4rem;
      }

      .c2 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
      }

      .c0 {
        text-align: center;
        border-top: 0.1rem solid #DDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 .c3 {
        font-size: 1.6rem;
      }

      .c0 .c1 {
        padding-top: 0;
        padding-bottom: 0;
      }

      <div>
        <div
          class="c0"
        >
          <div
            class="c1 c2"
          >
            <div
              class="c3 c4"
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
