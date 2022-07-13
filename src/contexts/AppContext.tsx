import { TheatersSharp } from "@mui/icons-material";
import { useContext, useState, useEffect, createContext } from "react";

type appContextType = {
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
    themeClass: any;
}

const appContextDefaultValues: appContextType = {
    isDark: false,
    setIsDark: () => { },
    themeClass: {},
}

const themes = {
    light: {
        text: 'text-black',
        bg: 'from-slate-200 via-slate-200 to-white',
        bg1: 'from-white via-white to-slate-100',
        textAlt: 'text-white',
        nav: 'bg-stone-100 text-black',
        bgAlt: 'bg-slate-200',
        bgAlt1: 'bg-white',
    },
    dark: {
        text: 'text-white',
        bg: 'from-slate-800 via-slate-800 to-slate-800',
        bg1: 'from-slate-800 via-slate-800 to-slate-800',
        textAlt: 'text-white',
        nav: 'bg-stone-800 text-white',
        bgAlt: 'bg-stone-800',
        bgAlt1: 'bg-black',
    }
}

const AppContext = createContext<appContextType>(appContextDefaultValues);

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState(false); 
    const [themeClass, setThemeClass] = useState(themes.light)


    const saveTheme = () => {
        if (isDark) {
            localStorage.setItem('theme', "dark");
        }else{
            localStorage.setItem('theme', "light");
        }
    }

    const getSavedTheme = () => {
        const localIsDark = localStorage.getItem('isDark');
        if (localIsDark) {
            if (localIsDark === "dark") {
                setIsDark(true);
                setThemeClass(themes.dark);
            }else{
                setIsDark(false);
                setThemeClass(themes.light); 
            }
        }
    }

    useEffect(() => {
        saveTheme();
        setThemeClass(isDark?themes.dark:themes.light)
    }, [isDark]);
    
    useEffect(() => {
        getSavedTheme();
    }, []);

    return (
        <AppContext.Provider value={{ isDark, setIsDark, themeClass }}>
            {children}
        </AppContext.Provider>
    );
}
