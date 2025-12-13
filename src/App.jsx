import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import UserCred from './components/pages/UserCred'

const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<UserCred />} />

        <Route path={"/app"} element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
