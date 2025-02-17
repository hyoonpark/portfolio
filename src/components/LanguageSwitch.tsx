import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md text-sm font-medium 
      text-gray-700 hover:text-indigo-600 dark:text-gray-300 
      dark:hover:text-indigo-400 transition-colors duration-200"
    >
      {i18n.language === 'ko' ? 'EN' : 'KO'}
    </button>
  );
};

export default LanguageSwitch; 