import { FC } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Button, Form, Label } from 'semantic-ui-react';

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

  const [postMutation] = useMutation(POST_MUTATION, {
    variables: {
      group: 'A',
      url: 'test',
      description: 'descriptionTest',
    },
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    // update(cache, data) {
    //   console.log(data);

    //   console.log(cache);
    // },
    update: (cache, data) => {
      console.log(data);

      console.log(cache);
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
