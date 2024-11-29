import React from "react";

const RecommendedCategories = () => {
  const categories = [
    { title: "RECOMMENDED COLUMN", subtitle: "オススメ" },
    { title: "RECOMMENDED DIET", subtitle: "ダイエット" },
    { title: "RECOMMENDED BEAUTY", subtitle: "美容" },
    { title: "RECOMMENDED HEALTH", subtitle: "健康" },
  ];

  return (
    <div className=" p-6 font-inter">
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 text-center text-white p-4"
          >
            <h3 className="text-3xl font-light text-gold mb-2">{category.title}</h3>
            <hr className="w-10 border-t border-white mb-2" />
            <p className="text-sm font-hiragino-kaku-gothic-pro">{category.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCategories;
