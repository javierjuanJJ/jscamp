export function Header() {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo clicable que lleva a Home */}
                <a href="/" className="logo-link">
                    <img src="/logo.png" alt="DevJobs" className="logo" />
                    <h1>DevJobs</h1>
                </a>

                {/* Navegación */}
                <nav className="nav">
                    <a href="/" className="nav-link">
                        Inicio
                    </a>
                    <a href="/search" className="nav-link">
                        Buscar trabajos
                    </a>
                </nav>
            </div>
        </header>
    )
}