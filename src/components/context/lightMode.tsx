import { createContext, useState, useEffect } from "react";

export const LightModeContext = createContext<{
  lightMode: boolean;
  setLightMode: (mode: boolean) => void;
} | undefined>(undefined);

export const LightModeProvider = ({ children }: { children: React.ReactNode }) => {
  // مقدار اولیه را از localStorage دریافت کن
  const [lightMode, setLightMode] = useState(() => {
    return JSON.parse(localStorage.getItem("lightMode") || "false");
  });

  // ذخیره مقدار جدید در localStorage در هنگام تغییر
  useEffect(() => {
    localStorage.setItem("lightMode", JSON.stringify(lightMode));
  }, [lightMode]);

  return (
    <LightModeContext.Provider value={{ lightMode, setLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};
