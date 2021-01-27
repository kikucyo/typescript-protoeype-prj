import { FC } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

type SampleData = {
  code: string;
  name: string;
};

const DefaultList: FC<{ sampleData: SampleData[] }> = ({ sampleData }) => (
  <>
    <h2>初期リスト</h2>
    <List as="ul">
      {sampleData.map((sample) => (
        <List.Item as="li" key={sample.code}>
          <Link to={`/datas/${sample.code}`}>{sample.name}</Link>
        </List.Item>
      ))}
    </List>
  </>
);

export default DefaultList;
