const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(express.json());

app.post('/api/predict-crop', (req, res) => {

    const { N, P, K, temperature, humidity, ph, rainfall } = req.body;
    
    console.log("Data received:", req.body);


    const pythonProcess = spawn('python3', ['predict.py', N, P, K, temperature, humidity, ph, rainfall]);

    pythonProcess.stdout.on('data', (data) => {
        res.json({ recommendedCrop: data.toString().trim() });
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Python Error: ${data}`);
    });
});

app.listen(8080, () => console.log('Backend live on Port 8080'));