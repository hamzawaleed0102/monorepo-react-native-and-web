import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootStore } from '@ricult/store';
import HomePage from './pages/home/home';
import DetailsPage from './pages/details/details';
import { Navbar } from '@ricult/ui';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '@ricult/i18n';
import { ThemeProvider as NativeThemeProvider } from 'styled-components/native';
import { ThemeProvider as WebThemeProvider } from 'styled-components';
import { useTheme } from '@ricult/theme';
import RTL from 'libs/ui/src/lib/layouts/rtl';

export function App() {
  const theme = useTheme();

  return (
    <NativeThemeProvider theme={theme}>
      <WebThemeProvider theme={theme}>
        <Provider store={rootStore}>
          <I18nextProvider i18n={i18n}>
            <RTL>
              <BrowserRouter>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <div>
                          Empty home page with no <i>layout/header</i>
                        </div>
                        <Link to={'/cards'}> Goto cards page</Link>
                      </>
                    }
                  />
                  <Route path="cards" element={<Navbar />}>
                    <Route index element={<HomePage />} />
                    <Route path=":card" element={<DetailsPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </RTL>
          </I18nextProvider>
        </Provider>
      </WebThemeProvider>
    </NativeThemeProvider>
  );
}

export default App;
