import fetch from "node-fetch";
import moment from "moment";

const date = moment(new Date()).utc().format("YYYY-MM-DD");
const BASE_URL = "https://newsapi.org/v2/everything?q=";
const REST_URL = `&from=${date}&sortBy=publishedAt&language=en&pageSize=5&apiKey=af3da24d5d67460aa93c634653503333`;

export const getNews = async (q) => {
  const response = await fetch(BASE_URL + `${q}` + REST_URL);
  const News = await response.json();

  console.log(News["articles"].length);

  //Use 'reduce' to caculate AVG polarity of each title
  // Sum of polarity / News["articles"].length

  return News["articles"];
};
