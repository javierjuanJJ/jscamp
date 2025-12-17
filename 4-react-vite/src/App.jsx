import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Navigation from './components/Navigation'
import { useRouter } from './hooks/useRouter'

import { useState, useEffect } from 'react'


function App() {
  const { currentPath, navigateTo } = useRouter()

  return (
    <div>
      
      <main>
        <Header/>
        <Navigation/>
        <Footer/>
      </main>
    </div>
  )
}

export default App