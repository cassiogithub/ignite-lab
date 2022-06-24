import { Event } from "./pages/Event";
import { Router } from "./Router";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";
//import { gql, useQuery } from "@apollo/client";
// import { useEffect } from "react";
// import { client } from "./lib/apollo";


function App() {
  return (
    <div className="App">
      {/* <Event /> */}
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
