import React, { useState} from 'react';
import './App.scss';
import Toggle from './Components/Toggle';
import Routers from './Components/Routers';
import { Paper, Switch } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function App() {


     const [darkMode, setDarkMode] = useState(false);

     const darkTheme = createMuiTheme({
       palette: {
         type: "dark",
       },
     });

     const lightTheme = createMuiTheme({});
    
  return (

    <ThemeProvider theme = {darkMode ? darkTheme : lightTheme} >

      <Paper>
<Switch checked = {darkMode} onChange = {() => setDarkMode(!darkMode)} />
      <Routers />
      </Paper>
    </ThemeProvider>

    

    
  );
}

export default App;
