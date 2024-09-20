const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB (ปรับให้ตรงกับการตั้งค่าของคุณ)
mongoose.connect('mongodb://mongo:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Define route
app.get('/api/users', (req, res) => {
    res.json([{ name: 'John Doe', email: 'john.doe@example.com' }]);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

