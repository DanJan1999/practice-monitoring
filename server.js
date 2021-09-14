const express = require(`express`);
const path = require(`path`);
const Rollbar = require(`rollbar`);

let rollbar = new Rollbar({
    accesstoken: `cf5428d6f84942aeb8e81526f6a1e49f`,
    captureUncaught: true,
    captureUnhandledRejections: true
});

const app = express();

app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `public/index.html`))
    rollbar.info(`HTML file served successfully!`)
});

const port = process.env.PORT || 4545;

app.listen(port, () => {
    console.log(`Up and running on ${port}!`)
});