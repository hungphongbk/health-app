import React from "react";

const RecommendedArticles = () => {
  const articles = Array(8).fill({
    date: "2021.05.17",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"]
  }).map((article, index) => ({
    ...article,
    image: `/images/announcement/column-${index+1}.jpg`, // Placeholder for article image
  }));

  return (
    <div className=" p-6">
      <div className="grid grid-cols-4 gap-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="text-darkslategray-100 overflow-hidden font-hiragino-kaku-gothic-pro"
          >
            {/* Image Section */}
            <div className="relative aspect-[234/144]">
              <img
                src={article.image}
                alt="Article"
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gold text-black text-sm font-bold px-2 py-1">
                {article.date} {article.time}
              </div>
            </div>
            {/* Text Section */}
            <div className="py-2">
              <p className="text-sm mb-2">{article.title}</p>
              <div className="text-xs text-gold">
                {article.tags.map((tag, i) => (
                  <span key={i} className="mr-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedArticles;
