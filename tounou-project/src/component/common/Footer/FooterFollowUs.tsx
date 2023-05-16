/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import snslogo from "@/public/Bitmap@3x.png";
import Image from "next/image";
export default function FooterFollowUs() {
  return (
    <div css={followuswrapper}>
      <div css={maintext}>Follow Us</div>
      <div css={subtext}>
        <Image src={snslogo} width="165" height="33" alt="Social Logo" />
      </div>
    </div>
  );
}

const followuswrapper = css`
  width: 262px;
  height: 239px;
  margin-right: 190px;
`;

const maintext = css`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

const subtext = css`
  margin-top: 15px;
`;
