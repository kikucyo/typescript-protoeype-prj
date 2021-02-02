import { FC, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Button, Form, Label } from 'semantic-ui-react';
import { Link } from 'data/sampleDataList';
import { FEED_QUERY } from './LinkItemList';

interface FeedResult {
  feed: Link[];
}

interface RegistedLink {
  post: {
    id: string;
    url: string;
    description: string;
  };
}

const LinkItemPost: FC = () => {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const POST_MUTATION = gql`
    mutation PostMutation(
      $group: String!
      $url: String!
      $description: String!
    ) {
      post(group: $group, url: $url, description: $description) {
        id
        url
      }
    }
  `;

  const [postMutation] = useMutation<RegistedLink>(POST_MUTATION, {
    variables: {
      group: 'B',
      url,
      description,
    },
    update: (cache, { data }) => {
      if (data === undefined || data === null) {
        return;
      }

      const feed = cache.readQuery<FeedResult>({
        query: FEED_QUERY,
      });

      const newLink: Link = {
        id: data.post.id,
        url: data.post.url,
        description: data.post.description,
      };

      const newFeed = feed?.feed.map((item) => item);

      newFeed?.push(newLink);
      cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: newFeed,
        },
      });
    },
  });

  return (
    <Form>
      <Form.Field>
        <Label>URL</Label>
        <input
          placeholder="URL"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
      </Form.Field>
      <Form.Field>
        <Label>description</Label>
        <input
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </Form.Field>

      <Button
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          await postMutation();
          setUrl('');
          setDescription('');
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default LinkItemPost;
