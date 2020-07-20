import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../App.css"


export const Foreground1 = () => {
  const { foreground1, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ],
    timing: {
      duration: 12000,
      iterations: Infinity,
    },
  });
  const seek = (e) => {
    const animation = getAnimation();
    const time = (animation.effect.getTiming().duration / 2) * e.target.value;
    animation.currentTime = time;
  };

  const updatePlaybackRate = (e) => {
    getAnimation().updatePlaybackRate(e.target.value);
  };
  return (
    <div>
      <div className="scenery" id="foreground1" ref={foreground1}>
        <img
          id="palm3"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
          alt=" "
        />
      </div>
    </div>
  );
};
