
import React from 'react';
import './App.css';
import Header from './MakananTra/Header';
import Sidebar from './MakananTra/Sidebar';
import Content from './MakananTra/Content';
import Footer from './MakananTra/Footer';
import Navbar from './MakananTra/Navbar';

const App = () => {
  const traditionalFoods = [
    {
      id: 1,
      name: 'Nasi Goreng',
      image: 'Nasi goreng.jpeg',
      description:
        'Nasi goreng adalah masakan tradisional Indonesia yang terbuat dari nasi yang dimasak kembali dengan bumbu rempah-rempah.',
    },
    {
      id: 2,
      name: 'Gado-Gado',
      image: 'Gado gado.jpeg',
      description:
        'Gado-gado adalah gorengan campuran sayuran, telur, tahu, dan tempe yang disiram saus kacang.',
    },
    {
      id: 3,
      name: 'Sate Ayam',
      image: 'Sate ayam.jpeg',
      description:
        'Sate ayam adalah makanan tradisional Indonesia yang terbuat dari daging ayam dipanggang dengan bumbu khas.',
    },
    {
      id: 4,
      name: 'Soto Ayam',
      image: 'soto.jpeg',
      description:
        'Soto ayam adalah makanan khas Indonesia yang berupa sejenis sup ayam dengan kuah yang berwarna kekuningan.',
    },
  ];

  return (
    <div className="app">
      <Navbar /> 
      <Header />
      <Sidebar />
      <Content traditionalFoods={traditionalFoods} />
      <Footer />
    </div>
  );
};

export default App;