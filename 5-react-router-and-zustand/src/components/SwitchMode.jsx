import { useState, useEffect } from "react";
export function SwitchMode () {
    const [darkMode, setDarkMode] = useState(false);

    // Aplicar clase al body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>Cambiar Modo</button>
  )


}

