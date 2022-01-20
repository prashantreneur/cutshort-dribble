import React from 'react';
import classes from './Input.module.css'

const Input = ({ value, label, name, placeholder, type, onChange }) => {
    return (
        <div className={classes.container}>
            <label htmlFor={name}>{label}</label>
            <input className={classes.input}
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}


export default Input;
