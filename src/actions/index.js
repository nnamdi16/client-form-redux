import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from 'actions/types';

export const signUp = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post('http://localhost:3090/signup', formProps);
		dispatch({ type: AUTH_USER, payload: response.data.token });
		localStorage.setItem('token', response.data.payload);
		callback();
	} catch (e) {
		dispatch({
			type: AUTH_ERROR,
			payload: 'Email in use'
		});
	}
};

export const signout = () => {
	localStorage.removeItem('token');
	return {
		type: AUTH_USER,
		payload: ''
	};
};

export const signIn = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post('http://localhost:3090/signin', formProps);
		dispatch({ type: AUTH_USER, payload: response.data.token });
		localStorage.setItem('token', response.data.payload);
		callback();
	} catch (e) {
		dispatch({
			type: AUTH_ERROR,
			payload: 'Invalid login credentials'
		});
	}
};
