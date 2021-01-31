/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeButton from 'components/molecules/HomeButton';

const EnhancedHomeButton: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const navigate = useNavigate();

  return <HomeButton redirectToHome={() => navigate('/')} />;
};

export default EnhancedHomeButton;
