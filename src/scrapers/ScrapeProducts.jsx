import axios from 'axios';

export const scrapeAliexpress = async (query) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/scrape/aliexpress/?q=${query}`);
        return response.data.results;
    } catch (error) {
        console.error('Error scraping Aliexpress products:', error);
        return [];
    }
};

export const scrapeAmazon = async (query) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/scrape/amazon/?q=${query}`);
        return response.data.results;
    } catch (error) {
        console.error('Error scraping Amazon products:', error);
        return [];
    }
};
