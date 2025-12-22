// pages/Contact.jsx
import { useId, useState } from "react"
import { useSearchForm } from "../hooks/useForm.js"
export function Contact() {

    const idName = useId()
    const idLastName = useId()
    const idEmail = useId()
    const idPhone = useId()

    // Estados del formulario
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [isDisabled, setIsDisabled] = useState(false)

    const resetForm = () => {
        setName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setIsDisabled(false)
        const button = document.getElementById("submitForm")
        button.disabled = false
    }

    const {
        handleSubmit,
    } = useSearchForm({ idName, idLastName, idEmail, idEmail, idPhone, resetForm })
    return (
        <div className="container">
            <h2>Formulario de Contacto</h2>

            <form onSubmit={handleSubmit} id="contactForm" noValidate>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        name={idName}
                        value={name}
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)} />
                    <small className="error"></small>
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Apellidos</label>
                    <input name={idLastName}
                        type="text"
                        value={lastName}
                        id="lastname"
                        onChange={(e) => setLastName(e.target.value)} />
                    <small className="error"></small>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        name={idEmail}
                        type="email"
                        value={email}
                        id="email"
                        onChange={(e) => setEmail(e.target.value)} />
                    <small className="error"></small>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        name={idPhone}
                        value={phone}
                        type="tel"
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)} />
                    <small className="error"></small>
                </div>

                <button id="submitForm" onClick={() => {
                    setIsDisabled(!isDisabled)
                    const button = document.getElementById("submitForm")
                    button.disabled = isDisabled
                }}
                    type="submit">Enviar</button>
            </form>
        </div>
    )
}