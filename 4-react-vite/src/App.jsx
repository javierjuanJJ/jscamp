// App.jsx - DESPUÉS
import { Route } from './components/Route'
import { Home } from './pages/Home'
import { SearchPage } from './pages/Search'
import { Contact } from './pages/Contact'
import { About } from './pages/About'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Route path="/" component={Home} />
        <Route path="/search" component={SearchPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> {/* 👈 Nueva ruta */}
      </main>

      <Footer />
    </>
  )
}

export default App