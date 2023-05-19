/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CustomButton from "./../common/button/CustomButton";
import Image from "next/image";
import firstArticleImage from "@/public/studio3wireless.png";
export default function FirstArticle() {
  const onClickButton = () => {
    console.log("이동하기");
  };
  return (
    <div>
      <article css={firstarticletopwrapper}>
        <section css={leftsection}>
          <Image
            src={firstArticleImage}
            width={1078}
            height={766}
            alt="첫번째 이미지"
            css={firstimagewcss}
          />
        </section>
        <section css={rightsection}>
          <div>Beats Studio3 Wireless</div>
          <div>Experience your </div>
          <div>music like never before.</div>
          <div css={purchasewrapper}>
            <div>$299.95</div>
            <CustomButton
              text="Buynow"
              onClick={onClickButton}
              width={130}
              txtColor={"#000000"}
              bgc={"#FFC700"}
            />
          </div>
          <div css={lastcontentWrapper}>
            $60 Apple Music gift card with purchase of select Beats products.*
          </div>
        </section>
      </article>
    </div>
  );
}

const firstarticletopwrapper = css`
  display: flex;
  /* background-color: #2b2835; */
  /* height: 616px; */
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 0px 30px;
  }
`;

const leftsection = css`
  width: 60%;
  transform: translateX(-150px);
  @media (max-width: 1024px) {
    width: 100%;
    transform: translateX(-50px);
  }
`;

const firstimagewcss = css`
  @media (min-width: 1024px) {
    width: 100%;
    object-fit: contain;
    object-position: 0px 0px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    object-fit: contain;
    height: 300px;
  }
`;
const rightsection = css`
  width: 40%;
  margin-top: 15%;
  color: #ffffff;
  @media (max-width: 1024px) {
    width: 100%;
    color: #000000;
  }
  & > div:first-child {
    font-size: 16px;
  }
  & > div:nth-child(2) {
    font-size: 40px;
    font-weight: bold;
  }
  & > div:nth-child(3) {
    font-size: 40px;
    font-weight: bold;
  }
`;
const purchasewrapper = css`
  display: flex;
  margin-top: 20px;
  align-items: center;
  & > div:first-child {
    color: #f2f2f2;
    font-size: 40px;
    margin-right: 20px;
  }
  @media (max-width: 1024px) {
    & > div:first-child {
      color: #000000;
    }
  }
`;

const lastcontentWrapper = css`
  margin-top: 10px;
  color: #ffc700;
`;
