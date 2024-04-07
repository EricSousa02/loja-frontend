"use client"
import React, { useState } from "react";
import { eyeIcon } from "@/constants";
import Image from 'next/image';

interface InputProps {
    type?: string;
    label?: string;
    className?: string;
    icon?: string;
    name?: string;
}

const Input: React.FC<InputProps> = ({ type = "password", label = "Label", className, icon = eyeIcon, name }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={`input-container ${className}`}>

            <input type={showPassword ? "text" : type} name={name} required autoFocus autoComplete="off" />
            <label htmlFor="input" className="label">
                {label}
            </label>
            <Image
                src={icon}
                width={15}
                height={15}
                alt="icon"
                className={`z-10 absolute top-1/2 right-4 transform -translate-y-1/2 ${type === "password" ? "cursor-pointer" : ""}`}
                onClick={togglePasswordVisibility}
            />

            <div className="underline"></div>
        </div>
    );
};

export default Input;
