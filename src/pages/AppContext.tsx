import { createContext, useState } from "react";

export const Color_data = createContext(null);

function Context({ children }: any) {
  const [colors, setColors] = useState<any>({
    color1: "#DDEEED",
    color2: "#FDF1E0",
  });

  return (
    <Color_data.Provider value={{ colors, setColors }}>
      {children}
    </Color_data.Provider>
  );
}

export default Context;
