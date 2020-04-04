import React from 'react';
import './App.css';
import Contact from './components/contact';

const Darlene = {
  name: "Darlene Thomas",
  avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  online: true
};

const Warren = {
  name: "Warren Lambert",
  avatar: "https://randomuser.me/api/portraits/men/72.jpg",
  online: false
};

const Bryan = {
  name: "Bryan Hopkins",
  avatar: "https://randomuser.me/api/portraits/men/26.jpg",
  online: true
};

function App() {
  return (
    <div>
      <Contact {...Darlene} />
      <Contact {...Warren} />
      <Contact {...Bryan} />
    </div>
  );
}
export default App;