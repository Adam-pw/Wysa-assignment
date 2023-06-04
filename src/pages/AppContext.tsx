import { createContext, useEffect, useState } from "react";

export const Color_data = createContext(null);

function Context({ children }: any) {
  const [colors, setColors] = useState<any>({
    color1: "#DDEEED",
    color2: "#FDF1E0",
  });

  useEffect(() => {
    
  }, []);

  return (
    <Color_data.Provider value={{ colors, setColors } as any}>
      <div
        className={`bg-gradient-to-bl from-[${colors.color1}] to-[${colors.color2}]`}
      >
        {children}
      </div>
    </Color_data.Provider>
  );
}

export default Context;
