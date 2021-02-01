import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
// 1
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

// 2
const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true,
  },
});

const link = split(
  ({ query }) => {
    const mainDefinition = getMainDefinition(query);

    return (
      mainDefinition.kind === 'OperationDefinition' &&
      mainDefinition.operation === 'subscription'
    );
  },
  wsLink,
  // authLink.concat(httpLink),
  httpLink,
);

// 3
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

reportWebVitals();
