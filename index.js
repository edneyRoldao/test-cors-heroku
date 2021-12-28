const PORT = process.env.PORT || 3030;
const express = require('express');

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", '*');
    res.header("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
})

app.use(express.json());

app.get('/test-cors', (req, res) => {
    res.status(200).json({
        message: 'TEST CORS - service is working'        
    });
})

app.listen(PORT, () => {
    console.log('Test working');
});
