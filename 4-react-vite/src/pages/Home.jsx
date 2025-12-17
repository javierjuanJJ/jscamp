export function Home() {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo clicable que lleva a Home */}
                <a href="/" className="logo-link">
                    <img src="/logo.png" alt="DevJobs" className="logo" />
                    <h1>DevJobs</h1>
                </a>
            </div>
        </header>
    )
}