import ComponentBtn from "../components/ComponentBtn";
import RecommendCategories from '../components/RecommendCategories'
import RecommendArticles from '../components/RecommendArticles'

const Announcement = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <RecommendCategories/>
      <RecommendArticles/>
    </div>
  );
};

export default Announcement;
