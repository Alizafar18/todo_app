import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TO DO APP</h1>
    </header>
  );
}


const headerStyle = {

  backgroundColor: '#282c34',
  width:'100%',
  color: 'white',
  textAlign: 'center',
  padding: '20px',
  fontSize: '24px',
};

export default Header;