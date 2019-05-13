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
          Click on the Animal names below for more information!
          <p>
            Northern Harrier
          </p>
          <p>
            Redwing Black Bird
          </p>
          <p>
            Thatcher Ants
          </p>
          <p>
            Raven
          </p>
          <p>
            Coyote
          </p>
          <p>
            Bald Eagle
          </p>
          <p>
            Humming Bird
          </p>
          <p>
            Mallard
          </p>
          <p>
            Deer
          </p>
          <p>
            Brown Bat
          </p>
          <p>
            Garter Snake
          </p>
          <p>
            Ike
          </p>
          <p>
            Jibril
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Outdoor Education at Five Acre School
          </a>
        </div>
        </nav>
      </aside>
    );
  }
}
export default ViewDrawer;
