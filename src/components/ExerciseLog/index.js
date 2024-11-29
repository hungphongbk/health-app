import React from "react";
import styles from "./ExerciseLog.module.css";

const ExerciseLog = () => {
  const exerciseData = Array(20).fill({
    activity: "家事全般（立位・軽い）",
    calories: "26kcal",
    duration: "10 min",
  });

  return (
    <div className="bg-darkslategray-100 text-white p-6 font-hiragino mt-16">
      <div className="flex justify-start items-center mb-4 gap-2">
        <h2 className="text-lg font-inter font-light">MY<br /> EXERCISE</h2>
        <h2 className="text-lg font-inter font-normal">2021.05.21</h2>
      </div>
      <div className={`grid grid-cols-2 gap-x-8 max-h-[20rem] overflow-auto pr-8 ${styles.scrollbar}`}>
        {exerciseData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b-2 border-gray-100 border-solid"
          >
            <div>
              <p className={'font-hiragino-kaku-gothic-pro block mb-1'}>{item.activity}</p>
              <p className="text-gold font-inter block mt-1">{item.calories}</p>
            </div>
            <p className="text-gold font-inter">{item.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseLog;
