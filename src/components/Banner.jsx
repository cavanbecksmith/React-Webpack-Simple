import React, {Component} from "react";
import './Banner.css';

export default class Banner extends Component{

	constructor(props){
		super(props);

		this.state = {
			text: props.text || 'Lorem Ipsum',
			clickable: props.clickable || false
		};
	}

	render(){
		return(
			<div>
				<div className='Banner'>
					<div className="Banner__inner">
						{this.state.text}
					</div>
				</div>
			</div>
		)
	}

	click(){

	}
}