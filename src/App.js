import './css/min-style.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import ImageList from './components/packagesList';
// import Imagelist from './components/packagesList';
import Contact from './components/Contact';
import PackageSet from './components/PackageSet';

const App = () => {
  return ( 
    <div class="main-container">
      <Hero></Hero>
      <Navigation></Navigation>
      <ImageList></ImageList>
      <PackageSet></PackageSet>
      <Contact></Contact>
    </div>

   );
}

 
export default App;