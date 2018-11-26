import React, {Component} from "react";
import './Form.css';

export default class Form extends Component{
	constructor(props){
		super(props);
		this.state = {
			test:"something"
		}
	}

	test(){
		this.setState(function (state, props) {
			return {
				test: 'Something'
			}
		});
	}

	render(){
		return(
			<div className="Form">

				<div className="Form__header">
					<h1>
						<span>Weather form</span>
					</h1>
				</div>


				<div className="Form__inner">
					<form action="" method="get">
						<div className="Form__option">
							<label htmlFor="weather">Weather</label>
							<input name="weather" val={this.state.test} type="text"/>
						</div>
						<div className="Form__option">
							<label htmlFor="weather">Weather</label>
							<input name="weather" val={this.state.test} type="text"/>
						</div>
						<div className="Form__option">
							<label htmlFor="weather">Weather</label>
							<input name="weather" val={this.state.test} type="text"/>
						</div>	
					</form>
				</div>

			</div>
		)
	}
}