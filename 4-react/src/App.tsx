import './App.css';

function App() {
  return (
    <>
      <header id="navHeader">
        <h1>
          <svg
            fill="none"
            stroke="blue"
            width="24"
            height="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          DevJobs
        </h1>

        <nav>
          <a href="#">Inicio</a>
          <a href="empleos.html">Empleos</a>
        </nav>

        <div>
          <a href="#" className="important-button">
            Publicar un empleo
          </a>
          <a href="#">Iniciar sesión</a>
        </div>
      </header>

      <main>
        <section>
          <h1>Encuentra el trabajo de tus sueños</h1>
          <p>
            Únete a la comunidad más grande de desarrolladores y encuentra tu
            próxima oportunidad.
          </p>

          <form role="search">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>

              <input
                required
                type="text"
                placeholder="Buscar empleos por título, habilidad o empresa"
              />

              <button className="blue-button" disabled type="submit">
                Buscar
              </button>
            </div>
          </form>
        </section>

        <section>
          <header>
            <h2>¿Por qué DevJobs?</h2>
            <p>
              DevJobs es la principal plataforma de búsqueda de empleo para
              desarrolladores. Conectamos a los mejores talentos con las empresas
              más innovadoras.
            </p>
          </header>

          <footer>
            <article>
              <svg
                fill="blue"
                height="32"
                width="32"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56Z" />
              </svg>
              <h3>Encuentra el trabajo de tus sueños</h3>
              <p>
                Busca miles de empleos de las mejores empresas de todo el mundo.
              </p>
            </article>

            <article>
              <svg
                fill="blue"
                height="32"
                width="32"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0..." />
              </svg>
              <h3>Conecta con las mejores empresas</h3>
              <p>
                Conecta con empresas que están contratando por tus habilidades.
              </p>
            </article>

            <article>
              <svg
                fill="blue"
                height="32"
                width="32"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M240,208H224V96a16,16,0,0,0-16-16..." />
              </svg>
              <h3>Obtén el salario que mereces</h3>
              <p>
                Obtén el salario que mereces con nuestra calculadora de salarios.
              </p>
            </article>
          </footer>
        </section>
      </main>

      <footer>
        <small>&copy; 2025 DevJobs. Todos los derechos reservados.</small>
      </footer>
    </>
  );
}

export default App;
