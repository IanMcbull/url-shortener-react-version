import AdvancedStats from "./components/AdvancedStats"
import BoostLinks from "./components/BoostLinks"
import HeroSection from "./components/HeroSection"
import Navigation from "./components/NavigationBar"
import UrlShortening from "./components/UrlShortening"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <Navigation/>
      <HeroSection/>
      <UrlShortening/>
      <AdvancedStats/>
      <BoostLinks/>
      <Footer/>
    </>
  )
}

export default App