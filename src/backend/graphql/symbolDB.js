import fetch from "node-fetch";
import detenv from 'dotenv'

detenv.config();

const API_KEY = process.env.REACT_APP_STOCKAPI_KEY
const BASE_URL = `http://api.marketstack.com/v1/tickers?access_key=${API_KEY}`

export const getSymbols = async () => {
    const response = await fetch(BASE_URL);
    const Symbols = await response.json();

    console.log(API_KEY)

    return Symbols["data"]
}