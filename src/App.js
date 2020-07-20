import React, { useRef, useEffect } from "react";
import "./App.css";

function App() {

  const foreground1 = useRef(null);
  const foreground2 = useRef(null);
  const background1 = useRef(null);
  const background2 = useRef(null);
  const red_queen_and_alice_sprite = useRef(null);
  const play = useRef(null);

  useEffect(()=>{
    var sceneryFrames =   [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }   
    ];
    
    var sceneryTimingBackground = {
      duration: 36000,
      iterations: Infinity
    };
    
    var sceneryTimingForeground = {
      duration: 12000,
      iterations: Infinity
    };
    var spriteFrames = [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' }   
    ];

    var background1movement = background1.current.animate(sceneryFrames, sceneryTimingBackground);
    background1movement.currentTime = background1movement.effect.getTiming().duration / 2;

    var background2movement = background2.current.animate(sceneryFrames, sceneryTimingBackground);

    var foreground1movement = foreground1.current.animate(sceneryFrames, sceneryTimingForeground);
    foreground1movement.currentTime = foreground1movement.effect.getTiming().duration / 2;

    var foreground2movement  = foreground2.current.animate(sceneryFrames, sceneryTimingForeground);

    var sceneries = [background1movement, background2movement, foreground1movement, foreground2movement];

    const redQueen_alice = red_queen_and_alice_sprite.current.animate(
      spriteFrames, {
        easing: 'steps(7, end)',
        direction: "reverse",
        duration: 600,
        playbackRate: 1,
        iterations: Infinity
      }
    );

    var adjustBackgroundPlayback = () => {
      if (redQueen_alice.playbackRate < .8) {
        sceneries.forEach(function(anim) {
          anim.playbackRate = redQueen_alice.playbackRate/2 * -1;
        });
      } else if (redQueen_alice.playbackRate > 1.2) {
        sceneries.forEach(function(anim) {
          anim.playbackRate = redQueen_alice.playbackRate/2;
        });
      } else {
        sceneries.forEach(function(anim) {
          anim.playbackRate = 0;    
        });
      }   
    }
    // adjustBackgroundPlayback();

    setInterval(() => {
      if(redQueen_alice.playbackRate > .4){
        redQueen_alice.playbackRate *= .9;
      }
      adjustBackgroundPlayback();
    }, 3000);

    var goFaster = () => {
      redQueen_alice.playbackRate *= 1.1;
      adjustBackgroundPlayback();
    }

    window.addEventListener("click", goFaster);
    // const clickHandle =()=>{
    //   return goFaster()
    // }
  })

  return (
    <div className="wrapper">
    <div className="sky"></div>
    <div className="earth">
      <div id="red-queen_and_alice">
        <img id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png " alt="Alice and the Red Queen running to stay in place." ref={red_queen_and_alice_sprite} />
      </div>
    </div>
    <div className="scenery" id="foreground1" ref={foreground1}>
      <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
    </div>
    <div className="scenery" id="foreground2" ref={foreground2}>
      <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
      <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
    </div>
    <div className="scenery" id="background1" ref={background1}>
      <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
      <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
      <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
    </div>
    <div className="scenery" id="background2" ref={background2}>
      <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
      <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
      <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
    </div>
  </div>
  );
}

export default App;
