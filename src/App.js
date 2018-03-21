import React, { Component } from 'react';
import {Navbar} from './components/Navbar';
import './App.css';

class App extends Component {
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
                    <img src="./img/Off White x Nike Air Jordan I All White Part 2__AQ0818-100.jpg" className="img-box" />
                  </div>
                </div>
                <div className="col-md-3 col-xs-12 col-sm-6 col-lg-3">
                    <div className="row">
                    <div class="row">
                          <div class="col-md-12">
                              <select type="text" class="form-control  multiselect-icon" multiple="multiple" role="multiselect">
                                <option value="0" data-icon="glyphicon-picture text-primary" selected="selected">Photos</option>
                              </select>
                          </div>
                  	</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
