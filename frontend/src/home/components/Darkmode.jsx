import { useState, useEffect } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark' || (currentTheme === null && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      setIsDarkMode(false);
      localStorage.setItem('theme', 'light');
    } else {
      htmlElement.classList.add('dark');
      setIsDarkMode(true);
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-destaque-claro dark:bg-destaque-claro text-texto-secundario dark:texto-secundario position-absolute cursor-pointer absolute m-7 transition-all duration-150 ease-in-out"
    >
      {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
}

export default DarkModeButton;