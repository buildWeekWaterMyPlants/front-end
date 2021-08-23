import { useState } from "react";

const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);
  
    const handleChange = (e) => {
        const { type, name, value, checked} = e.target;

        const newValue = type === "checkbox" ? checked : value;
        
        setFormData({ ...formData, [name]: newValue });
    };

    return [formData, handleChange]
}

export default useForm; 