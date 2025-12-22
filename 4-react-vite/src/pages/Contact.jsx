// pages/Contact.jsx
import { useId, useState } from "react"
import { useSearchForm } from "../hooks/useForm.js"
export function Contact() {

    const idName = useId()
    const idLastName = useId()
    const idEmail = useId()
    const idPhone = useId()
    const [step, setStep] = useState(1)
    // Estados del formulario
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [isDisabled, setIsDisabled] = useState(true)

    const resetForm = () => {
        setName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setIsDisabled(true)
        const button = document.getElementById("submitForm")
        button.disabled = isDisabled
    }

    const {
        handleSubmit,
    } = useSearchForm({ name,
        lastName,
        email,
        phone,
        resetForm, })
    return (
        <div className="container">
            <h2>Formulario de Contacto</h2>

            <form onSubmit={handleSubmit}>

                {/* PASO 1 */}
                {step === 1 && (
                    <>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                name={idName} 
                                value={name} 
                                type="text" 
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastname">Apellidos</label>
                            <input
                                name={idLastName} 
                                type="text"
                                value={lastName} 
                                id="lastname" 
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>

                        <button
                            type="button"
                            disabled={!name || !lastName}
                            onClick={() => setStep(2)}
                        >
                            Siguiente
                        </button>
                    </>
                )}

                {/* PASO 2 */}
                {step === 2 && (
                    <>
                        <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                            <input
                                name={idEmail} 
                                type="email" 
                                value={email} 
                                id="email"
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="form-group">
                        <label htmlFor="phone">Teléfono</label>
                            <input
                                name={idPhone} 
                                value={phone} 
                                type="tel" 
                                id="phone"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <button type="button" onClick={() => setStep(1)}>
                            Atrás
                        </button>

                        <button
                            type="button"
                            disabled={!email || !phone}
                            onClick={() => setStep(3)}
                        >
                            Siguiente
                        </button>
                    </>
                )}

                {/* PASO 3 */}
                {step === 3 && (
                    <>
                        <p><strong>Nombre:</strong> {name}</p>
                        <p><strong>Apellidos:</strong> {lastName}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Teléfono:</strong> {phone}</p>

                        <button type="button" onClick={() => setStep(2)}>
                            Atrás
                        </button>

                        <button type="submit">
                            Enviar
                        </button>
                    </>
                )}

            </form>
        </div>
    )
}