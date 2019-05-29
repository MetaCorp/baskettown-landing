import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import classnames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";

import Logo from "../assets/generated/Logo";
import { Typography } from "@material-ui/core";

const NavBar = props => {
  const { className, hideBackground, ...restProps } = props;
  const classes = useStyles();
  const handleMenutItemLogo = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppBar
      className={classnames(
        classes.root,
        { [classes.rootHiddenBackground]: !!hideBackground },
        className
      )}
      {...restProps}
    >
      <Toolbar>
        <MenuItem onClick={handleMenutItemLogo}>
          <Logo className={classes.logo} />
          <Typography color="inherit">Viking</Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.black,
    transitionProperty: "box-shadow, background-color",
    backgroundColor: theme.palette.common.white
  },
  rootHiddenBackground: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  logo: {
    height: 48,
    width: "auto"
  }
}));

export default NavBar;
