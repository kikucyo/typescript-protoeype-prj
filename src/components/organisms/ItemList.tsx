import { FC } from 'react';
import { Icon, Item } from 'semantic-ui-react';

import Spinner from 'components/molecules/Spinner';
import { Data } from 'data/sampleDataList';

type Props = {
  dataList: Data[];
  isLoading?: boolean;
};

const ItemList: FC<Props> = ({ dataList = [], isLoading = false }) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
      dataList.map((data) => (
        <Item key={data.id}>
          <Icon name="user circle" size="huge" />
          <Item.Content>
            <Item.Header>{Item.name}</Item.Header>
          </Item.Content>
        </Item>
      ))
    )}
  </>
);

export default ItemList;
