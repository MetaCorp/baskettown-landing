import React from "react";
import classnames from "classnames";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import { ArrowDropDownCircleOutlined } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import Section1 from "./sections/Section1";
import { useSetState } from "react-use";

const Sections = props => {
  const { className, hideBackground, ...restProps } = props;
  const classes = useStyles();
  const [formState, setFormState] = useSetState({
    EMAIL: "",
    FNAME: "",
    LNAME: ""
  });

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
          <form
            onSubmit={e => {
              e.preventDefault();
              subscribe(formState);
            }}
          >
            <TextField
              value={formState.EMAIL}
              onChange={e => setFormState({ EMAIL: e.target.value })}
              label="Email"
              type="email"
              variant="outlined"
              placeholder="example@mail.com"
            />
            <TextField
              value={formState.FNAME}
              onChange={e => setFormState({ FNAME: e.target.value })}
              label="First Name"
              type="text"
              variant="outlined"
              placeholder="Berthier"
            />
            <TextField
              value={formState.LNAME}
              onChange={e => setFormState({ LNAME: e.target.value })}
              label="Last Name"
              type="text"
              variant="outlined"
              placeholder="Corinne"
            />
            <Button variant="contained" type="submit">
              Subscribe
            </Button>
            {status === "sending" && (
              <div style={{ color: "blue" }}>Sending...</div>
            )}
            {status === "error" && (
              <div style={{ color: "red" }}>{message}</div>
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
