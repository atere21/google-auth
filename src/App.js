import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import SignIn from './components/Pages/SignIn'
import Home from './components/Pages/Home'
import Account from './components/Pages/Account'
import { AuthContextProvider } from './context/AuthContext'
import Protected from './components/Protected'

function App () {
  return (
    <div>
      <AuthContextProvider>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/signIn' element={<SignIn />}/>
          <Route path='/account' element={<Protected><Account/></Protected>}/>

      </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App