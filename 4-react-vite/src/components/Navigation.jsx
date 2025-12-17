import { useRouter } from '../hooks/useRouter.js'
import { Home } from '../pages/Home'
import { Search } from '../pages/Search'
import { NotFound } from '../pages/NotFound'
export default function Navigation() {
    const { currentPath, navigateTo } = useRouter()

    return (
        <>
        <nav>
            <button
                className={currentPath === '/' ? 'active' : ''}
                onClick={() => navigateTo('/')}>
                Home
            </button>
            <button
                className={currentPath === '/about' ? 'active' : ''}
                onClick={() => navigateTo('/about')}
            >
                About
            </button>
            <button
                className={currentPath === '/search' ? 'active' : ''}
                onClick={() => navigateTo('/search')}
            >
                Buscar empleo
            </button>
        </nav>
        {currentPath === '/' && <Home />}
        {currentPath === '/search' && <Search />}
        {currentPath === '/about' && <About />}
        {currentPath === '/contact' && <Contact />}
        </>
    )

}