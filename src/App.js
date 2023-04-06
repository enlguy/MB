import Navbar from './scenes/Navbar';
import Landing from './scenes/Landing';
import { useState, useEffect } from 'react';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  return (
    <div className="app">
      <Navbar />
      <Landing setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
