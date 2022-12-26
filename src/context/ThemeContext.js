import { createContext } from "react";

// create a new context
export const ThemeContext = createContext()


export function ThemeProvider ({ children }) {

  // we can add custom logic


  return (
    <ThemeContext.Provider value={{ color: 'blue'}}>
        {children}
    </ThemeContext.Provider>
  )

}