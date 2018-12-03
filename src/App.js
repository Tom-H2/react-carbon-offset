import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import ViewDrawer from './components/ViewDrawer';
import Container from './components/Container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      viewDrawerOpen: false,
      mapOpen: false
    };
  }

  drawerToggleClickHandler = () => { //allows for side bar to open
    this.setState((prevState) => {
      return {
        viewDrawerOpen: !prevState.viewDrawerOpen
      };
    });
  };
  render() { //allows access to the ViewDrawer component and sets state
    let viewDrawer;
    if (this.state.viewDrawerOpen) {
      viewDrawer = < ViewDrawer { ...this.state
      }
      />;
  }

    return (
      <div className="App">
        <header className="App-header">
        <Toolbar drawerClickHandler = {
          this.drawerToggleClickHandler}/>
          {viewDrawer}
          <main style = {
            {marginTop: '10px'}
          } ></main>
          <Container className="mapcontainer"/>


        </header>
      </div>
    );
  }
}

export default App;
