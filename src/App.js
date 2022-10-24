/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as CartIcon } from './icon-cart.svg';

const cardStyles = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 327px;
  height: 603px;
  left: 24px;
  top: 32px;
  background-color: #fff;
  border-radius: 20px;

  @media (min-width: 27.5em) {
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 600px;
    height: 453px;
    left: 420px;
    top: 285px;
  }
`;

const imageStyles = css`
  position: absolute;
  width: 327px;
  height: 272px;
  border-radius: 10px 10px 0px 0px;
  background: url(/product-mobile.png);
  background-size: cover;

  @media (min-width: 27.5em) {
    border-radius: 20px 0px 0px 20px;
    background: url(/product.png);
    background-size: cover;
    position: absolute;
    width: 300px;
    height: 453px;
    left: 0%;
    right: 50%;
    top: 0%;
    bottom: 0%;
  }
`;

const categoryStyles = css`
  font-weight: 500;
  text-transform: uppercase;
  position: absolute;
  width: 73px;
  height: 17px;
  left: 24px;
  top: 285px;

  @media (min-width: 27.5em) {
    position: absolute;
    left: 54%;
    right: 33.83%;
    top: 5.3%;
    bottom: 90.95%;
  }
`;

const textWrapperStyles = css`
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 42px;

  @media (min-width: 27.5em) {
    /* width: 300px;
    height: 100%;
    margin-right: 42px;
    margin-left: 24px; */
    margin-right: 42px;
  }

  h1 {
    margin-right: 42px;
    position: absolute;
    width: 295px;
    height: 48px;
    top: 296px;

    @media (min-width: 27.5em) {
      position: absolute;
      left: 54%;
      right: 7%;
      top: 10.01%;
      bottom: 65.56%;
      width: 234px;
      height: 88px;
    }
  }

  div {
    position: absolute;
    width: 295px;
    height: 89px;
    left: 24px;
    top: 385px;
    line-height: 22px;

    @media (min-width: 27.5em) {
      position: absolute;
      left: 54%;
      right: 8.17%;
      top: 39.51%;
      bottom: 40.84%;
      width: 227px;
      height: 88px;
    }
  }
`;

const priceStyles = css`
  position: absolute;
  width: 96px;
  height: 30px;
  left: 24px;
  top: 490px;
  color: #3c8067;

  @media (min-width: 27.5em) {
    position: absolute;
    left: 54%;
    right: 24.83%;
    top: 68.65%;
    bottom: 22.74%;
  }
`;

const oldPriceStyles = css`
  text-decoration-line: line-through;
  position: absolute;
  width: 51px;
  height: 17px;
  left: 165px;
  top: 495px;

  @media (min-width: 27.5em) {
    position: absolute;
    left: 79.17%;
    right: 12.33%;
    top: 71.08%;
    bottom: 25.17%;
  }
`;

const buttonStyles = css`
  background-color: #3c8067;
  color: #fff;
  font-family: 'Montserrat', Georgia, serif;
  font-weight: 700;
  border-width: 0px;
  border-radius: 8px;
  position: absolute;
  width: 279px;
  height: 56px;
  left: 24px;
  top: 528px;

  :hover {
    background-color: #316451;
  }

  @media (min-width: 27.5em) {
    position: absolute;
    left: 54%;
    right: 4%;
    top: 82.78%;
    bottom: 5.3%;
    width: 252px;
    height: 54px;
  }
`;

const iconStyles = css`
  margin-right: 8px;
`;

function App() {
  return (
    <div>
      <div css={cardStyles}>
        <div css={imageStyles} />
        {/* <img
            css={imageStyles}
            src="/product-mobile.jpg"
            alt="bottle of parfum"
          /> */}
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
