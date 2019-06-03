import React, { useEffect, useCallback, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import classnames from "classnames";

import NavBar from "../components/NavBar";

const GlobalLayout = props => {
  const { className, children, ...restProps } = props;
  const classes = useStyles();
  const [hideBackground, setHideBackground] = useState(true);
  const handleWindowScroll = useCallback(e => {
    if (window.pageYOffset) setHideBackground(false);
    else setHideBackground(true);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  });

  return (
    <div
      className={classnames(classes.root, className)}
      onScroll={e => {}}
      {...restProps}
    >
      <NavBar hideBackground={hideBackground} />
      {children}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    height: "3000px",
    width: "100%"
  }
}));

export default GlobalLayout;
