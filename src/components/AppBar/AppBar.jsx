import Box from "components/Box/Box";
import { NavItem } from "./AppBar.styled";
import { Outlet } from "react-router-dom";

const navItems = [
    { href: "goit-react-hw-05-movies", text: "Home" },
    { href: "movies", text: "Movies" }
];

const AppBar = () => {
    return (
    <>
        <header>
            <nav>
                <Box>
                    {navItems.map(({ href, text }) => <NavItem to={href} key={href}>{text}</NavItem>)}
                </Box>
            </nav>
        </header>
        <Outlet />
    </>);
};

export default AppBar;