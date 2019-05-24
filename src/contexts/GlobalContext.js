import { createContext } from "react";

import darkTheme from "../themes/darkTheme";

export const defaultValue = {
  theme: darkTheme
};

const GlobalContext = createContext(defaultValue);

export default GlobalContext;
