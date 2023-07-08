import './App.css'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './Containers'
import { Cta, Brand, Navbar } from './components'

const App = () => {
  return (
    <div className="App">
      <div className="graidient__bg">
        <Navbar />                           
        <Header />                           
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
