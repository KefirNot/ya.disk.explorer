import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffcc00',
        },
    },
});

export default (props) => <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;