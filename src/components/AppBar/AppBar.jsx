import Box from "components/Box/Box";
import { NavItem } from "./AppBar.style";

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
    </>);
};

export default AppBar;