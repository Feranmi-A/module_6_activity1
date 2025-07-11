const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

const appName = process.env.APP_NAME || "DefaultApp";

app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by ${appName}`);
});

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});