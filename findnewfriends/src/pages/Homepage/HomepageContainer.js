import React, { Component } from "react";
import AppBarExampleIcon from '../../components/AppBar';
import LoginForm from "../../components/Form";
import Form from "../../components/Form";
import ProfileForm from "../../components/NewUser";

class HomepageContainer extends Component {
  state = {
    result: {},
    search: ""
  };

render() {
	return (
		<div>		
			<div>
				<AppBarExampleIcon/>
			</div>
			<div className = "wrapper">
				<LoginForm/>
			</div>			
	    </div>
	);
}
}


export default HomepageContainer;