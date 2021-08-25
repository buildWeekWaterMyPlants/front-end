1. hooks
    a. useForm:
        takes an initial state and returns formdata that holds the data and a handle change function for inputs and a reset functions that resets the state.
    b. useValidation:
        takes the form state, a yup schema, and handleChange function, and then returns a disbaled boolean that represents whether the form should be disbaled, a form errors object that hold all the error messages, and a change and validate function that combines the change function and the validation process.
