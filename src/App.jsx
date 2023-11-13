import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';

function App() {


  return (
    <>
      <div className="flex flex-col space-y-4">
      <Navbar  />
      <Hero />
      <About />
      </div>
    </>
  )
}

export default App
