import { createContext, useState, useEffect } from "react";

export const LightModeContext = createContext<HTMLButtonElement>();

export const LightModeProvider = ({ children }:any) => {
  const [lightMode, setLightMode] = useState(
    localStorage.getItem("LightMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("lightMode", lightMode);
  }, [lightMode]);

  return (
    <LightModeContext.Provider value={{ lightMode, setLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};