import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import "../App.css"

export const Foreground2 = () => {
    const { foreground2, getAnimation } = useWebAnimations({ 

        keyframes: [
          { transform: 'translateX(100%)' },
          { transform: 'translateX(-100%)' }   
        ],  
        timing: {
          duration: 12000,
          iterations: Infinity
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
                  <div class="scenery" id="foreground2" ref={foreground2}>
        <img
          id="bush"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
          alt=" "
        />
        <img
          id="w_rook_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
          alt=" "
        />
      </div>
        </div>
    )
}
