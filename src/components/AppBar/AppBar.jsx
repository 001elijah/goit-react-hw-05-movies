import Box from "components/Box/Box";
import { NavLink } from "react-router-dom";

// import s from './AppBar.module.scss';

const navItems = [
    { href: "home", text: "Home" },
    { href: "movies", text: "Movies" }
];

const AppBar = () => {
    return (
    <Box>
        {navItems.map(({ href, text }) => <NavLink to={href} key={href}>{text}</NavLink>)}
    </Box>);
};

export default AppBar;