import {
  Header,
  // Navbar,
  About,
  Hobby,
  Education,
  // Skills,
  // Experience,
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
      {/* <Skills /> */}
      {/* <Experience /> */}
      <Footer />
    </div>
  )
}

export default App
