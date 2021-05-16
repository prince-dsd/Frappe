import React, { useRef, useEffect } from 'react';

// Components
import { Header, Footer } from './Layout';
import HomeScreen from './screens/HomeScreen';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const useMountEffetct = (effect) => useEffect(effect, []);

function App() {
  const reach = useRef(null);
  useMountEffetct(() => scrollToRef(reach));

  return (
    <div className='App'>
      <Header />
      <HomeScreen refProp={reach} />
      <Footer scrollToRef={scrollToRef} reach={reach} />
    </div>
  );
}

export default App;
