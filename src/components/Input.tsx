import React from "react";

type InputProps = {
    placeholder: string;
    value: string;
    handleCode: (string) => void;
};

const Input = ({placeholder, value, handleCode}: InputProps) => {
    return (
        <input
            type="text"
            name="code"
            placeholder={placeholder}
            className="input-textfield"
            value={value}
            onChange={(event) => handleCode(event.target.value)}
        />
    );
};

export default Input;
