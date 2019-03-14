import React, {Component} from 'react';
import html5 from './constDefinitions';
import codeImage from './assets/videoCode.png';
import DisplayDefinition from './general/displayDef';

class HTML5API extends Component {

  constructor(props){
    super(props);
    this.state = {
      location : {
        latitude: 0,
        longitude: 0,
      }
    };
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showLocation, this.errorHandler);
    }else{
      console.log('Geolocation is not supported by this browser');
    }
    console.log(this.state.location);
  }

  showLocation = position => {
    console.log(position);
    this.setState({location:{
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }});
  }

  errorHandler(error){
    console.log(error.message);
  }

  render(){
    return (
      <div className = "document">
      <h1>API - HTML5 Application Programming Interfaces</h1>
      <hr />

      <div className="example">

        <div className="result">
          <section>
          <button onClick={this.getLocation}>Get Location</button><br/>
          <span>latitude: {this.state.location.latitude}</span><br />
          <span>longitude: {this.state.location.longitude}</span>
          </section>
        </div>

        <div className="code">
          <img src={codeImage} alt="code"/>
        </div>

      </div>

      <div>
        <table>
          <tbody>
          <DisplayDefinition data={html5.api} />
          </tbody>
        </table>
      </div>

      </div>
    );
  }

}

export default HTML5API;
