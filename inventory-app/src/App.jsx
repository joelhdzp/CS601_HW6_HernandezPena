import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import InventoryList from './components/InventoryList.jsx';
import Footer from './components/Footer.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import ProductTab from './components/ProductTab.jsx';
import HelpTab from './components/HelpTab.jsx'

/**
 * Root application layout and routing (8 different components)
*/
function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header>
        <Header/>
      </header>
      {/* Top Navigation Menu */}
      <Menu/>
      {/* Main area switches components based on route */}
      <main>
        <Routes>
          {/* Home (inventory list) */}
          <Route path="/" element={<InventoryList />} />
          {/* Product placeholder page */}
          <Route path="/product" element={<ProductTab />} />
          {/* Help/search page */}
          <Route path="/help" element={<HelpTab />} />
          {/* Product detail page, dynamic by SKU */}
          <Route path="/product/:sku" element={<ProductDetail />} />
        </Routes>
      </main>
      {/* Footer Section */}
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App;