import { useId, useState } from "react"

export function SearchFormSection({ onTextFilter, onSearch }) {

    // Estado para saber qué campo está activo
    const [focusedField, setFocusedField] = useState(null)

    const idText = useId()
    const idTechnology = useId()
    const idLocation = useId()
    const idExperienceLevel = useId()
    const idSalary = useId()
    const idContractType = useId()

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)

        const filters = {
            technology: formData.get(idTechnology),
            location: formData.get(idLocation),
            experienceLevel: formData.get(idExperienceLevel),
            salary: formData.get(idSalary),
            contractType: formData.get(idContractType)
        }

        onSearch(filters)
    }

    const handleTextChange = (event) => {
        const text = event.target.value
        onTextFilter(text)
    }

    return (
        <section className="jobs-search">
            <h1>Encuentra tu próximo trabajo</h1>
            <p>Explora miles de oportunidades en el sector tecnológico.</p>

            <form onSubmit={handleSubmit} id="empleos-search-form" role="search">
                <div className="search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>


                    <input
                        name={idText}
                        id="empleos-search-input"
                        type="text"
                        placeholder="Buscar trabajos, empresas o habilidades"
                        onChange={handleTextChange}
                        onFocus={() => setFocusedField('search')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                            borderColor: focusedField === 'search' ? '#4f46e5' : '#d1d5db',
                            outline: focusedField === 'search' ? '2px solid #4f46e5' : 'none',
                        }}
                    />
                    {focusedField === 'search' && (
                        <small className="input-hint">Busca por título de trabajo, empresa o tecnología</small>
                    )}
                    <button type="submit" style={{ position: 'absolute', right: '4px' }}>Buscar</button>
                </div>

                <div className="search-filters">
                    <select name={idTechnology} id="filter-technology" onFocus={() => setFocusedField('technology')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                            borderColor: focusedField === 'technology' ? '#4f46e5' : '#d1d5db',
                        }}>
                        <option value="">Tecnología</option>
                        <optgroup label="Tecnologías populares">
                            <option value="javascript">JavaScript</option>
                            <option value="python">Python</option>
                            <option value="react">React</option>
                            <option value="nodejs">Node.js</option>
                        </optgroup>
                        <option value="java">Java</option>
                        <hr />
                        <option value="csharp">C#</option>
                        <option value="c">C</option>
                        <option value="c++">C++</option>
                        <hr />
                        <option value="ruby">Ruby</option>
                        <option value="php">PHP</option>
                    </select>

                    <select name={idLocation} id="filter-location" onFocus={() => setFocusedField('technology')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                            borderColor: focusedField === 'technology' ? '#4f46e5' : '#d1d5db',
                        }}>
                        <option value="">Ubicación</option>
                        <option value="remoto">Remoto</option>
                        <option value="cdmx">Ciudad de México</option>
                        <option value="guadalajara">Guadalajara</option>
                        <option value="monterrey">Monterrey</option>
                        <option value="barcelona">Barcelona</option>
                    </select>

                    <select name={idExperienceLevel} id="filter-experience-level" onFocus={() => setFocusedField('technology')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                            borderColor: focusedField === 'technology' ? '#4f46e5' : '#d1d5db',
                        }}>
                        <option value="">Nivel de experiencia</option>
                        <option value="junior">Junior</option>
                        <option value="mid">Mid-level</option>
                        <option value="senior">Senior</option>
                        <option value="lead">Lead</option>
                    </select>

                    <select name={idContractType} id={idContractType} onFocus={() => setFocusedField('technology')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                            borderColor: focusedField === 'technology' ? '#4f46e5' : '#d1d5db',
                        }}>
                        <option value="">Todos</option>
                        <option value="full-time">Full Time</option>
                        <option value="part-time">Part Time</option>
                        <option value="freelance">Freelance</option>
                        <option value="internship">Prácticas</option>
                    </select>


                    <div className="form-group">
                        <label htmlFor={idSalary}>Salario mínimo</label>
                        <input type="number" name={idSalary} id={idSalary} placeholder="30000" min="0" step="1000" />
                    </div>
                </div>
            </form>

            <span id="filter-selected-value"></span>
        </section>
    )
}