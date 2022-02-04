import React from 'react';
import './App.css';
import ProfileUser from './components/profileUser';

function App() {
  return (
    <>
      <header style={{alignItems: "flex-start", justifyContent: "flex-start"}}>
        {/* <h1>MARCOS MANSUR</h1> */}
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
