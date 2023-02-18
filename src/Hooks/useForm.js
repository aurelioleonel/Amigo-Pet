import React from 'react'

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Informe um e-mail válido",
    },
    password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        message: "A senha deve conter ao menos um número, \n" +
            "deve conter ao menos uma letra minúscula, \n" +
            "deve conter ao menos uma letra maiúscula, \n" +
            "deve conter ao menos um caractere especial, \n" +
            "deve conter no minimo 8 dos caracteres mencionados"
    },
    number: {
        regex: /^\d+$/,
        message: "Informe apenas números",
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate(value) {

        if (type === false) return true;

        if (value.length === 0) {
            setError("Preencha um valor")
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message)
            return false
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({ target }) {
        if (error) validate(target.value);
        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),

    }
}

export default useForm
