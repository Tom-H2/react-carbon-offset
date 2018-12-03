import React, {
  Component
} from 'react';

import './ViewDrawer.css';

class ViewDrawer extends Component {

  //prop changes trigger update to render
  componentWillReceiveProps = (props) => {
    this.props = props
  }
  //Renders the visual elements in the ViewDrawer so each venue appears there
  render() {
    return ( <
      aside className = "sideBar" >
        <nav className = "view-drawer" >
        <
          input tabIndex="2"
          type = "text"
          id = "filter"
          placeholder = "Filter Venues"
        />
        <div className = "carbon-calculator">
          Multiply distance by carbon constant for mode of transportaion.
          <p>
            Calculate the carbon implications of your life and learn how to offset that carbon
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carbon Offsets
          </a>
        </div>
        </nav>
      </aside>
    );
  }
}
export default ViewDrawer;
