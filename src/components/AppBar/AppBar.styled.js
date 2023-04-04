import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
    text-decoration: none;
    color: #2c2c2c;
    
    &.active {
        color: #fa3470;
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        color: #fa3470;
    }
`;