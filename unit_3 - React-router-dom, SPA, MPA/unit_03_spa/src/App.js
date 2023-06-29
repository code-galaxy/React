import './App.css';

import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import Error404 from './Errror404';
import Footer from './Footer';
import CategoryDescription from './CategoryDescription';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>

      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cat" element={<Category />} />
          <Route path="/cat/:nameCategory" element={<CategoryDescription />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
