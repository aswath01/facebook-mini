import React from 'react';

import './App.css';
import Header from "./Header"; 
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Message from "./Message"; 
import Widjet from "./Widjet";

function App() {
  return (
    <div className="App">
     
     <Header />

    <div className="app__body">
     <Sidebar /> 
     <feed />
     <Message />
     {/* APP BODY*/}
     {/* SIDE BAR*/}
     {/* FEED*/}
     <div className="widjets">
       <Widjet />

     </div>
     </div>
    </div>
  );
}

export default App;
