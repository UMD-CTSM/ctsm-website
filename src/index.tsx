import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import routes from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const defaultTheme = responsiveFontSizes(createTheme({
  typography: {
    fontSize: 14
  },
  palette: {mode:'light'}
}), {
  
});


root.render(
  <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <RouterProvider router={routes}/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
