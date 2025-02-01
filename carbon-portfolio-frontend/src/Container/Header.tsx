import React, { CSSProperties } from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Carbon Credit Portfolio Generator</h1>
    </header>
  );
};

const styles: { [key: string]: CSSProperties } = {
  header: {
    backgroundColor: '#c1d9d0',
    padding: '20px',
    textAlign: 'center',
    color: 'black',
  },
  title: {
    margin: 0,
    fontSize: '2em',
  },
};

export default Header;