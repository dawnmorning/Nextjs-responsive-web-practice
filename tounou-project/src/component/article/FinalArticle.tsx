import CustomButton from "../common/button/CustomButton";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export default function FinalArticle() {
  const onclickbutton = () => {
    console.log("버튼 클릭");
  };
  return (
    <article css={topwrapper}>
      <div css={secondwrapper}>
        <div css={thirdwrapper}>
          <div>Hear it first</div>
          <div>
            Get updates on product drops, collaborations and all things Beats.
          </div>
          <input type="text" placeholder="Enter your email" />
          <CustomButton
            text="SIGN UP"
            width={"100%"}
            bgc={"#ffc700"}
            txtColor={"#000000"}
            onClick={onclickbutton}
          />
        </div>
      </div>
    </article>
  );
}

const topwrapper = css`
  padding: 35px 93px 63px;
  @media (max-width: 1024px) {
    padding: 0 20px;
    margin-top: 16px;
  }
`;

const secondwrapper = css`
  background-color: #f8f8f9;
  padding: 51px 0px;
  @media (max-width: 1024px) {
    padding: 37px 21px 66px;
  }
`;

const thirdwrapper = css`
  max-width: 507px;
  margin: 0 auto;
  & > div:nth-of-type(1) {
    text-align: center;
    font-size: 50px;
    color: #2b2835;
    font-weight: bold;
  }
  & > div:nth-of-type(2) {
    margin-top: 17px;
    font-size: 14px;
  }
  & > input {
    width: 100%;
    display: block;
    border-radius: 18px;
    height: 36px;
    margin: 47px 0 19px;
    border: 1px solid #bfbfbf;
    padding: 0 20px;
  }
`;
