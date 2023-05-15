/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import logo from "@/public/Group 3@2x.png";
import search from "@/public/search.png";
import profile from "@/public/profile.png";
import buy from "@/public/buy.png";
export default function Nav() {
  return (
    <>
      <nav css={topnavwrapper}>
        <section css={leftsection}>
          <div>
            <Image alt="로고" src={logo} width="50" height="50" />
          </div>
        </section>
        <section css={midsection}>
          <div>HEADPHONES</div>
          <div>EARPHONES</div>
          <div>SPEAKERS</div>
          <div>EXPLORE</div>
        </section>
        <section css={rightsection}>
          <div>
            <Image
              alt="네비게이션바 검색"
              width="25"
              height="25"
              src={search}
            />
          </div>
          <div>
            <Image
              alt="네비게이션바 검색"
              width="27"
              height="27"
              src={profile}
            />
          </div>
          <div>
            <Image alt="네비게이션바 검색" width="27" height="25" src={buy} />
          </div>
        </section>
      </nav>
    </>
  );
}

const topnavwrapper = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: #2b2835;
  height: 78px;
  width: 100%;
`;

const leftsection = css`
  margin-left: 128px;
`;

const midsection = css`
  display: flex;
  margin-left: 128px;
  margin-right: 135px;
  color: #ffffff;
  div {
    margin-right: 110px;
    font-size: 15px;
    width: 100%;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const rightsection = css`
  /* width: 100%; */
  height: 100%;
  align-items: center;
  margin-left: 135px;
  margin-right: 95px;
  display: flex;
  div {
    margin-right: 46px;
    & :last-child {
      /* margin-right: 95px; */
    }
  }
`;
