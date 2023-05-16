import Image from "next/image";
import logo from "@/public/Group 3@2x.png";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FooterProducts from "./FooterProducts";
import FooterCompany from "./FooterCompany";
import FooterFollowUs from "./FooterFollowUs";
import FooterSupport from "./FooterSupport";
export default function Footer() {
  return (
    <footer css={footertopwrapper}>
      <section css={footersection}>
        <div css={footerlogocss}>
          <Image width="50" height="50" alt="Footer 로고" src={logo} />
        </div>
        <div css={footercontentwrapper}>
          <FooterProducts />
          <FooterSupport />
          <FooterCompany />
          <FooterFollowUs />
        </div>
      </section>
      <section css={copywrightwrapper}>
        <div>Copyright © 2020 Apple Inc. - All rights reserved.</div>
      </section>
    </footer>
  );
}
const footertopwrapper = css`
  width: 100%;
  background-color: #2b2835;
  height: 344px;
`;

const footerlogocss = css`
  margin-left: 225px;
  margin-top: 53px;
`;

const footersection = css`
  display: flex;
  justify-content: space-between;
`;

const footercontentwrapper = css`
  display: flex;
  margin-top: 53px;
  & > div:first-child {
    margin-left: 99px;
  }
  & > div:not(:first-child) {
    margin-left: 88px;
  }
  & div {
    padding-top: 3px;
  }
`;
const copywrightwrapper = css`
  display: flex;
  justify-content: center;
  color: #b8b8b8;
`;
