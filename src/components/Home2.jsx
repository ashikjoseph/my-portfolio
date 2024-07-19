import React from 'react';
import Typewriter from "typewriter-effect";
import "./home2.css"; // Import the CSS file for styling

function Home2() {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "MEARN Stack Developer",
            "Web Developer",
            "React Developer",
            "Freelancer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Home2;
