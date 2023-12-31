import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Hero from './Components/hero';
import Services from './Components/services';
// import TechnologiesPage from './Components/technology';
// import ContactSection from './Components/contact';
import Footer from './Components/footer';
import Freelancing from './Components/freelancing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      {/* <TechnologiesPage></TechnologiesPage> */}
      {/* <ContactSection></ContactSection> */}
      <Freelancing></Freelancing>
      <Footer></Footer>
    </div>
  );
}

export default App;
