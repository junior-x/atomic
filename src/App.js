import React from 'react';
import './App.css';
import ProfileUser from './components/profileUser';
import Hackintosh from './pages/hackintoshApp';
function App() {
  return (
    <>
      <header style={{alignItems: "flex-start", justifyContent: "flex-start"}}>
        <Hackintosh />
        <ProfileUser />
      </header>
      <div>
      </div>
      <div style={{height: "100px"}}>
      </div>
    </>
  );
}

export default App;
