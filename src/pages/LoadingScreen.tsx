import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function LoadingScreen() {
  return (
    <>
      <div className="w-screen h-screen bg-commodore-bg p-16">
        <div className="w-full h-full bg-commodore-fg text-commodore-bg text-4xl font-mono font-bold uppercase">
          <div className="text-center pt-8">
            **** Portfolio OS ****<br />
          </div>
          <div className="auto-input text-left">
            <br />Ready.<br />
            {animateLoadMessage()}
          </div>
        </div>
      </div>
    </>
  )
}
function animateLoadMessage() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Load \"Nguyen Le Minh's Portfolio\""
        ]}
        wrapper="span"
        cursor={false}
        style={{ fontSize: '1em', display: 'inline-block' }}
      />
      <span className="bg-commodore-bg animate-blink">&nbsp;</span>
    </>
  )

}