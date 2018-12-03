//https://www.youtube.com/watch?v=l6nmysZKHFU
import React from "react";
import ViewToggleButton from './ViewToggleButton';
import './Toolbar.css';
import logo from './spiral-logo.jpg';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <ViewToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar_logo">Countering Carbon</div>
      <div className="spacer"></div>
      <button>
        <img src={logo} className="App-logo" alt="logo" />
      </button>
    </nav>
  </header>
);

export default toolbar;
