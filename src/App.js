import React from 'react';
import './App.css';
import Hackintosh from './pages/hackintoshApp';
import Jupiter from './pages/juptierDiv';
import Skills from './pages/skillsDiv';
import Education from './pages/educationDiv';

function App() {
  return (
    <>
      <body >
        <div >
          <Hackintosh />
          <Jupiter />
          <Skills />
          <Education />
        </div>
      </body>
    </>
  );
}

export default App;
