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
  justify-content: space-between;
  align-items: center;
  background-color: #979797;
  height: 78px;
  width: 100%;
  padding: 0 94px;
`;

const leftsection = css`
  /* margin-left: 128px; */
`;

const midsection = css`
  display: flex;
  margin-left: 128px;
  justify-content: center;
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
  height: 100%;
  align-items: center;
  display: flex;
  div {
    margin-right: 46px;
  }
`;
