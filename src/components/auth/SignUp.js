import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
class SignUp extends Component {
	render() {
		return (
			<div>
				<form>
					<fieldset>
						<label>Email</label>
					</fieldset>
					<fieldset>
						<label>Password</label>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default SignUp;
