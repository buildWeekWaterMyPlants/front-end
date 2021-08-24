import * as yup from "yup";
import { useState } from "react";

const useValidation = (formValues, schema, handleChanges) => {
    const [formErrors, setFormErrors] = useState();
    const [disabled, setDisabled] = useState();

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: "" }))
            .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
    };

    const changeAndValidate = (e) => {
        handleChanges(e)
        const { value, type, name, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        validate(name, newValue)
    } 

    useEffect(() => {
        schema.isValid(formValues).then((valid) => setDisabled(!valid));
    }, [formValues]);
    
    return [disabled, formErrors, changeAndValidate];
};

export default useValidation;