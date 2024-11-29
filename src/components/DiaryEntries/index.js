import React from "react";

const DiaryEntries = () => {
  const entries = Array(8).fill({
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  });

  return (
    <div className="text-white pt-6 pb-10 font-inter">
      <div className="grid grid-cols-4 gap-4">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 border-2 border-dimgray border-solid aspect-square"
          >
            <p className="text-lg font-bold">{entry.date}</p>
            <p className="text-sm text-gray-500 mb-2">{entry.time}</p>
            <p className="text-sm whitespace-pre-line font-hiragino-kaku-gothic-pro line-clamp-6">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiaryEntries;
