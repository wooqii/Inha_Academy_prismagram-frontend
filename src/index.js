import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Client from "../src/Apollo/client";
import { ApolloProvider } from "react-apollo-hooks";

ReactDOM.render(<ApolloProvider client={ Client }><App /></ApolloProvider>, document.getElementById('root'));
