import React from 'react'
import {createTheme} from '@mui/material/styles'
import Head from 'next/head';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import classes from '../utils/classes';

function Layout({title, description, children}) {

  const theme = createTheme({
    typography: {
      h1:{
        fontSize:'1.6rem',
        fontWeight:'400',
        margin: '1rem 0',
      },
      h2:{
        fontSize:'1.4rem',
        fontWeight:'400',
        margin: '1rem 0',
      },
    },
    palette: {
      mode:'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080'
      },
    },
  })
  return (
    <>
      <Head>
        <title>{title ? `${title} - Sanity Amazona` : 'Sanity Amazona'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={classes.appbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography sx={classes.brand}>Amazona</Typography>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={classes.main}>
          {children}
        </Container>
        <Box component="footer" sx={classes.footer}>
          <Typography>All rights reserved. Sanity Amazona.</Typography>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Layout