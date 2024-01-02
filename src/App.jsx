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
            <Route path='/' Component={Landing}/>
            <Route path='/sponsers' Component={Sponsers} />
            <Route path='/people' Component={People} />
            <Route path='/tracks' Component={Tracks} />
            <Route path='/schedule' Component={Schedule} />
            <Route path='/faq' Component={Faq} />
      </Routes>
    </Router>
   </>
  )
}
