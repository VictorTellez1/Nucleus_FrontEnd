import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './styles/styles.css'
import Inicio from './pages/Inicio'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Principal } from './layout/Principal'
import Caracteristicas from './pages/Caracteristicas'
import Nucleus from './pages/Nucleus'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Principal/>}>
        <Route index element={<Inicio/>}/>
        <Route path="que-es" element={<Nucleus/>}/>
        <Route path='como-funciona' element={<Caracteristicas/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
