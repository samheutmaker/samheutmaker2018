import { Component, PropTypes } from 'react'
import Layout from '../components/Layout'
import Type from '../components/Type'

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSlide: false,
			showAbout: false
		}
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({showSlide: true})
		}, 500);

		setTimeout(() => {
			this.setState({showAbout: true})
		}, 1100);
	}
	renderIntro(){
		return (
			<div className="Intro">
				<Type type="Hi, I'm Sam. I write software and do other cool stuff. I live in Seattle and work at a startup." typeSpeed="75"/>				
			</div>
		);
	}
	render(){
		return (
			<Layout>	
				<div className="Index Page">
				<style jsx>
				{`
					.Index {
						display: flex;
					}

						.Slide {
								overflow: hidden;
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
				        transition: all 0.6s ease;
				        position: relative;
				        min-height: 100vh;
				        width: 0;
				        top: 0;
				        left: 0;
				        background: rgba(134, 92, 214, 1);
				        background: -moz-linear-gradient(-45deg, rgba(134, 92, 214, 1) 0%, rgba(62, 136, 159, 1) 100%);
				        background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(134, 92, 214, 1)), color-stop(100%, rgba(62, 136, 159, 1)));
				        background: -webkit-linear-gradient(-45deg, rgba(134, 92, 214, 1) 0%, rgba(62, 136, 159, 1) 100%);
				        background: -o-linear-gradient(-45deg, rgba(134, 92, 214, 1) 0%, rgba(62, 136, 159, 1) 100%);
				        background: -ms-linear-gradient(-45deg, rgba(134, 92, 214, 1) 0%, rgba(62, 136, 159, 1) 100%);
				        background: linear-gradient(135deg, rgba(134, 92, 214, 1) 0%, rgba(62, 136, 159, 1) 100%);
				        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#865cd6', endColorstr='#3e889f', GradientType=1 );
				    }

				    .Slide.Open {
				    	width: 50%;
				    }

				    img.Profile {
				    	height: 250px;
				    	width: 250px;
				    	border-radius: 50%;
				    }

			     .About {
				        transition: all 0.6s ease;
				        position: relative;
				        width: 50%;
				        top: 0;
				        background: white;
				        opacity: 0;
				        padding: 14px;
				    }

				    .About.Open {
		            opacity: 1;
		        }

		        .Intro {
		        	font-size: 1.8rem;
		        	margin-top: 5rem;
		        }

				`}</style>
					<div className={`Slide ${this.state.showSlide ? 'Open' : ''}`}>
						<img src="/static/me.png" className="Profile" />
					</div>
					<div className={`About ${this.state.showAbout ? 'Open' : ''}`}>
						{(() => {
							if(this.state.showAbout && this.state.showSlide) {
								return this.renderIntro()
							}
						})()}
					</div>
				</div>
			</Layout>
		);
	}
}

