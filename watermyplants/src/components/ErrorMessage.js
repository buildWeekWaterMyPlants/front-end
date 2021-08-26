import React from 'react'

export default function ErrorMessage(props) {
    const { formErrors } = props
    return (
        <div>
            {Object.keys(formErrors).map((err, index) =>
                <div key={index} className="text-red-500">{formErrors[err]}</div>
            )}
        </div>
    )
}
