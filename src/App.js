import './App.css';
import BlogList from './BlogList.js';
import Footer from './Footer.js';
import HeaderBanner from './HeaderBanner.js';
import NavMenu from './NavMenu.js';



function App() {
  return (
    <div className="App">
        <header>
            <HeaderBanner />
            <NavMenu />
        </header>
        <BlogList />
        <Footer />
    </div>
  );
}

export default App;
