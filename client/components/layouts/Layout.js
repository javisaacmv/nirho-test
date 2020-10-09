import React from 'react';
import Head from 'next/head'
import Navbar from './Navbar'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConf'


function Layout({children}) {
    return (
        <>
        <Head>
        <title>Javier Montaño - test</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
        <ThemeProvider theme={theme}>
        <Navbar>
            {children}
        </Navbar>
        </ThemeProvider>
            
        </>
        
    );
}

export default Layout;