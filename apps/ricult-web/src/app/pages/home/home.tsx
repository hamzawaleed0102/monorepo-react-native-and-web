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
      <img src={GlobeIcon} />
      {/* <GlobeIconWeb /> */}
      <ZodiacSignList onPressListItem={onPressListItem} />
      <ZodiacSignList onPressListItem={onPressListItem} />
      <button>asdf</button>
    </HomeContainer>
  );
};

export default HomePage;
