
async function getPrediction(features) {
    try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ features: features })
        });
        const data = await response.json();
        console.log('Prediction:', data.prediction);

        if (data.prediction === 1) {
            alert('⚠️ Threat Detected!');
        } else {
            alert('✅ Safe - No Threat Detected!');
        }

        return data.prediction;
    } catch (error) {
        console.error('Error:', error);
    }
}
