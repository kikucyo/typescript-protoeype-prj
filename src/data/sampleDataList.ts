export type Data = {
  id: number;
  name: string;
};

export type DataList = {
  type: string;
  itemList: Data[];
};

export type DataTypeDict = {
  [dataType: string]: DataList;
};

export const dataList: DataTypeDict = {
  sample1: {
    type: 'aaaaa',
    itemList: [
      {
        id: 1,
        name: 'OneName',
      },
    ],
  },
  sample2: {
    type: 'b',
    itemList: [
      {
        id: 2,
        name: 'TwoName',
      },
      {
        id: 3,
        name: 'threeName',
      },
    ],
  },
};
