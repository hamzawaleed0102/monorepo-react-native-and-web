import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';

/* eslint-disable-next-line */
export interface ToggleLangProps {}

export function ToggleLang(props: ToggleLangProps) {
  const { i18n } = useTranslation();
  const { language: currentLang } = i18n;

  const isUrdu = currentLang === 'ur';

  const onPress = async (lang: string) => {
    i18n.changeLanguage(lang);
    // FIXME: putting here just for testing purpose.
    if (Platform.OS !== 'web') {
      if (i18n.dir() === 'rtl') {
        if (I18nManager.isRTL) {
          await I18nManager.forceRTL(false);
        }
      } else {
        if (!I18nManager.isRTL) {
          await I18nManager.forceRTL(true);
        }
      }
      RNRestart.Restart();
    }
  };
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => onPress('ur')} style={{ margin: 10 }}>
        <Text style={{ color: isUrdu ? 'green' : 'black' }}>Ur</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress('en')} style={{ margin: 10 }}>
        <Text style={{ color: !isUrdu ? 'green' : 'black' }}>En</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ToggleLang;
