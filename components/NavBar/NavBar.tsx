"use client"
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import "@/lib/i18n"
import { logoIcon } from '@/constants'
import Image from 'next/image'
import "./NavBar.css"

const NavBar = ({ hidden }: { hidden?: boolean }) => {

    const [currentlanguage, setCurrentLanguage] = useState("pt");
    const { t, i18n: { changeLanguage, language } } = useTranslation()

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            setCurrentLanguage(savedLanguage);
            changeLanguage(savedLanguage);
        }
    }, []);

    const handleChangeLanguage = () => {
        const newLanguage = currentlanguage === "en" ? "pt" : "en";
        changeLanguage(newLanguage);
        setCurrentLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

    return (
        <header>
            <Image
                src={logoIcon}
                width={50}
                height={50}
                alt="logo image"
            />
            <nav>
                <a href="#">Index</a>
                <a href="#">Index</a>
                <a href="#">Index</a>
            </nav>
            <div className="btn_translate">
                <div className={`${hidden ? "hidden" : ""}`}>
                    <button onClick={handleChangeLanguage}>{t('translate')}</button>
                </div>
            </div>
        </header>


    )
}

export default NavBar