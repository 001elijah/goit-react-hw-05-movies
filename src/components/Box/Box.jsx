import { HeaderBox } from "./Box.style";

const Box = ({ children }) => {
    return (
        <HeaderBox>
            { children }
        </HeaderBox>
    );
};

export default Box;