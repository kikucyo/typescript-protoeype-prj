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

const NEW_LINKS_SUBSCRIPTION = gql`
  subscription {
    feed(repoFullName: "B") {
      id
      group
      description
      url
    }
  }
`;

interface FeedResult {
  feed: Link[];
}

interface NewLinkResult {
  feed: Link;
}

// eslint-disable-next-line no-empty-pattern
const LinkItemList: FC = () => {
  const { loading, data, error, subscribeToMore } = useQuery<
    FeedResult,
    NewLinkResult
  >(FEED_QUERY);

  // const subscribeNewLink<T extends Link[]>() => {
  //   return {
  //     document: NEW_LINKS_SUBSCRIPTION,
  //     updateQuery: (prev, {subscriptionData}) => {
  //       if(subscriptionData.data.newLink)
  //     }
  //   }

  // };

  subscribeToMore({
    document: NEW_LINKS_SUBSCRIPTION,
    updateQuery: (prev, { subscriptionData }) => {
      console.log(subscriptionData.data.feed);

      return prev;
    },
  });

  return (
    <>
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
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
