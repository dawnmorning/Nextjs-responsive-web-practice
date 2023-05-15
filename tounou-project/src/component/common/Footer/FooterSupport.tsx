/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export default function FooterSupport() {
  return (
    <div css={supportwrapper}>
      <div css={maintext}>Support</div>
      <div css={subtext}>
        <div>PRODUCT HELP</div>
        <div>SERVICE & WARRANTY</div>
        <div>REGISTER YOUR BEATS</div>
        <div>UPDATE YOUR BEATS</div>
        <div>AUTHORIZED SERVICE PROVIDERS</div>
        <div>CONTACT SUPPORT OFFERS</div>
        <div>INTERNATIONAL NUMBERS </div>
      </div>
    </div>
  );
}

const supportwrapper = css`
  width: 229px;
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
