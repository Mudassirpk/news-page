import Article from "./Article";
import "./Articles.scss";
import RevivingRetro from "./../../assets/images/image-retro-pcs.jpg";
import LaptopListImg from "./../../assets/images/image-top-laptops.jpg";
import GammingImg from "./../../assets/images/image-gaming-growth.jpg";
type Props = {};
const Articles = (props: Props) => {
  return (
    <section className="articles">
      <Article
        image={RevivingRetro}
        title="Reviving Retro PCs"
        excerpt=" What happens when old PCs are given modern upgrades?"
        number={1}
      />
      <Article
        image={LaptopListImg}
        title="Top 10 Laptops of 2022"
        excerpt="Our best picks for vrious needs and budgets."
        number={2}
      />
      <Article
        image={GammingImg}
        title="The Growth of Gamming"
        excerpt="How the pandemic has sparked fresh opportunities."
        number={1}
      />
    </section>
  );
};

export default Articles;
