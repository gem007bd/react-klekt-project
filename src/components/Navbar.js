import React, { Component } from 'react';

export class  Navbar extends React.Component {
  render(){
    return(
      <div>
        <div className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" rel="home" href="#">
                        <img src="//www.google.com/favicon.ico" />
                    </a>
                </div>
                <div id="navbar" className="collapse navbar-collapse navbar-responsive-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                            </ul>
                        </li>
                    </ul>
              			<form className="navbar-form navbar-right" role="search" method="get" id="searchform" action="">
              				<div className="form-group">
              					<input name="s" id="s" type="text" className="search-query form-control" autocomplete="off" placeholder="Search..." />
              				</div>
              			</form>
        		    </div>
            </div>
      </div>
      <div className="col-xs-12">
        <a className="k-tabs-tab" aria-current="false" href="/">Home</a>
        <a className="k-tabs-tab" aria-current="false" href="/store/brand,Adidas">Adidas</a>
        <a className="k-tabs-tab" aria-current="false" href="/store/brand,Nike">Nike</a>
        <a className="k-tabs-tab" aria-current="false" href="/store/brand,Air_Jordan">Jordan</a>
        <a className="k-tabs-tab" aria-current="false" href="/store/brand,Supreme">Supreme</a>
        <a className="k-tabs-tab" aria-current="false" href="/store/">All</a>
        <a className="k-tabs-tab light-tab" href="https://london.presentedby.com" target="_blank">London Shop</a>
      </div>
    </div>
    );
  }

}
