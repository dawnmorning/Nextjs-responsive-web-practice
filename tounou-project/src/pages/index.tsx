import FinalArticle from "@/component/article/FinalArticle";
import FirstArticle from "@/component/article/FirstArticle";
import FirstBackGround from "@/component/article/FirstBackGround";
import SecondArticle from "@/component/article/SecondArticle";
import ThirdArticle from "@/component/article/ThirdArticle";
import Footer from "@/component/common/Footer/Footer";
import Nav from "@/component/common/Navigtion/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <FirstBackGround />
      <div style={{ position: "absolute", top: "0px", width: "100%" }}>
        <FirstArticle />
        <SecondArticle />
        <ThirdArticle />
        <FinalArticle />
        <Footer />
      </div>
    </>
  );
}
