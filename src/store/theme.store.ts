import { create } from "zustand";

type Theme = "light" | "dark" | "cupcake" |"coffee" | "night" | "forest" | "retro" | "halloween" | "dracula"

interface ThemeState {
    theme : Theme;
    themeMenuOpen : boolean;
    setThemeMenuOpen : (value : boolean)=>void;
    handleThemeChange: (newTheme: Theme) => void
    initializeTheme: ()=>void;
}

export const useTheme = create<ThemeState>((set , get)=>({
    theme : "dark" ,
    themeMenuOpen : false ,
    handleThemeChange(newTheme) {
    set({theme : newTheme , themeMenuOpen : false})
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    },
    setThemeMenuOpen(value) {
        set({themeMenuOpen : value})
    },
    initializeTheme() {
        const currentTheme = localStorage.getItem("theme") as Theme
        if (currentTheme){
            set({theme : currentTheme})
            const {handleThemeChange} = get()
            handleThemeChange(currentTheme)
        }else{
            const {theme} = get()
            localStorage.setItem("theme" , theme)
        }
    },
}))