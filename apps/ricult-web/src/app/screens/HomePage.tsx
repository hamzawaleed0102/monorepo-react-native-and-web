import { View, Text } from 'react-native';
import { ZodiacSignList } from '@ricult/ui';
import { AdhZodiacSignItem } from '@ricult/models';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const onPressListItem = (item: AdhZodiacSignItem) => {
    navigate(item.zodiacSign);
  };

  return (
    <View>
      <Text>HomePage</Text>
      <ZodiacSignList onPressListItem={onPressListItem} />
    </View>
  );
};

export default HomePage;
