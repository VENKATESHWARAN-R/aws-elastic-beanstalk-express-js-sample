const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Vaa Venkat!, Nee Varuvanu enaku theriyum'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
