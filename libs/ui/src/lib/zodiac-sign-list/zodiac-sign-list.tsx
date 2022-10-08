import { AdhZodiacSignItem, AdhZodiacSignList } from '@ricult/models';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

export const ZodiacSignList = ({
  onPressListItem,
}: {
  onPressListItem: any;
}) => {
  const { t } = useTranslation();

  const keyExtractor = (item: AdhZodiacSignItem) => item.zodiacSign;

  return (
    <FlatList
      testID="zodiac-sign-list"
      keyExtractor={keyExtractor}
      data={AdhZodiacSignList}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onPressListItem(item)}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Text>{t(item.zodiacSign)}</Text>
          <Image
            style={{ width: 20, height: 20 }}
            source={{
              uri: 'https://w7.pngwing.com/pngs/601/824/png-transparent-star-system-film-star.png',
            }}
          />
        </TouchableOpacity>
      )}
    />
  );
};
