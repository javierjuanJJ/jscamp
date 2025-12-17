import { useRouter } from '../hooks/useRouter.js'
import { Home } from '../pages/Home'
import { Search } from '../pages/Search'
import { NotFound } from '../pages/NotFound'
export default function Navigation() {
    const { currentPath, navigateTo, isActive } = useRouter()

    return (
        <>
        <nav>
            <button
                className={isActive('/') ? 'active' : ''}
                onClick={() => navigateTo('/')}>
                Home
            </button>
            <button
                className={isActive('/about') ? 'active' : ''}
                onClick={() => navigateTo('/about')}
            >
                About
            </button>
            <button
                className={isActive('/search') ? 'active' : ''}
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