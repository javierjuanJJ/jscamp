
export function handleSubmit(event, name, lastName, email, phone,) {
    event.preventDefault()

    const valuesForm = {
        nameForm: name,
        lastNameForm: lastName,
        emailForm: email,
        phoneForm: phone
    }

    onValidate(valuesForm)
}

export const useSearchForm = ({ name, lastName, email, phone, resetForm }) => {

    const handleSubmit = (event) => {
        event.preventDefault()

        const valuesForm = {
            nameForm: name,
            lastNameForm: lastName,
            emailForm: email,
            phoneForm: phone
        }

        onValidate(valuesForm)
        
    }


    function onValidate(valuesForm) {
        let isValid = true;
        
        if (valuesForm.nameForm.trim() === '') {
            alert(valuesForm.nameForm, 'El nombre es obligatorio');
            isValid = false;
        }

        if (valuesForm.lastNameForm.trim() === '') {
            alert(valuesForm.lastNameForm.value, 'Los apellidos son obligatorios');
            isValid = false;
        }

        if (!validateEmail(valuesForm.emailForm)) {
            console.log(valuesForm.emailForm)
            alert('Correo electrónico inválido');
            isValid = false;
        }

        if (!validatePhone(valuesForm.phoneForm.trim())) {
            console.log(valuesForm.phoneForm.trim())
            alert('Teléfono inválido (9 dígitos)');
            isValid = false;
        }

        if (isValid) {
            alert('Formulario enviado correctamente ✅');
            resetForm();
        }
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePhone(phoneForm) {
        const regex = /^[0-9]{9}$/;
        return regex.test(phoneForm);
    }


    return {
        handleSubmit
    }
}