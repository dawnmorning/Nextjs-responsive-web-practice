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
  height: auto;
`;

const footerlogocss = css`
  margin-left: 225px;
  margin-top: 53px;
`;

const footersection = css`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const footercontentwrapper = css`
  display: flex;
  margin-top: 53px;
  @media (max-width: 1024px) {
    flex-direction: column;
    & > div {
      margin-bottom: 20px;
    }
  }
  & > div:first-child {
    margin-left: 99px;
    @media (max-width: 1024px) {
      margin-left: 20px;
    }
  }
  & > div:not(:first-child) {
    margin-left: 88px;
    @media (max-width: 1024px) {
      margin-left: 20px;
    }
  }
  & div {
    padding-top: 3px;
  }
`;
const copywrightwrapper = css`
  display: flex;
  justify-content: center;
  color: #b8b8b8;
  padding-bottom: 40px;
`;
