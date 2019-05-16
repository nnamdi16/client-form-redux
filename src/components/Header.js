import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<Link to="/" className="brand-logo">
							Redux Auth
						</Link>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<Link to="/signup">Sign Up</Link>
							</li>
							<li>
								<Link to="/signin">Sign In</Link>
							</li>
							<li>
								<Link to="/signout">Sign Out</Link>
							</li>
							<li>
								<Link to="/feature">Feature</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
export default Header;
