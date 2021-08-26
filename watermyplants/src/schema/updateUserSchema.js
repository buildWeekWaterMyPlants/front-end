import * as yup from 'yup';

const updateUserSchema = yup.object().shape({
    phonenumber: yup
        .number()
})

export default updateUserSchema;
