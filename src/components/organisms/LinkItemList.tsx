import { FC } from 'react';
import { Link } from 'data/sampleDataList';
import { useQuery, gql } from '@apollo/client';
import LinkItem from './LinkItem';

// type props = {
//   linklist: Link[];
// };
export const FEED_QUERY = gql`
  {
    feed {
      id
      description
      url
    }
  }
`;

interface FeedResult {
  feed: Link[];
}

// eslint-disable-next-line no-empty-pattern
const LinkItemList: FC = () => {
  const { loading, data } = useQuery<FeedResult>(FEED_QUERY);

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {data &&
            data.feed.map((link) => <LinkItem key={link.id} link={link} />)}
        </div>
      )}
    </>
  );
};

export default LinkItemList;
