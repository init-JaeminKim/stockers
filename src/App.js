import {
  useQuery,
  gql,
  ApolloClient,
  InMemoryCache,
  useLazyQuery,
} from "@apollo/client";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Sentiment from "sentiment";
import { useStyles } from "./style/styles.js";
import { Button } from "@material-ui/core";

const sentiment = new Sentiment();

const GET_NEWS = gql`
  query anyQuery($q: String) {
    news(q: $q) {
      title
      description
    }
  }
`;

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const styles = useStyles();

  /*  const Analysis = () => {
    data.news.map(({ title }) => console.log(title));
  };  */

  const [comName, setCompName] = useState("");
  const [getNewer, { loading, data }] = useLazyQuery(GET_NEWS);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setCompName(value);
  };

  /* if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>; */

  return (
    <>
      <input type="text" onChange={onChange} maxLength={25}></input>

      <Button onClick={() => getNewer({ variables: { q: comName } })}>
        Show data
      </Button>
      {data &&
        data.news.map(({ title, description }) => (
          <div key={title}>
            <p>{description}</p>
          </div>
        ))}
    </>
  );
}

export default App;
