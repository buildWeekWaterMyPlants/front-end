import * as yup from 'yup';

const plantSchema = yup.object().shape({
    nickname: yup
        .string()
        .trim()
        .required('Nickname is required')
        .min(2, 'Nickname must be at least 2 characters'),
    species: yup
        .string()
        .trim()
        .required('Species is required'),
    h2oFrequency: yup
        .string()
        .oneOf(['1', '3', '5', '7'], 'Water Frequency is required'),
})

export default plantSchema;