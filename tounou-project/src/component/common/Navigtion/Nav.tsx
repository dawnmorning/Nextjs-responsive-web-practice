/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import logo from "@/public/Group 3@2x.png";
import search from "@/public/search.png";
import profile from "@/public/profile.png";
import buy from "@/public/buy.png";
import hamburger from "@/public/Group.png";
import Image from "next/image";
import { useIsResponsive } from "@/component/hooks/useIsResponsive";
export default function Nav() {
  return (
    <>
      <nav css={topnavwrapper}>
        <section css={leftsection}>
          <div>
            <Image alt="로고" src={logo} width="50" height="50" css={logocss} />
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
        <Image
          src={hamburger}
          width={16}
          height={12}
          alt="모바일 탭"
          css={mobilecss}
        />
      </nav>
    </>
  );
}

const logocss = css`
  @media (max-width: 1024px) {
    width: 27px;
    height: 27px;
  }
`;

const topnavwrapper = css`
  box-sizing: border-box;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  background-color: #2b283588;
  height: 78px;
  width: 100%;
  padding: 0px 94px;
  z-index: 1;
  @media (max-width: 1024px) {
    padding: 0px 27px;
  }
`;

const leftsection = css`
  /* margin-left: 128px; */
`;

const midsection = css`
  display: flex;
  margin-left: 128px;
  justify-content: space-between;
  color: #ffffff;
  width: 100%;
  div {
    /* margin-right: 110px; */
    font-size: 15px;
    width: 100%;

    &:last-child {
      /* margin-right: 0; */
    }
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const rightsection = css`
  height: 100%;
  align-items: center;
  display: flex;
  div {
    margin-right: 46px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const mobilecss = css`
  @media (min-width: 1024px) {
    display: none;
  }
`;
