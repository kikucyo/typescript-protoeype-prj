import { FC } from 'react';

import DefaultList from 'components/organisms/DefaultList';
import { dataList } from 'data/sampleDataList';

const EnhancedDataList: FC = () => {
  const outpuData = Object.keys(dataList).map((code) => ({
    code,
    name: dataList[code].type,
  }));

  return <DefaultList sampleData={outpuData} />;
};

export default EnhancedDataList;
