import React, { useState, useCallback } from "react";
import toQueryString from "to-querystring";
import jsonp from "jsonp";

import { makeStyles } from "@material-ui/styles";

import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import SubscribeNewsletterTooltip from "./SubscribeNewsletterTooltip";

const url =
  "https://gmail.us20.list-manage.com/subscribe/post?u=8d7edf0333642e86603b9a948&id=8dc71e9e5d";

const tooltipTimeout = 5000;

const getAjaxUrl = url => url.replace("/post?", "/post-json?");

const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return re.test(String(email).toLowerCase());
};

const translateError = err => {
  if (err.includes("This email cannot be added to this list"))
    return "Cet email ne peut pas être ajouter à la newsletter. Veuillez entrer une adresse email différente.";

  return err;
};

const SubscribeNewsletter = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = useCallback(data => {
    if (!validateEmail(data.EMAIL)) {
      setMessage("Email non valide.");
      setTooltipOpen(true);
      setTimeout(() => setTooltipOpen(false), tooltipTimeout);
      return;
    }

    const params = toQueryString(data);
    const url2 = getAjaxUrl(url) + "&" + params;
    setStatus("loading");
    jsonp(
      url2,
      {
        param: "c"
      },
      (err, data) => {
        if (err) {
          setStatus("error");
          setMessage(translateError(err));
          setTooltipOpen(true);
          setTimeout(() => setTooltipOpen(false), tooltipTimeout);
        } else if (data.result !== "success") {
          setStatus("error");
          setMessage(translateError(data.msg));
          setTooltipOpen(true);
          setTimeout(() => setTooltipOpen(false), tooltipTimeout);
        } else {
          setStatus("success");
          setMessage(data.msg);
        }
      }
    );
  }, []);

  return status === "success" ? (
    <Paper className={classes.newsletterSuccess}>
      <div style={{ color: "green" }}>Inscrit à la newsletter !</div>
    </Paper>
  ) : (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubscribe({ EMAIL: email });
      }}
    >
      <SubscribeNewsletterTooltip
        open={tooltipOpen}
        title={message}
        placement="top"
      >
        <Paper className={classes.newsletter}>
          <InputBase
            value={email}
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
            placeholder="Ton email"
          />
          <Button
            className={classes.subscribe}
            variant="contained"
            color="primary"
            type="submit"
            disabled={status === "loading"}
          >
            S'inscrire
          </Button>
        </Paper>
      </SubscribeNewsletterTooltip>
    </form>
  );
};

const useStyles = makeStyles({
  newsletter: {
    padding: "8px 8px 8px 16px",
    maxWidth: 342,
    maxHeight: 52
  },
  newsletterSuccess: {
    maxWidth: 342,
    maxHeight: 52,
    minWidth: 342,
    minHeight: 52,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  subscribe: {
    marginLeft: 8
  }
});

export default SubscribeNewsletter;
