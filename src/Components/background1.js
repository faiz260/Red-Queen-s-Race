import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../App.css"

export const Background1 = () => {
  const { background1, getAnimation } = useWebAnimations({
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
      <div class="scenery" id="background1" ref={background1}>
        <img
          id="r_pawn_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
          alt=" "
        />
        <img
          id="w_rook"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
          alt=" "
        />
        <img
          id="palm1"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
          alt=" "
        />
      </div>
    </div>
  );
};
