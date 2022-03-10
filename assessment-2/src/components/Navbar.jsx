import { NavLink } from 'react-router-dom';
const Navbar = () => {
	return (
		<div className="header-bar">
			<ul className="nav-bar">
				<NavLink to="/cats">
					<li>Cat Page</li>
				</NavLink>
				<NavLink to="/">
					<li>Home Page</li>
				</NavLink>
				<NavLink to="/dogs">
					<li>Dog Page</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Navbar;
