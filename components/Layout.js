import React from "react";
import Head from "next/head";
import classes from "./style.module.css";
// import useStyles from "../utils/styles";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Link,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

export default function Layout({ title, children, description }) {
  // const classes = useStyles();
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: 'light',
      primary: {
        main:'#f0c000'
      },
      secondary: {
        main:'#208080'
      }
    }
  });
  return (
    <div>
      <Head>
        <title>{title ? title : "Amazone"}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.amil}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>
                  Amazona
                </Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div style={{ marginRight: "10px" }}>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
            </div>
            <div>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Next Amazone</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
