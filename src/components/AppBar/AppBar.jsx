import Box from "components/Box/Box";
import { Link } from "react-router-dom";

import s from './AppBar.module.scss';

const navItems = [
    { href: "home", text: "Home" },
    { href: "movies", text: "Movies" }
];

const AppBar = () => {
    return (
    <Box>
        {navItems.map(({ href, text }) => <Link to={href} key={href}>{text}</Link>)}
    </Box>);
};

export default AppBar;