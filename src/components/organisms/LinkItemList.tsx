import { FC } from 'react';
import { Link } from 'data/sampleDataList';
import { useQuery, useSubscription, gql } from '@apollo/client';
import LinkItem from './LinkItem';

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
  const { loading, data, error } = useQuery<FeedResult>(FEED_QUERY);

  useSubscription<NewLinkResult>(NEW_LINKS_SUBSCRIPTION, {
    onSubscriptionData: ({ client, subscriptionData }) => {
      const feed = client.cache.readQuery<FeedResult>({
        query: FEED_QUERY,
      });

      const newLink: Link = {
        id: subscriptionData.data?.feed.id,
        url: subscriptionData.data?.feed.url,
        description: subscriptionData.data?.feed.description,
      };

      const newFeed = feed?.feed.map((item) => item);

      newFeed?.push(newLink);

      client.cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: newFeed,
        },
      });
    },
  });

  return (
    <>
      {/* <h1> Subscribed!!!</h1>
      <div>
        {subscriptionResult.loading ? (
          <div>loading...</div>
        ) : (
          <div>
            {subscriptionResult.data?.feed.id}{' '}
            {subscriptionResult.data?.feed.description}
          </div>
        )}
      </div> */}
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
