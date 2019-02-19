import React, { Component } from 'react';
import './App.css';
import myalert, { testing1 } from './component';

class App extends Component {
  constructor() {
    super();
    this.state={
      data: [],
    }
    myalert()
    //testing1()
  }



  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((findResponse) => {
      console.log(findResponse.movies)
      this.setState({
        data: findResponse.movies,
      })
    });
  }
  render() {
    return (
      <div className="App">
        {
          this.state.data.map((dynamic, key) => 
          <ul key={key}>
            <li>{dynamic.title}</li>
            <p>{dynamic.releaseYear}</p>
          </ul>
          )
        }
        {this.testing1()}
      </div>
    );
  }
}

export default App;
