// App.jsx - DESPUÉS
import { Route } from './components/Route'
import { Home } from './pages/Home'
import { SearchPage } from './pages/Search'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/search" component={SearchPage} />
      <Route path="/404" component={NotFound} />
    </>
  )
}

export default App