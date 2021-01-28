import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';

import DefaultList from 'containers/organisms/DefaultList';
import LnkitemList from 'components/organisms/LinkItemList';
import LinkItemPost from 'components/organisms/LinkItemPost';
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
    <Container className="summary">
      <h1>GraphQLデータ</h1>
    </Container>
    <LinkItemPost />
    <LnkitemList />
  </>
);

export default Home;
