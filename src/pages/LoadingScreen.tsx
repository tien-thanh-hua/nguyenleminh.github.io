import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

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

const LoadingScreen = props => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  }, [props.delay]);

  if (visible)
    return (
      <>
        <div className="w-screen h-screen bg-commodore-bg p-16 z-10">
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
  else
    return (<div />);
}

export default LoadingScreen;