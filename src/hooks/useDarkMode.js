import useLocalStorage from './localStorage';
import { useEffect } from 'react';

const useDarkMode = (darkMode) => {  
    const [value, setValue] = useLocalStorage(darkMode);
     useEffect(() =>{
         if (value) {
            window.document.body.classList.add("dark-mode");
        } else {
            window.document.body.classList.remove("dark-mode");
           }
     }, [value]);
    
 return [value, setValue];
 
}


export default useDarkMode