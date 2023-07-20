import { useState, useEffect } from "react";
import ColorDictionary from "../dictionaries/colors";

const useTypeColors = (types) => {
  const getTypeColor = (types) => {
    const firstColor = types?.[0]?.name;
    return ColorDictionary[firstColor] || "#000";
  };

  const getTypeColors = (types) => {
    return types?.map((type) => ColorDictionary[type.name] || "#000");
  };
  useEffect(() => {
    setColors(getTypeColors(types));
    setColor(getTypeColor(types));
  }, [types]); 
  const [color, setColor] = useState(getTypeColor(types));
  const [colors, setColors] = useState(getTypeColors(types));
  return { color, colors};
};

export default useTypeColors;
