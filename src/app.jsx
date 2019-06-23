import React from 'react';
import Header from './Header';

export default class App extends React.Component {
  constructor(){
    super();
    this.state    = {
      nama  : 'Risky',
      bil: 1
    }
  }
  klik(){
    this.setState({nama : "Hello "+bil++});
  }
  render() {
    return (<div>
      <Header/>
      <h2>Welcome to React! {this.state.nama}</h2>
      <button className="btn btn-primary btn-md" onClick={this.klik}>Klik</button>
    </div>);
  }
}
