const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.use(express.static(__dirname + '/dist/frontend'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/frontend/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT)
})