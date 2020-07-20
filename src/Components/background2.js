import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../App.css"

export const Background2 = () => {
  const { background2, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ],
    timing: {
      duration: 36000,
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
      <div class="scenery" id="background2" ref={background2}>
        <img
          id="r_pawn"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
          alt=" "
        />

        <img
          id="r_knight"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
          alt=" "
        />
        <img
          id="palm2"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
          alt=" "
        />
      </div>
    </div>
  );
};
