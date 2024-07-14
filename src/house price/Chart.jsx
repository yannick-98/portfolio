import React, { useState, useEffect } from 'react';

const Chart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // Hacer la solicitud HTTP al backend de Django
        fetch('http://127.0.0.1:8000/api/chart/')
            .then(response => response.json())
            .then(data => {
                setChartData(data.chart_data);
            })
            .catch(error => {
                console.error('Error fetching chart data:', error);
            });
    }, []);

    if (!chartData) {
        return <div>Loading...</div>;
    }

    // Procesar la imagen codificada en base64
    const binaryData = atob(chartData);
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < binaryData.length; i++) {
        uint8Array[i] = binaryData.charCodeAt(i);
    }

    const blob = new Blob([uint8Array], { type: 'image/png' });
    const imageUrl = URL.createObjectURL(blob);

    return (
        <div>
            <img src={imageUrl} alt="Chart" />
        </div>
    );
}

export default Chart
