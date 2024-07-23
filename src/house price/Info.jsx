import React from 'react'
import pizzaPlot from '../assets/Distribucion_Tipo_Vivienda_Pizza.png'
import municipiosPlot from '../assets/Distribucion_Top10_Municipios.png'
import metrosPlot from '../assets/Distribucion_Metros.png'
import habitacionesPlot from '../assets/Distribucion_Habitaciones.png'
import garajeAscensorExteriorPlot from '../assets/Distribucion_Garaje_Ascensor_Exterior.png'
import metrosPrecioPlot from '../assets/Relacion_Metros_Precio.png'
import heatmap from '../assets/Heatmap.png'
import octoparse from '../assets/octoparse.JPG'
import SliderComponent from '../utils/SliderComponent.jsx'

const Info = () => {
    return (
        <div id='Info' className='w-full bg-[rgb(01,50,78)] text-white'>
            <div className='w-full max-w-[1200px] mx-auto p-2 space-y-16'>
                <h2 className='text-2xl font-bold text-center pt-2'>About this project</h2>

                <div className='flex flex-col gap-6 text-lg'>
                    <h3 className='font-bold text-lg uppercase'>Resume</h3>

                    <p>This project is a simple prediction model to estimate the selling price range of a house in the city of Valencia. The model is built in python using a decision tree algorithm with a dataset containing 1,734 examples of properties listed on idealista.com.</p>
                    <p>The frontend is developed with React.js and TailwindCSS, and the model is integrated into a backend created with Django. The data was extracted from the web using Octoparse.</p>
                </div>


                <div className='flex flex-col gap-6 text-lg'>
                    <h3 className='font-bold text-lg uppercase'>Data Extraction and Transformation (ETL)</h3>

                    <div className=''>
                        <p>The data was scraped by www.idealista.com using Octoparse, where a workflow was set up to iterate over the ads from each of the pages in the url, thus extracting the information used later to train the model.</p>
                        <img src={octoparse} alt="Scraping with Octoparse" className='w-full max-w-[800px] mx-auto p-5 ' />
                    </div>
                    <p>The data transformation process was carried out using Python and several libraries such as pandas, matplotlib, seaborn, and re. Below are the main steps:</p>
                    <ul className='space-y-4'>
                        <li><strong>Data Cleaning and Preprocessing:</strong> Functions were defined to extract numbers from text strings, classify the type of property (apartment, house/chalet, or other), and extract the municipality from the listing title. Misaligned columns were corrected to ensure that square meters and room information were in the correct columns. Property types were classified and municipalities were extracted from the listing titles.</li>
                        <li><strong>Feature Extraction:</strong> Key features such as square meters, number of rooms, and price were extracted. Prices were converted to integer values. Additional features like the presence of a garage, elevator, and whether the property is exterior were defined.</li>
                        <li><strong>Data Transformation:</strong> Categorical features (garage, elevator, exterior) were converted to binary values (Yes = 1, No = 0). Categorical variables like property type and municipality were factorized.</li>
                        <li><strong>Data Visualization:</strong> Distribution charts were generated to visualize the distribution of property types, municipalities, square meters, rooms, prices, and features such as garage, elevator, and exterior.</li>
                    </ul>

                    <div className='p-2'>
                        <SliderComponent items={distribution} /></div>
                </div>


                <div className='flex flex-col gap-6 text-lg'>
                    <h3 className='font-bold text-lg uppercase'>Model training</h3>

                    <p>The predictive model was developed using Python and libraries such as scikit-learn, matplotlib, and seaborn. The main steps were as follows:</p>
                    <ul className='space-y-4'>
                        <li><strong>Correlation Analysis:</strong> A correlation matrix and several scatter plots were generated to understand the relationships between variables.</li>
                        <li><strong>Data Preparation:</strong> The target variable (price) and independent variables (all others) were defined. Categorical variables were converted to dummy variables using one-hot encoding. Numeric features (square meters and rooms) were scaled. Data was split into training and testing sets with an 80% and 20% ratio, respectively.</li>
                        <li><strong>Model Training:</strong> A regression model based on a random forest (Random Forest) with 100 trees was used. The model was trained with the training data.</li>
                        <li><strong>Model Evaluation:</strong> Predictions were made with the test data, and the model's performance was evaluated using various metrics: R2 (0.73), MAE (73079.43), MSE (18076347565.40), and RMSE (134448.31). The percentage of actual values within a 20% prediction range was calculated.</li>
                    </ul>

                    <div className='p-2'>
                        <SliderComponent items={correlation} /></div>
                </div>



            </div>
        </div>
    )
}

const distribution = [
    {
        src: pizzaPlot,
        alt: 'Distribución de tipo de vivienda en Valencia'
    },
    {
        src: municipiosPlot,
        alt: 'Distribución de los 10 municipios con más viviendas en Valencia'
    },
    {
        src: metrosPlot,
        alt: 'Distribución de los metros cuadrados de las viviendas en Valencia'
    },
    {
        src: habitacionesPlot,
        alt: 'Distribución del número de habitaciones en las viviendas en Valencia'
    },
    {
        src: garajeAscensorExteriorPlot,
        alt: 'Distribución de las viviendas con garaje, ascensor y exterior en Valencia'
    }

]

const correlation = [
    {
        src: heatmap,
        alt: 'Heatmap'
    },
    {
        src: metrosPrecioPlot,
        alt: 'Relación entre los metros cuadrados y el precio de las viviendas en Valencia'
    }
]

export default Info
