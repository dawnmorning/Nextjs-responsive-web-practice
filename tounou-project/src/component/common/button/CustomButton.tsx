/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
interface CustomButtonProps {
  text: string;
  onClick: () => void;
  width: number;
}

export default function CustomButton({
  text,
  onClick,
  width,
}: CustomButtonProps) {
  <button onClick={onClick} css={buttoncss}>
    {text}
  </button>;
}

const buttoncss = css`
  width: width;
`;
