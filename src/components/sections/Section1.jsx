import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import classnames from "classnames";

import whiteArchitecture from "../../assets/images/whiteArchitecture.jpg";

const AppBackground = props => {
  const { className, ...restProps } = props;
  const classes = useStyles();
  const [backgroundIsBlurred, setbackgroundIsBlurred] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setbackgroundIsBlurred(true);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={classnames(
        classes.root,
        { [classes.rootBlurred]: backgroundIsBlurred },
        className
      )}
      {...restProps}
    />
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.default,
    backgroundImage: `url(${whiteArchitecture})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    transition: "filter 4s"
  },
  rootBlurred: {
    filter: "blur(4px)"
  }
}));

export default AppBackground;
