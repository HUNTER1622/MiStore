import './App.css'
import PreNavbar from './components/PreNavbar'
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Slider from './components/Slider.js'
import data from './data'
import Offers from './components/Offers.js'
import Heading from './components/Heading.js'
import StarProduct from './components/StarProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js'
import Footer from './components/Footer.js'
import NavOptions from './components/NavOptions.js'

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptops={data.laptop} fitnessAndLifestyles={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct StarProduct={data.starProduct} />
      <Heading text={"HOT ACCESSORIES"} />
      <HotAccessoriesMenu />
      <Routes>
        <Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        <Route path="/lifestyles" element={<HotAccessories lifestyles={data.hotAccessories.lifeStyle} lifeStylesCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
