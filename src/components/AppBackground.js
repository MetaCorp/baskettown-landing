import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import VideoCover from "react-video-cover";
import classnames from "classnames";

import VideoBackground from "../assets/videos/background.mp4";

const AppBackground = props => {
  const { className, ...restProps } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const videoRef = useRef();
  const [videoIsBlurred, setVideoIsBlurred] = useState(false);
  useEffect(() => {
    if (videoRef) videoRef.current.playbackRate = 1;
  }, [videoRef]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVideoIsBlurred(true);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={classnames(classes.root, className)} {...restProps}>
      {!isMobile && (
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted
          loop
          className={classnames(classes.video, {
            [classes.videoLight]: theme.palette.type === "light",
            [classes.videoBlurred]: videoIsBlurred
          })}
        >
          <source src={VideoBackground} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -999,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    margin: "auto",
    transition: "filter 4s"
  },
  videoBlurred: {
    filter: "blur(8px)"
  },
  videoLight: {
    filter: "invert(100%)"
  }
}));

export default AppBackground;
