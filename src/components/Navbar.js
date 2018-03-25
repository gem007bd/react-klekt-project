import React from 'react';


export class  Navbar extends React.Component {
  render(){
    return(
      <div>
        <div className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a  rel="home" href="">
                        <img src="./img/logo.png" width="177px" />
                    </a>
                </div>
                <div id="navbar" className="collapse navbar-collapse navbar-responsive-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="">Sell</a></li>
                        <li><a href="">Support</a></li>
                        <li><a href="">Sign-Up</a></li>
                        <li><a href="">Log-In</a></li>
                    </ul>
              			<form className="navbar-form" role="search" method="get" id="searchform" action="">
              				<div className="form-group">
              					<input name="s" id="s" type="text" className="search-query form-control" placeholder="Search..." />
              				</div>
              			</form>
        		    </div>
            </div>
      </div>
      <div className="col-xs-12  k-tab-bar">
        <div className="container text-left">
            <a className="k-tabs-tab" aria-current="false" href="/">Home</a>
            <a className="k-tabs-tab" aria-current="false" href="/store/brand,Adidas">Adidas</a>
            <a className="k-tabs-tab" aria-current="false" href="/store/brand,Nike">Nike</a>
            <a className="k-tabs-tab" aria-current="false" href="/store/brand,Air_Jordan">Jordan</a>
            <a className="k-tabs-tab" aria-current="false" href="/store/brand,Supreme">Supreme</a>
            <a className="k-tabs-tab" aria-current="false" href="/store/">All</a>
            <a className="k-tabs-tab light-tab" href="https://london.presentedby.com" target="_blank">London Shop</a>
        </div>
      </div>
    </div>
    );
  }

}
