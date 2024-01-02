import React from 'react'
import { BrowserRouter as Router,
  Routes,Route} from 'react-router-dom'
import Landing from './Pages/Landing'
import Sponsers from './Pages/Sponsers'
import People from './Pages/People'
import Tracks from './Pages/Tracks'
import Schedule from './Pages/Schedule'
import Faq from './Pages/Faq'

export default function App() {

  return (
   <>
       <Router>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/sponsers' element={<Sponsers/>} />
            <Route path='/people' element={<People/>} />
            <Route path='/tracks' element={<Tracks/>} />
            <Route path='/schedule' element={<Schedule/>} />
            <Route path='/faq' element={<Faq/>} />
      </Routes>
    </Router>
   </>
  )
}
