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

export type Link = {
  id: string;
  url: string;
  description: string;
};

export type LinkList = {
  linkList: Link[];
};

export const samplelinkList: Link[] = [
  {
    id: '1',
    description: 'Prisma gives you a powerful database toolkit 😎',
    url: 'https://prisma.io',
  },
  {
    id: '2',
    description: 'The best GraphQL client',
    url: 'https://www.apollographql.com/docs/react/',
  },
];
