export function Home() {
    return (
        <main>
            <section className="hero">
                <h1>DevJobs</h1>
                <p>Encuentra el trabajo de tus sueños en desarrollo</p>
                <a href="/search" className="cta-button">
                    Buscar trabajos
                </a>
            </section>

            <section className="features">
                <div className="feature">
                    <h3>🚀 Oportunidades</h3>
                    <p>Cientos de ofertas actualizadas diariamente</p>
                </div>
                <div className="feature">
                    <h3>💼 Empresas top</h3>
                    <p>Trabaja con las mejores empresas tecnológicas</p>
                </div>
                <div className="feature">
                    <h3>🌍 Remoto</h3>
                    <p>Encuentra trabajos remotos desde cualquier lugar</p>
                </div>
            </section>

            <section className="stats">
                <div className="stat">
                    <h2>1,500+</h2>
                    <p>Ofertas de trabajo</p>
                </div>
                <div className="stat">
                    <h2>300+</h2>
                    <p>Empresas</p>
                </div>
                <div className="stat">
                    <h2>50+</h2>
                    <p>Tecnologías</p>
                </div>
            </section>
        </main>
    )
}