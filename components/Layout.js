import { Component, PropTypes } from 'react'

const black = '#444452';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render(){
		return (
		  <div className="Layout">
		  <link rel="stylesheet" href="/static/index.css" />
		  <style jsx global>
		  	{`
		  		.Layout {
		  			position: absolute;
	  				min-height: 100vh;
	  				width: 100%;
		  		}

		  		.Page {
		  			position: relative;
				    width: 100%;
				    min-height: 100vh;
				    color: ${black};
		  		}
		  	`}
		  </style>
		    {this.props.children}
		  </div>
		);
	}
}

export default Layout
