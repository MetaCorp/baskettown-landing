import { createContext } from "react";

import lightTheme from "../themes/lightTheme";

export const defaultValue = {
  theme: lightTheme
};

const GlobalContext = createContext(defaultValue);

export default GlobalContext;
