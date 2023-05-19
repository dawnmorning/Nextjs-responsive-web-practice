/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CustomButton from "../common/button/CustomButton";
import Image from "next/image";
import secondImage from "@/public/pill.png";
export default function SecondArticle() {
  const onClickButton = () => {
    console.log("버튼 클릭");
  };
  return (
    <>
      <article css={topwrapper}>
        <section css={leftsection}>
          <div>Portable Wireless Speaker</div>
          <div>Beats Pill</div>
          <div>Available Colors</div>
          <div>Find your Color</div>
          <div css={colorpalatte}>
            <div>색</div>
            <div>세</div>
            <div>개</div>
          </div>
          <div css={purchasewrapper}>
            <div>$299.95</div>
            <CustomButton
              text="BUY NOW"
              onClick={onClickButton}
              width={"130px"}
              txtColor={"#FFFFFF"}
              bgc={"#000000"}
            />
          </div>
          <div css={lastcontentWrapper}>
            $60 Apple Music gift card with purchase of select Beats products.*
          </div>
        </section>
        <section css={rightsection}>
          <Image
            src={secondImage}
            alt="두번쨰 이미지"
            width={755}
            height={430}
            css={secondimage}
          />
        </section>
      </article>
    </>
  );
}

const topwrapper = css`
  display: flex;
  background-color: #ffffff;
  height: 500px;
  margin-top: 200px;
  padding: 0 93px;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    height: 717px;
    padding: 0 20px;
  }
`;

const leftsection = css`
  width: 35%;
  @media (max-width: 1024px) {
    width: 100%;
  }
  & > div:first-child {
    color: #2b2835;
    font-size: 16px;
  }
  & > div:nth-child(2) {
    font-size: 50px;
    font-weight: bold;
  }
  & > div:nth-child(3) {
    font-size: 40px;
    font-weight: 400;
  }
  & > div:nth-child(4) {
    font-size: 16px;
    color: #2b2835;
  }
`;

const colorpalatte = css`
  display: flex;
  & > div {
    margin-right: 14px;
  }
`;

const purchasewrapper = css`
  display: flex;
  margin-top: 20px;
  /* justify-content: center; */
  align-items: center;
  & > div:first-child {
    font-size: 40px;
    margin-right: 20px;
  }
`;

const lastcontentWrapper = css`
  margin-top: 10px;
  color: #00000080;
`;

const rightsection = css`
  width: 65%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const secondimage = css`
  width: 100%;
  @media (max-width: 1024px) {
    width: 100%;
    height: 348px;
  }
  object-fit: contain;
`;
