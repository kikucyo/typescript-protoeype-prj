import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';

import ItemList from 'components/organisms/ItemList';
import { Data } from 'data/sampleDataList';

type Props = {
  type: string;
  itemList: Data[];
  isLoading?: boolean;
};

const SchoolCharacters: FC<Props> = ({ type, itemList, isLoading = false }) => (
  <>
    <Helmet>
      <title>アイテム一覧| {type}</title>
    </Helmet>
    <Header as="h2">{type}</Header>
    <ItemList dataList={itemList} isLoading={isLoading} />
  </>
);

export default SchoolCharacters;
