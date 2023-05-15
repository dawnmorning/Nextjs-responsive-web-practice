/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export default function FooterProducts() {
  return (
    <div css={productswrapper}>
      <div css={maintext}>Products</div>
      <div css={subtext}>
        <div>HEADPHONES</div>
        <div>EARPHONES</div>
        <div>SPEAKERS</div>
        <div>ACCESSORIES</div>
        <div>COLLABORATIONS</div>
        <div>SPECIAL OFFERS</div>
        <div>Products</div>
      </div>
    </div>
  );
}
const productswrapper = css`
  width: 150px;
  height: 239px;
`;

const maintext = css`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

const subtext = css`
  font-size: 12px;
  color: #b8b8b8;
`;
