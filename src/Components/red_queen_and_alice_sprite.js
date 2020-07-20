import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../App.css";

export const Red_queen_and_alice_sprite = () => {
  const { red_queen_and_alice_sprite, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ],
    timing: {
      easing: "steps(7, end)",
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity,
    },
  });
  const play = () => {
    getAnimation().play();
  };

  const pause = () => {
    getAnimation().pause();
  };

  const reverse = () => {
    getAnimation().reverse();
  };

  const cancel = () => {
    getAnimation().cancel();
  };

  const finish = () => {
    getAnimation().finish();
  };

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
      <div className="earth">
        <div id="red-queen_and_alice" ref={red_queen_and_alice_sprite}>
          <img
            ref={red_queen_and_alice_sprite}
            id="red-queen_and_alice_sprite"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
            alt="Alice and the Red Queen running to stay in place."
          />
        </div>
        <button>Play</button>
      </div>
    </div>
  );
};
