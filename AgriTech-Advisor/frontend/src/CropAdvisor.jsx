import { useState } from 'react';
import './App.css';

function CropAdvisor() {
    const [formData, setFormData] = useState({ 
        N: '', P: '', K: '', temperature: '', humidity: '', ph: '', rainfall: '' 
    });
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const updateValue = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const getRecommendation = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/api/predict-crop', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            setResult(data.recommendedCrop);
        } catch (err) {
            console.error(err);
            alert("Check if backend is running on 8080!");
        } finally {
            setLoading(false);
        }
    };

  
    return (
        <div className="advisor-container">
            <h2>AgriSmart Advisory</h2>
            <p className="subtitle">Enter soil and climate data for precision agriculture</p>
            
            <form onSubmit={getRecommendation} className="form-grid">
                <input name="N" type="number" placeholder="Nitrogen (N)" onChange={updateValue} required />
                <input name="P" type="number" placeholder="Phosphorus (P)" onChange={updateValue} required />
                <input name="K" type="number" placeholder="Potassium (K)" onChange={updateValue} required />
                <input name="ph" type="number" step="0.1" placeholder="Soil pH" onChange={updateValue} required />
                <input name="temperature" type="number" step="0.1" placeholder="Temp (°C)" onChange={updateValue} required />
                <input name="humidity" type="number" step="0.1" placeholder="Humidity (%)" onChange={updateValue} required />
                <input name="rainfall" type="number" step="0.1" placeholder="Rainfall (mm)" className="full-width" onChange={updateValue} required />
                
                <button type="submit" disabled={loading}>
                    {loading ? "AI is Analyzing..." : "Get Prediction"}
                </button>
            </form>

            {result && (
                <div className="result-card">
                    <p style={{margin: 0, color: '#666'}}>Recommended Crop:</p>
                    <h1 style={{color: '#1b5e20', fontSize: '2.5rem', marginTop: '10px'}}>{result.toUpperCase()} 🌱</h1>
                </div>
            )}
        </div>
    );
}

export default CropAdvisor;