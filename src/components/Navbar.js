import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #1f1f1f;
  padding: 10px;
`;

const Navbar = () => {
  return (
    <Nav>
      <Link style={{ color: 'green', margin: '10px' }} to="/">Dashboard</Link>
      <Link style={{ color: 'green', margin: '10px' }} to="/users">Usuários</Link>
      <Link style={{ color: 'green', margin: '10px' }} to="/products">Produtos</Link>
    </Nav>
  );
};

export default Navbar;
