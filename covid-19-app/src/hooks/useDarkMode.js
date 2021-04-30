import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = (key, intialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, intialValue)

    useEffect(() => {
        const body = document.querySelector('body')
        if (darkMode === true) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
    }, [darkMode])
    return [darkMode, setDarkMode]
}

export default useDarkMode;