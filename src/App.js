import React, { Component } from 'react';
import {Navbar} from './components/Navbar';
import {Inventory} from './components/Inventory';
import './App.css';


class App extends Component {

  constructor() {
      super();
      this.state = {
          inventories: [],
          shoeData: ""
      };
  }
  componentDidMount() {
    let initialInventories = [];
    let initialShoeData = [];
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
              brand: data.brand,
              title: data.title,
              styleCode: data.styleCode
          });
        });

      }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
            <div className="row">
                  <div className="col-xs-8">
                    <img src="./img/big_img_shoe.jpg" className="img-responsive" />
                  </div>
                <div className="col-xs-4 text-left margin-top-40">
                      <h4>{this.state.brand}</h4>
                      <div className="product-subtitle-gray">{this.state.title}</div>
                      <div className="product-subtitle-gray">StyleCode: {this.state.styleCode}</div>
                      <div className="margin-top-40">
                          <Inventory state={this.state}/>
                      </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}



export default App;
