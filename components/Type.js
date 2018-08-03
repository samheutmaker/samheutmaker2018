import { Component, PropTypes } from 'react'

export default class Type extends Component {
	constructor(props) {
		super(props);
		this.state = {
			typed: '',
			toType: this.props.type.split(''),
			typeSpeed: props.typeSpeed || 300,
			interval: null,
			cursor: 0
		};
	}
	componentDidMount() {
		this.startTyping();
		this.startCursor();
	}
	startTyping(){
		let interval = setInterval(() => {
		let typed = this.state.typed;
		let toType = this.state.toType;
		typed = typed + toType.splice(0, 1)[0];
		if(!toType.length) clearInterval(this.state.interval);
		this.setState({
				typed,
				toType,
				interval: toType.length ? this.state.interval : null
			});
		}, this.state.typeSpeed);

		this.setState({ interval });
	}
	startCursor(){
		setInterval(() => {
			this.setState({
				cursor: this.state.cursor + 1
			});
		}, 500);
	}
	getStyle(){
		if(this.state.cursor % 2 == 0) {
			return {
				paddingRight: '5px',
				borderRight: '1px solid black'
			};
		}
	}
	render(){
		console.log(this.state.cursor);
		return (
			<span className="Type" style={this.getStyle()}>
			  {this.state.typed}
			</span>
		);
	}
}

Type.propTypes = {
 
};
