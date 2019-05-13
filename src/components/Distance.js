import React, {Component} from 'react';
import GoogleMap from 'google-distance-matrix';
//...
class Distance extends Component {
  state = {
    //...
    address:'',
    dest: '',
    distanceText:'',
    openModal: false,
    foundDistance: false,
    distanceText: "",
    address: "New York NY",
    dest: "Montreal"

  };
  constructor (props){
    super(props)
    this.searchUpdated = this.searchUpdated.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleFormSubmit = (event) => {
    const component = this
    // const { address, dest } = this.state
    let address = ["Toronto, ON, CA"]
    let dest = ["Vancouver, ON, CA"]
    let origins = ['San Francisco CA', '40.7421,-73.9914'];
    let destinations = ['New York NY', 'Montreal', '41.8337329,-87.7321554',
    'Honolulu'];

    event.preventDefault()
    // console.log(event)
    GoogleMap.matrix(address, dest, function (err, distances) {
        distance.key('apiKey');
        distance.units('imperial');
        console.log("address");
        console.log(dest);
        console.log(err);
        console.log(distances);
        if (err) {
            return console.log(err);
        }
        if(!distances) {
            return console.log('no distances');
        }

        if (distances.status === 'OK') {
            if(distances.rows[0].elements[0])  {
                var distance = distances.rows[0].elements[0].duration['text'];
                console.log(distance);
                component.setState({
                    foundDistance: true,
                    distanceText: distance
                });
            }
        }
    }).bind(this);
}

componentWillMount() {
  //...
}
componentDidMount () {
    // ...
}
render() {
//...
  return (
    <div>
      <button onClick={this.handleFormSubmit}>Hello </button>

    </div>
  )
}
}

export default Distance;
