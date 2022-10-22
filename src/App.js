/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as CartIcon } from './icon-cart.svg';

const cardStyles = css`
  display: flex;
  position: absolute;
  width: 600px;
  height: 453px;
  left: 420px;
  top: 285px;
  background-color: #fff;
  border-radius: 20px;
`;

const imageStyles = css`
  width: 300px;
  height: 100%;
  border-radius: 20px 0px 0px 20px;
`;

const categoryStyles = css`
  font-weight: 500;
  text-transform: uppercase;
`;

const textWrapperStyles = css`
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;

  h1 {
    /* margin-right: 42px; */
    position: absolute;
    left: 54%;
    right: 7%;
  }

  div {
    position: absolute;
    left: 54%;
    right: 8.17%;
    top: 39.51%;
    bottom: 40.84%;
    line-height: 22px;
  }
`;

const priceStyles = css`
  color: #3c8067;
  position: absolute;
  right: 24.83%;
  top: 68.65%;
  bottom: 22.74%;
`;

const oldPriceStyles = css`
  position: absolute;
  left: 79.17%;
  right: 12.33%;
  top: 71.08%;
  bottom: 25.17%;
  text-decoration-line: line-through;
`;

const buttonStyles = css`
  position: absolute;
  left: 54%;
  right: 4%;
  top: 82.78%;
  bottom: 5.3%;
  background-color: #3c8067;
  color: #fff;
  font-family: 'Montserrat', Georgia, serif;
  font-weight: 700;
  border-width: 0px;
  border-radius: 8px;
`;

const iconStyles = css`
  margin-right: 8px;
`;

function App() {
  return (
    <div>
      <div css={cardStyles}>
        <div>
          <img css={imageStyles} src="/product.jpg" alt="bottle of parfum" />
        </div>
        <div css={textWrapperStyles}>
          <span css={categoryStyles}>perfume</span>
          <h1 className="otherFont">Gabrielle Essence Eau De Parfum</h1>
          <div>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>
          <span className="otherFont" css={priceStyles}>
            $149.99
          </span>
          <span css={oldPriceStyles}>$169.99</span>
          <br />
          <button css={buttonStyles}>
            {' '}
            <CartIcon css={iconStyles} /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
