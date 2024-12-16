import {
  Header,
  // Navbar,
  About,
  Hobby,
  Education,
  Skills,
  Projects,
  Footer
} from './components'
import './App.css'

function App() {
  return (
    <div className='view'>
      {/* <Navbar /> */}
      <Header />
      <About />
      <Hobby />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
