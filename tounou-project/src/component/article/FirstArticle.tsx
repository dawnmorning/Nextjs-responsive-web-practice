/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function FirstArticle() {
  return (
    <article>
      <section css={leftsection}></section>
      <section css={rightsection}>
        <div>Beats Studio3 Wireless</div>
        <div>Experience your </div>
        <div>music like never before.</div>
        <div css={purchasewrapper}>
          <div>$299.95</div>
          <button>Buy now</button>
        </div>
        <div>
          $60 Apple Music gift card with purchase of select Beats products.*
        </div>
      </section>
    </article>
  );
}

const leftsection = css`
  width: 50%;
`;
const rightsection = css`
  width: 50%;
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
  & > div:first-child {
    font-size: 40px;
  }
`;
