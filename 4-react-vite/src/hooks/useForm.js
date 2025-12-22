
export function handleSubmit(event, idName, idLastName, idEmail, idPhone) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const valuesForm = {
        nameForm: formData.get(idName),
        lastNameForm: formData.get(idLastName),
        emailForm: formData.get(idEmail),
        phoneForm: formData.get(idPhone)
    }

    onValidate(valuesForm)
}

export const useSearchForm = ({ idName, idLastName, idEmail, idPhone, resetForm }) => {

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const valuesForm = {
            nameForm: formData.get(idName),
            lastNameForm: formData.get(idLastName),
            emailForm: formData.get(idEmail),
            phoneForm: formData.get(idPhone)
        }

        onValidate(valuesForm)
        
    }


    function onValidate(valuesForm) {
        let isValid = true;
        console.log(valuesForm.nameForm)
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