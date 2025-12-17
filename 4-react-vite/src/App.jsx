import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { NotFound } from './pages/NotFound'




function App() {
  // Obtenemos la ruta actual
  const { pathname } = window.location
  // Decidimos qué página mostrar según la ruta
  let Page

  if (pathname === '/') {
    Page = Home
  } else if (pathname === '/search') {
    Page = Search
  } else {
    Page = NotFound
  }

  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>)
}

export default App