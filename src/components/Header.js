import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
	renderLinks() {
		if (this.props.authenticated) {
			return (
				<div>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<Link to="/signout">Sign Out</Link>
						</li>
						<li>
							<Link to="/feature">Feature</Link>
						</li>
					</ul>
				</div>
			);
		} else {
			return (
				<div>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
						<li>
							<Link to="/signin">Sign In</Link>
						</li>
					</ul>
				</div>
			);
		}
	}
	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<Link to="/" className="brand-logo">
							Redux Auth
						</Link>
						{this.renderLinks()}
					</div>
				</nav>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		authenticated: state.auth.authenticated
	};
};
export default connect(mapStateToProps)(Header);
