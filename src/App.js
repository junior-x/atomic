import React from 'react';
import './App.css';
import Jupiter from './pages/juptierDiv';
import Skills from './pages/skillsDiv';
import Education from './pages/educationDiv';
import ProjectDeveloped from './components/projectDeveloped';
import ProjectsDiv from './pages/projectsDiv';

function App() {
  return (
    <>
      <div className='appStyles' >
        <div >
          <Jupiter />
          <Skills />
          <ProjectsDiv /> 
          <Education /> 
          <ProjectDeveloped />
        </div>
      </div>
    </>
  );
}

export default App;