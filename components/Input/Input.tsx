"use client"
import React, { useState } from "react";
import Image from 'next/image';
import "./Input.css";

interface InputProps {
    type?: string;
    label?: string;
    className?: string;
    icon?: string;
    id?:string;
}

const Input: React.FC<InputProps> = ({ type = "password", label = "", className, icon, id, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={`input-container ${className}`}>

            <input type={showPassword ? "text" : type} id={id} required autoFocus {...props} />
            <label htmlFor={id} className="label">
                {label}
            </label>
            {icon ?
                <Image
                    src={icon}
                    width={15}
                    height={15}
                    alt="icon"
                    className={`input-image ${type === "password" ? "cursor-pointer" : ""}`}
                    onClick={togglePasswordVisibility}
                /> : null
            }


            <div className="underline"></div>
        </div>
    );
};

export default Input;
