import React from 'react';
import Wave from 'react-wavify'

function App() {
  return (
    <>
      <Wave
        fill='#f78802'
        paused={false}
        options={{
          height: 20,
          amplitude: 40,
          speed: 0.25,
          points: 5
        }}

      />
      <Wave fill="#e62315" mask="url(#mask)" options={{ points: 20, speed: 0.2, amplitude: 40 }}>
        {/* Example adapted from https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask */}
        <mask id="mask">
          <path d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z" fill="white" />
        </mask>
      </Wave>
    </>
  );
}

export default App;
