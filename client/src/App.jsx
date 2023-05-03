import "./App.css";

// import pages
import Signup from "./pages/Signup";
import Boilerplate from "./pages/Boilerplate";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ViewUsers from "./pages/ViewUsers";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// imports from Apollo client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          {/* routes */}
          {/* protected */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* unprotected */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/viewusers" element={<ViewUsers />} />
          {/* Default */}
          <Route path="*" element={<Boilerplate />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
