import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import ProductItems from './components/Products/ProductItems';
import ItemProvider from './store/ItemProvider';

const App = () => {
  return (
    <ItemProvider>

      <Header />

      <ProductItems />

      <Footer />
      
    </ItemProvider>
  );
}

export default App;
