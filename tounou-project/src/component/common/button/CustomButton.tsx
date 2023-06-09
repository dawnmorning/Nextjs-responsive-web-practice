/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactElement } from "react";

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  width: number | string;
  txtColor: string;
  bgc: string;
}

const buttoncss = (
  width: number | string,
  txtColor: string,
  bgc: string
) => css`
  width: ${width};
  color: ${txtColor};
  background-color: ${bgc};
  text-align: center;
  border-radius: 100px;
  border: none;
  height: 41px;
`;

const CustomButton = ({
  text,
  onClick,
  width,
  txtColor,
  bgc,
}: CustomButtonProps): ReactElement => {
  return (
    <button css={buttoncss(width, txtColor, bgc)} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
