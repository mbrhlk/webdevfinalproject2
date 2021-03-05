import './styles/reset.scss';
import './styles/general.scss';
import 'typeface-merriweather'

import Header from './components/header'
import ImageGallery from './components/image-gallery'
import About from './components/about'
import Blog from './components/blog'
import Contact from './components/contact'

function App() {
  return (
    <div className="app">
      <Header />
      <ImageGallery />
      <About />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
