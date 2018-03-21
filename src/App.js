import React, { Component } from 'react';
import {Navbar} from './components/Navbar';
import './App.css';

class App extends Component {
  state = {
  user: { }
};
gitUser = () => {
  //const name = this.refs.name.value;
  fetch(`https://www.presentedbyklekt.com/api/product/get/10033/inventory`)
  .then(response => response.json())
  .then(data => console.log(data))

};
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="col-xs-12">
            <div className="input-group col-xs-4 pull-right">
                <input type="text" className="form-control" placeholder="Enter a user name"  ref="name" />
                <span className="btn btn-primary input-group-addon" onClick={this.gitUser}>Get user Detail</span>
            </div>
          </div>
            <div className="row">
                <div className="col-md-6 col-xs-12 col-sm-6 col-lg-6">
                  <div className="col-xs-12">
                    <img src="./img/big_img_shoe.jpg" className="img-box" />
                  </div>
                </div>
                {/*<div className="col-md-3 col-xs-12 col-sm-6 col-lg-3">
                    <div className="row">
                    <div className="row">
                          <div className="col-md-12">
                              <select type="text" className="form-control  multiselect-icon" multiple="multiple" role="multiselect">
                                <option value="0" data-icon="glyphicon-picture text-primary" selected="selected">Photos</option>
                              </select>
                          </div>
                  	</div>
                    </div>
                </div>*/}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
