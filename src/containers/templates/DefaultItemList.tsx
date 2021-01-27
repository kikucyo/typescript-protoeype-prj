import { FC } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';

import DefaultItemlist from 'components/templates/DefaultItemList';
import { dataList } from 'data/sampleDataList';

const EnhancedDefaultItemList: FC = () => {
  const { code } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const isLoading = !!queryParams.get('loading');
  const typeCodeList = Object.keys(dataList);

  if (typeCodeList.includes(code)) {
    const { type, itemList } = dataList[code];

    return (
      <DefaultItemlist type={type} itemList={itemList} isLoading={isLoading} />
    );
  }

  return <Navigate to="/" replace />;
};

export default EnhancedDefaultItemList;
