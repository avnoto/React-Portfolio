import React from 'react';
import Navbar from './components/Navbar';
import Navbar from './components/Main';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Wrapper>
        <Main />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
