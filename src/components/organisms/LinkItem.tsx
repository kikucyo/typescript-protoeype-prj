import { FC } from 'react';
import { Link } from 'data/sampleDataList';

type props = {
  link: Link;
};

const LinkItem: FC<props> = ({ link = {} }) => (
  <div>
    <div>
      {link.description} ({link.url})
    </div>
  </div>
);

export default LinkItem;
