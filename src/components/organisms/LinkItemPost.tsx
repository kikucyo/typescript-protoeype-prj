import { FC } from 'react';
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

  //   const post = async () => {
  //     // const postaction = useMutation(POST_MUTATION, {
  //     //   variables: {
  //     //     group: 'A',
  //     //     url: 'test',
  //     //     description: 'descriptionTest',
  //     //   },
  //     // });

  //     await postMutation({
  //       variables: { gropu: 'A', url: 'test', description: 'testdesc' },
  //     });
  //   };

  const [postMutation] = useMutation<RegistedLink>(POST_MUTATION, {
    variables: {
      group: 'A',
      url: 'test',
      description: 'descriptionTest',
    },
    update: (cache, { data }) => {
      if (data === undefined || data === null) {
        return;
      }

      const feed = cache.readQuery<FeedResult>({
        query: FEED_QUERY,
      });

      // const updatedLinks = feed?.feed.map((feedItem) => {
      //   if (feedItem.id === data?.data.post.id) {
      //       return {
      //           ...feedLink,

      //       }

      //   }

      // });

      //   cache.writeQuery( {
      //       query:FEED_QUERY,
      //   })

      const newLink: Link = {
        id: data.post.id,
        url: data.post.url,
        description: data.post.description,
      };
      //   feed?.feed.push(newLink);
      //   const newFeed = [];
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
        <input placeholder="URL" />
      </Form.Field>
      <Form.Field>
        <Label>description</Label>
        <input placeholder="description" />
      </Form.Field>

      <Button
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          await postMutation();
          //   const promise = postMutation();

          //   Promise.all([promise]).then(() => {
          //     alert('test');
          //   });
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default LinkItemPost;
