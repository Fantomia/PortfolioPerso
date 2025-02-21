import { Route, Routes } from 'react-router-dom'
import './style/style.css'
import Landing from './page/landing'
import Error from './page/error'
import Header from './components/header/header'
import ParticlesBackground from './components/background/ParticlesBackground'
import ScrollToHashElement from "./components/scroll/scroll";
import Loading from './components/loading/loading'

function App() {

  return (
    <div className='App'>
      <Loading />
      <ParticlesBackground />
      <ScrollToHashElement />
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
