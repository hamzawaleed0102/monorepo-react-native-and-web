// @ts-nocheck
import styles from './home.module.scss';
import { ZodiacSignList } from '@ricult/ui';
import { AdhZodiacSignItem } from '@ricult/models';
import { useNavigate } from 'react-router-dom';
import { HomeContainer } from './home.styled';
import { GlobeIcon } from '@ricult/assets';

const HomePage = () => {
  const navigate = useNavigate();

  const onPressListItem = (item: AdhZodiacSignItem) => {
    navigate(item.zodiacSign);
  };

  return (
    <HomeContainer className={styles.homeContainer}>
      <GlobeIcon width={40} style={{ color: 'blue' }} />
      <ZodiacSignList onPressListItem={onPressListItem} />
      <ZodiacSignList onPressListItem={onPressListItem} />
    </HomeContainer>
  );
};

export default HomePage;
