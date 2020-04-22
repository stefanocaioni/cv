import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import reload from 'reload';
import App from './App';
import Footer from './components/Footer';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { StaticRouter } from 'react-router-dom';
import { defaultTheme } from './theme';

const app = express();
const port = 3000;
const dev = process.env.NODE_ENV === 'development';

app.use(express.static('public'));
if (dev) {
  reload(app);
}

function renderFullPage(html, css) {
  return `
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
        <title>Stefano Caioni CV</title>
        <style id='jss-server-side'>${css}</style>
      </head>
      <body>
        <div id='root'>${html}</div>
        <script src='main.js' async></script>
        ${dev ? `<script src='/reload/reload.js' async></script>` : ''}
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  const sheets = new ServerStyleSheets();

  const html = renderToString(
    sheets.collect(
      <ThemeProvider theme={defaultTheme}>
        <StaticRouter location={req.url}>
          <CssBaseline />
          <Container maxWidth='sm'>
            <App />
            <Footer />
          </Container>
        </StaticRouter>
      </ThemeProvider>,
    ),
  );

  const css = sheets.toString();

  res.send(renderFullPage(html, css));
}

app.use(handleRender);
app.listen(port, () => console.log(`🙉 Server is listening on port http://localhost:${port}`))