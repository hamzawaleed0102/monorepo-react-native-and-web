import { Text, View } from 'react-native';
import { Link, Outlet } from 'react-router-dom';
import { ToggleLang } from '@ricult/ui';
import { useTranslation } from 'react-i18next';
/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        <Link to={'/'} style={{ margin: 10 }}>
          <Text>{t('Home')}</Text>
        </Link>
        <ToggleLang />
      </View>
      <Outlet />
    </View>
  );
}

export default Navbar;
