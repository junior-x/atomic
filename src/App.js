import React from 'react';
import './App.css';
import Hackintosh from './pages/hackintoshDiv';
import Jupiter from './pages/juptierDiv';
import Skills from './pages/skillsDiv';
import Education from './pages/educationDiv';

function App() {
  return (
    <>
      <div >
        <div >
          <Hackintosh />
          <Jupiter />
          <Skills />
          <Education />
        </div>
      </div>
    </>
  );
}

export default App;
