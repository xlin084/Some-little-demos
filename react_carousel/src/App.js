import "./App.css";
import React, { useState, useEffect } from "react";

const image = [
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

/**
 * 提供基于时间间隔重复调用callback的hooks
 * @param {*} callback
 * @param {*} interval
 */
const useInterval = (callback, interval) => {
  useEffect(() => {
    const start = new Date().getTime();
    const i = setInterval(() => {
      callback(new Date().getTime() - start);
    }, interval);
    return () => clearInterval(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

/**
 * 实现slider的核心逻辑
 * @param {*} interval
 */
function useSlider(N, speed = 2000) {
  const [slider, setSlider] = useState(0);

  useInterval((diff) => {
    setSlider((_) => Math.floor((diff / speed) % N));
  }, 300);

  return slider;
}

const App = () => {
  const slider = useSlider(image.length);
  return (
    <div className="scroller">
      <div
        className="inner"
        style={{
          width: `${image.length * 100}%`, // css不知道会有多少张图片，所以要动态计算
          transform: `translateX(-${(100 * slider) / image.length}%)`, // 根据当前的slider计算出当前的位置
        }}
      >
        {image.map((src) => {
          return (
            <img
              style={{
                width: `${100 / image.length}%`,
              }}
              key={src}
              alt="carousel"
              src={src}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
