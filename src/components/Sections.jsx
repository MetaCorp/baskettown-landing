import React from "react";
import classnames from "classnames";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import { ArrowDropDownCircleOutlined } from "@material-ui/icons";

import Section1 from "./sections/Section1";

const Sections = props => {
  const { className, hideBackground, ...restProps } = props;
  const classes = useStyles();

  return (
    <div className={classnames(classes.root, className)} {...restProps}>
      <Section1 id="section1" className={classes.section1} />
      <div className={classes.section1NextSection}>
        <IconButton
          aria-label="Goto next section"
          className={classes.section1NextSectionIconButton}
          href="#section2"
        >
          <ArrowDropDownCircleOutlined fontSize="large" />
        </IconButton>
      </div>
      <div id="section2" />
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  section1: { minHeight: "92vh" },
  section1NextSection: {
    minHeight: "8vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  section1NextSectionIconButton: { color: "black" }
});

export default Sections;
