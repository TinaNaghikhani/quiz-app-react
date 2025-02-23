import { createContext, useState, useEffect } from "react";

export const LightModeContext = createContext<{ lightMode: boolean; setLightMode: (mode: boolean) => void } | undefined>(undefined);

export const LightModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [lightMode, setLightMode] = useState(
    localStorage.getItem("LightMode") === "true"
  );

  useEffect(() => localStorage.setItem("lightMode", lightMode), [lightMode]);

  return (
    <LightModeContext.Provider value={{ lightMode, setLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};


