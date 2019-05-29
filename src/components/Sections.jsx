import React from "react";
import classnames from "classnames";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import { ArrowDropDownCircleOutlined } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MailchimpSubscribe from "react-mailchimp-subscribe";

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
      <MailchimpSubscribe
        url={
          "https://gmail.us20.list-manage.com/subscribe/post?u=8d7edf0333642e86603b9a948&id=8dc71e9e5d"
        }
        render={({ subscribe, status, message }) => (
          <form onSubmitted={subscribe}>
            <TextField
              label="Email"
              type="email"
              autocapitalize="off"
              autocorrect="off"
              name="MERGE0"
              id="MERGE0"
              size="25"
              variant="outlined"
              placeholder="example@mail.com"
            />
            <TextField
              label="First Name"
              type="text"
              name="MERGE1"
              id="MERGE1"
              size="25"
              variant="outlined"
              placeholder="Berthier"
            />
            <TextField
              label="Last Name"
              type="text"
              name="MERGE2"
              id="MERGE2"
              size="25"
              variant="outlined"
              placeholder="Corinne"
            />
            <Button variant="contained" type="submit" />
            {status === "sending" && (
              <div style={{ color: "blue" }}>sending...</div>
            )}
            {status === "error" && (
              <div
                style={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === "success" && (
              <div style={{ color: "green" }}>Subscribed !</div>
            )}
          </form>
        )}
      />
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
