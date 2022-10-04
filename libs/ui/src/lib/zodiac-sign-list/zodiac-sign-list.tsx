import { AdhZodiacSignItem, AdhZodiacSignList } from '@ricult/models';
import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';

export const ZodiacSignList = ({
  onPressListItem,
}: {
  onPressListItem: any;
}) => {
  const keyExtractor = (item: AdhZodiacSignItem) => item.zodiacSign;

  return (
    <FlatList
      testID="zodiac-sign-list"
      keyExtractor={keyExtractor}
      data={AdhZodiacSignList}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPressListItem(item)}>
          <Text>{item.zodiacSign}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
