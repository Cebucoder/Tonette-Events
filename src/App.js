import './css/min-style.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import ImageList from './components/packagesList';
// import Imagelist from './components/packagesList';
import Contact from './components/Contact';
import PackageSet from './components/PackageSet';
import Profile from './components/tonetteProfile';
import Faq from './components/faq';

const App = () => {
  return ( 
    <div class="main-container">
      <Hero></Hero>
      <Navigation></Navigation>
      <ImageList></ImageList>
      <PackageSet></PackageSet>
      <Faq></Faq>
      <Profile></Profile>
      <Contact></Contact>
    </div>

   );
}

 
export default App;