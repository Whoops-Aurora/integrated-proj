import "./App.css"
import './studentform.css';

import About from "./components/About"
import Blog from "./components/Blog"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Portfolio from "./components/sections/Portfolio"
import StudentForm from "./components/StudentForm"
import Work from "./components/Work"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <StudentForm/>
      <Portfolio />
      <Wrapper />
      <Blog />
      <Work />
      <Footer />
    </>
  )
}

export default App
