import React, {useState} from 'react';
import { Switch } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';





function Toggle() {

const [darkMode, setDarkMode] = useState(false);

const darkTheme = createMuiTheme(
    {
        palette: {
            type: "dark",
        },
    }
);

const lightTheme = createMuiTheme({});
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </ThemeProvider>
    );
}

export default Toggle;