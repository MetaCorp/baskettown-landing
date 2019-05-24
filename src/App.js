import React from "react";
import { makeStyles } from "@material-ui/styles";

import AppProvider from "./providers/AppProvider";
import AppBackground from "./components/AppBackground";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppProvider>
        <AppBackground />
      </AppProvider>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%"
  }
});

export default App;
