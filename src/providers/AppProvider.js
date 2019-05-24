import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { useSetState } from "react-use";

import GlobalContext, {
  defaultValue as defaultGlobalContextValue
} from "../contexts/GlobalContext";

const AppProvider = ({ children }) => {
  const [globalContextValue, setGlobalContextValue] = useSetState(
    defaultGlobalContextValue
  );
  return (
    <GlobalContext.Provider
      value={{ ...globalContextValue, setState: setGlobalContextValue }}
    >
      <ThemeProvider theme={globalContextValue.theme}>{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default AppProvider;
