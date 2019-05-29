import React from "react";
import { makeStyles } from "@material-ui/styles";

import AppProvider from "./providers/AppProvider";
import GlobalLayout from "./layouts/GlobalLayout";
import Sections from "./components/Sections";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppProvider>
        <GlobalLayout>
          <Sections />
        </GlobalLayout>
      </AppProvider>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "100%"
  }
});

export default App;
