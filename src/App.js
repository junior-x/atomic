import React from 'react';
import './App.css';
import Hackintosh from './pages/hackintoshDiv';
import Jupiter from './pages/juptierDiv';
import Skills from './pages/skillsDiv';
import Education from './pages/educationDiv';
import ProjectDeveloped from './components/projectDeveloped';

function App() {
  return (
    <>
      <div >
        <div >
          <Hackintosh />
          <Jupiter />
          <Skills />
          <Education />
          <ProjectDeveloped />
        </div>
      </div>
    </>
  );
}

export default App;
