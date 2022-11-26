import React from 'react';
import styled from 'styled-components';

const Logo = styled.header`
  font-size: 50px;
  font-weight: bolder;
  margin: 3rem;
`;

function Header() {
  return (
    <div>
      <Logo>OurStory</Logo>
    </div>
  );
}

export default Header;
