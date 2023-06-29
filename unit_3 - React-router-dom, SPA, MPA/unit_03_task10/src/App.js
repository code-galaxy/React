import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import Error404 from './Errror404';
import Footer from './Footer';
import CategoryDescription from './CategoryDescription';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const mainNav = [
  { "title": "Home", "url": "/" },
  { "title": "About", "url": "/about" },
  { "title": "Category", "url": "/cat" }
]
const categoryNav = [
  { "title": "Notebook", "url": "Notebook" },
  { "title": "Monitor", "url": "Monitor" },
  { "title": "Cellphone", "url": "Cellphone" }
]



function App() {
  return (
    <>

      <Router>
        <Header data={mainNav} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cat" element={<Category data={categoryNav} />} />
          <Route path="/cat/:nameCategory" element={<CategoryDescription />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
