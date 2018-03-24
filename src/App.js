import React, { Component } from 'react';
import {Navbar} from './components/Navbar';
import {Inventory} from './components/Inventory';
import './App.css';

class App extends Component {

  constructor() {
      super();
      this.state = {
          inventories: []
      };
  }
  componentDidMount() {
    let initialInventories = [];
    fetch('https://www.presentedbyklekt.com/api/product/get/10033/inventory')
        .then(response => {
            return response.json();
        }).then(data => {
        initialInventories = data.inventory.map((inventory) => {
            return inventory
        });
        console.log(data);
        this.setState({
            inventories: initialInventories,
        });
    });
}
//
//   state = {
//   user: { }
// };
// gitUser = () => {
//   //const name = this.refs.name.value;
//   fetch(`https://www.presentedbyklekt.com/api/product/get/10033/inventory`)
//   .then(response => response.json())
//   .then(data => {
//     inventory = data.results.map((inventory) => { return inventory})
//   })
//   .then(data => console.log(data))
//
// };
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
            <div className="row">
                  <div className="col-xs-8">
                    <img src="./img/big_img_shoe.jpg" className="img-responsive" />
                  </div>
                <div className="col-xs-4">
                    {this.state.data}
                    <Inventory state={this.state}/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}



export default App;
