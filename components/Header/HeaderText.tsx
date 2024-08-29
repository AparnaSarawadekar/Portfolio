import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Buttons from "./Buttons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(6),
      },
    },
    title: {
      paddingRight: "20%",
    },
    hi: {
      color: "red",
    },
    paragraph: {
      paddingRight: "20%",
    },
  })
);

function HeaderText() {
  const classes = useStyles();
  return (
    <Box
      component="main"
      role="main"
      itemScope
      itemType="https://schema.org/Person"
      className={classes.root}
    >
      <meta itemProp="familyName" content="Sarawadekar" />
      <meta itemProp="gender" content="https://schema.org/Female" />
      <meta itemProp="name" content="Aparna Vivek Sarawadekar" />
      <Typography
        className={classes.title}
        variant="h2"
        component="h1"
        gutterBottom
      >
        <span className={classes.hi}>Hi, </span>I'm{" "}
        <span itemProp="givenName">Aparna</span>
      </Typography>
      <Typography
        variant="h4"
        itemProp="disambiguatingDescription"
        component="h2"
        gutterBottom
      >
        A fullstack developer
      </Typography>
      <Typography itemProp="knowsAbout" className={classes.paragraph}>
        {/* I specialize in developing and deploying responsive websites and web
        applications */}
        Welcome to my portfolio! {" "}
        {/* I provide sustainable and scalable solutions.{" "} */}
        {/* Nothing brings me more excitement and motivation than
        building something out of nothing. */}
        From developing RESTful APIs and optimizing CI/CD pipelines to implementing machine learning models for data analysis, I have consistently delivered high-impact solutions.
        Explore my projects here and feel free to connect with me on LinkedIn!
      </Typography>
      <Buttons />
    </Box>
  );
}

export default HeaderText;
