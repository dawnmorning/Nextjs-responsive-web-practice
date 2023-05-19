/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CustomButton from "../common/button/CustomButton";

import fixture from "./fixture.json";

export default function ThirdArticle() {
  const onClickButton = () => {
    console.log("구매버튼");
  };
  return (
    <div css={topwrapper}>
      {fixture.map((item, index) => (
        <div key={index} css={articlecss}>
          <img src={item.image} alt={item.title} css={imgcss} />
          <div>{item.title}</div>
          <div>{item.content}</div>
          <div>
            <div>{item.price}</div>
            <CustomButton
              text={"BUY NOW"}
              bgc={"#000000"}
              txtColor={"#FFFFFF"}
              onClick={onClickButton}
              width={"145px"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
const topwrapper = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 37px;
  row-gap: 34px;
  padding: 0 93px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    column-gap: 0px;
  }
`;

const imgcss = css`
  max-width: 240px;
`;

const articlecss = css`
  background-color: #f8f8f9;
  padding: 0 50px 40px;
  & > img {
    display: block;
    margin: 0 auto;
  }
  & > div:nth-of-type(1) {
    font-size: 40px;
    font-weight: 500;
  }
  & > div:nth-of-type(2) {
    font-size: 14px;
    font-weight: 400;
  }
  & > div:nth-of-type(3) {
    display: flex;
    margin-top: 16px;
    align-items: center;
    /* justify-content: space-between; */
    & > div:nth-of-type(1) {
      font-size: 25px;
      color: #9d8220;
      margin-right: 15px;
    }
    & > button {
      font-size: 14px;
    }
  }
`;
