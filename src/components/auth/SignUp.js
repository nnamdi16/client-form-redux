import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from 'actions/index';
class SignUp extends Component {
	onSubmit = formProps => {
		this.props.signUp(formProps, () => {
			this.props.history.push('/feature');
		});
		console.log(formProps);
	};

	render() {
		const { handleSubmit } = this.props;
		return (
			<div className="container">
				<form className="col s12" onSubmit={handleSubmit(this.onSubmit)}>
					<div className="row">
						<label>Email</label>
						<Field name="email" type="text" component="input" autoComplete="none" />
					</div>
					<div className="row">
						<label>Password</label>
						<Field name="password" type="password" component="input" autoComplete="none" />
					</div>
					<div>{this.props.errorMessage}</div>
					<button className="btn waves-effect waves-light" type="submit" name="action">
						Sign Up
						<i className="material-icons right">send</i>
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		errorMessage: state.auth.errorMessage
	};
};
export default compose(connect(mapStateToProps, actions), reduxForm({ form: 'signUp' }))(SignUp);

//Compose helps us to combine higher order components.

/**
 * CORS means Cross Origin Resource Sharing : It is a security feature implemented inside your browser
 */
