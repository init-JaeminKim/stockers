import { getNews } from "./newsDB.js";
import { getSymbols } from "./symbolDB.js";

const resolver = {
  Query: {
    news: (_, { q }) => getNews(q),
    symbols: () => getSymbols(),
  },
};

export default resolver;
