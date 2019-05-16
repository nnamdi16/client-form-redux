import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import './index.css';
import App from 'components/App';
import Welcome from 'components/Welcome';
import SignUp from 'components/auth/SignUp';
import reducers from 'reducers';
import Feature from 'components/Feature';

const store = createStore(
	reducers,
	{
		auth: { authenticated: localStorage.getItem('token') }
	},
	applyMiddleware(reduxThunk)
);
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Route path="/" exact component={Welcome} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/feature" exact component={Feature} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
