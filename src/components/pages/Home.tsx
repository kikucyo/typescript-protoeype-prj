import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';

import DefaultList from 'containers/organisms/DefaultList';
import './Home.css';

const Home: FC = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <header>
      <h1>初期ページ</h1>
    </header>
    <Container className="summary">
      <p>サンプルデータ</p>
    </Container>
    <DefaultList />
  </>
);

export default Home;
