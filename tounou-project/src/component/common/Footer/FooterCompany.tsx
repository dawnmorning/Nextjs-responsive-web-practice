/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export default function FooterCompany() {
  return (
    <div css={companywrapper}>
      <div css={maintext}>Company</div>
      <div css={subtext}>
        <div>PRODUCT HELP</div>
        <div>NEWS AND EVENTS</div>
        <div>PROMOTION TERMS</div>
        <div>PRIVACY POLICY</div>
        <div>TRADEMARK</div>
        <div>TERMS OF USE</div>
        <div>COOKIES</div>
      </div>
    </div>
  );
}
const companywrapper = css`
  width: 179px;
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
