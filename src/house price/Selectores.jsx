import React, { useState } from 'react';
import '../app.css'

const Selectores = () => {
    const [formData, setFormData] = useState({
        Tipo: 'Piso',
        Municipio: '',
        Metros: '',
        Habitaciones: '',
        Garaje: 'Sí',
        Ascensor: 'Sí',
        Exterior: 'Sí',
    });

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        const form = {
            Tipo: parseInt(formData.Tipo === 'Piso' ? 0 : 1, 10),
            Municipio: formData.Municipio,
            Metros: parseInt(formData.Metros, 10),
            Habitaciones: parseInt(formData.Habitaciones, 10),
            Garaje: formData.Garaje === 'Sí' ? 1 : 0,
            Ascensor: formData.Ascensor === 'Sí' ? 1 : 0,
            Exterior: formData.Exterior === 'Sí' ? 1 : 0,
        };

        try {
            console.log('Datos enviados:', JSON.stringify(form));

            const response = await fetch('http://127.0.0.1:8000/api/getHousePrice/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error en la solicitud: ${errorData.error}`);
            }

            const data = await response.json();
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 3000);
            setResponse(data.price);
            console.log('Success:', data);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const Resultado = () => {
        const min = response * 0.8;
        const max = response * 1.2;

        return (
            <>
                {loading ? (
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <div className='h-full min-h-[320px] w-full flex flex-col justify-between text-center'>
                        <h2 className='text-white text-2xl sm:text-start  font-bold'>Estimated price range:</h2>
                        <p className='text-white text-3xl font-bold'>{min}  -  {max} €</p>
                        <button className='bg-yellow-600 text-white border-2 p-2 rounded-md uppercase font-bold' onClick={() => setResponse(null)}>Recalculate</button>
                    </div>
                )}
            </>
        );
    }

    return (
        <>
            {response ? (
                <Resultado />
            ) : (
                <div className='flex flex-col justify-center gap-2 text-lg'>
                    <SelectInput
                        label="¿Es un piso?"
                        name="Tipo"
                        options={["Piso", "Casa/Chalet"]}
                        value={formData.Tipo}
                        onChange={handleInputChange}
                    />
                    <MunicipioSelector
                        name="Municipio"
                        value={formData.Municipio}
                        onChange={handleInputChange}
                    />
                    <NumberInput
                        label="Metros cuadrados:"
                        name="Metros"
                        placeholder="90 m²"
                        value={formData.Metros}
                        onChange={handleInputChange}
                    />
                    <NumberInput
                        label="Número de habitaciones:"
                        name="Habitaciones"
                        placeholder="3 habs"
                        value={formData.Habitaciones}
                        onChange={handleInputChange}
                    />
                    <SelectInput
                        label="¿Tiene garaje incluido?"
                        name="Garaje"
                        options={["Sí", "No"]}
                        value={formData.Garaje}
                        onChange={handleInputChange}
                    />
                    <SelectInput
                        label="¿Tiene ascensor?"
                        name="Ascensor"
                        options={["Sí", "No"]}
                        value={formData.Ascensor}
                        onChange={handleInputChange}
                    />
                    <SelectInput
                        label="¿Es exterior?"
                        name="Exterior"
                        options={["Sí", "No"]}
                        value={formData.Exterior}
                        onChange={handleInputChange}
                    />
                    <button
                        className='bg-yellow-600 text-white border-2 p-2 rounded-md uppercase font-bold'
                        onClick={handleSubmit}
                    >
                        Calculate price
                    </button>
                </div>
            )}
        </>
    );

}


const SelectInput = ({ label, name, options, value, onChange }) => (
    <div className='flex gap-1 justify-between'>
        <label className='text-white w-1/2 m-1 rounded'>{label}</label>
        <select
            className='w-1/2 m-1 rounded'
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
        >
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

const NumberInput = ({ label, name, placeholder, value, onChange }) => {
    const handleChange = (e) => {
        const { value } = e.target;
        if (/^\d*$/.test(value)) {
            onChange(name, value);
        }
    };

    return (
        <div className='flex gap-1 justify-between'>
            <label className='text-white w-1/2 m-1 rounded'>{label}</label>
            <input
                className='w-1/2 m-1 pl-1 rounded'
                type="number"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    );
};

const MunicipioSelector = ({ name, value, onChange }) => {
    const municipios = [
        '', 'Aiora', 'Albors', 'Arrancapins', 'Barrio de Favara', 'Benicalap', 'Beniferri',
        'Benimaclet', 'Beteró', 'Campanar', 'Camí Fondo', 'Camí Reial', 'Camí de Vera',
        'Ciutat Fallera', 'Ciutat Jardí', 'Ciutat Universitària', 'Ciutat de les Arts i de les Ciencies',
        'El Botànic', 'El Cabanyal-El Canyamelar', 'El Calvari', 'El Carme', 'El Grau', 'El Mercat',
        'El Pilar', 'El Pla del Remei', 'Els Orriols', 'En Corts', 'Exposició', 'Fonteta de Sant Lluìs',
        'Gran Vía', 'Jaume Roig', "L'Amistat", "L'Hort de Senabre", "L'Illa Perduda", 'La Carrasca',
        'La Creu Coberta', 'La Creu del Grau', 'La Fontsanta', 'La Llum', 'La Petxina', 'La Punta',
        'La Raiosa', 'La Roqueta', 'La Seu', 'La Vega Baixa', 'La Xerea', 'Les Tendetes', 'Malilla',
        'Marxalenes', 'Mestalla', 'Mont-Olivet', 'Morvedre', 'Na Rovella', 'Natzaret', 'Nou Benicalap',
        'Nou Campanar', 'Nou Moles', 'Patraix', 'Penya-Roja', 'Playa de la Malvarrosa', 'Russafa',
        'Safranar', 'Sant Antoni', 'Sant Francesc', 'Sant Isidre', 'Sant Llorenç', 'Sant Marcellí',
        'Sant Pau', 'Soternes', 'Tormos', 'Torrefiel', 'Tres Forques', 'Trinitat', 'Vara de Quart', 'Otro'
    ];

    return (
        <div className='flex gap-1 justify-between'>
            <label className='text-white w-1/2 m-1 rounded' htmlFor="municipio-selector">Selecciona un municipio:</label>
            <select
                className='w-1/2 m-1 rounded'
                id="Municipio"
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
            >
                <option value="">Selecciona un municipio</option>
                {municipios.map((municipio) => (
                    <option key={municipio} value={municipio}>
                        {municipio}
                    </option>
                ))}
            </select>
        </div>
    );
};



export default Selectores;
