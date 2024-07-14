import React, { useState } from 'react';
import axios from 'axios';

const Prediction = () => {
    const [datos, setDatos] = useState([]);
    const [prediccion, setPrediccion] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('http://localhost:8000/api/predecir/', {
            nombre: 'nombre_del_modelo',
            datos: datos
        });
        setPrediccion(response.data.prediccion);
    };

    return (
        <div className=' w-full h-32 bg-black'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={datos}
                    className='text-black'
                    onChange={(e) => setDatos(e.target.value.split(',').map(Number))}
                />
                <button type="submit">Predecir</button>
            </form>
            {prediccion && <div>Predicción: {prediccion}</div>}
        </div>
    );
}

export default Prediction
