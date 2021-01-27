import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

import HomeButton from 'containers/molecules/HomeButton';

const SampleBase: FC = () => (
  <>
    <header> ベースページ</header>
    <Outlet />
    <Divider hidden />
    <HomeButton />
  </>
);

export default SampleBase;
