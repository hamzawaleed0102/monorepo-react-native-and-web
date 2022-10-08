import React from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { View } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const RTL: React.FC<Props> = ({ children }) => {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language) {
      document.body.dir = i18n.dir();
    }
  }, [i18n.language]);

  return (
    <>
      <View>{children}</View>
    </>
  );
};

export default RTL;
