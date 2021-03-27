import { getNews } from "./db.js";

const resolver = {
  Query: {
    news: (_, { q }) => getNews(q),
  },
};

export default resolver;
