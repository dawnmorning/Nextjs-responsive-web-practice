/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function FirstBackGround() {
  return <div css={firstbackground}></div>;
}

const firstbackground = css`
  width: 100%;
  height: 616px;
  background-color: #2b2835;
  @media (max-width: 1024px) {
    height: 208px;
  }
`;
