import fetch from "node-fetch";
import moment from "moment";
import detenv from 'dotenv'

detenv.config();

const API_KEY = process.env.REACT_APP_NEWSAPI_KEY
const date = moment(new Date()).utc().format("YYYY-MM-DD");
const BASE_URL = "https://newsapi.org/v2/everything?q=";
const REST_URL = `&from=${date}&sortBy=publishedAt&language=en&pageSize=5&apiKey=${API_KEY}`;

export const getNews = async (q) => {
  const response = await fetch(BASE_URL + `${q}` + REST_URL);
  const News = await response.json();

  //Use 'reduce' to caculate AVG polarity of each title
  // Sum of polarity / News["articles"].length

  return News["articles"];
};
