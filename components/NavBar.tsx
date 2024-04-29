"use client"
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import "@/lib/i18n"

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
        <div className={`${hidden ? "hidden" : ""}`}>
            <button onClick={handleChangeLanguage}>{t('translate')}</button>
        </div>

    )
}

export default NavBar