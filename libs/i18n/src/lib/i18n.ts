import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Home: 'Home',
        Capricorn: 'Capricorn',
        Aquarius: 'Aquarius',
        Pisces: 'Pisces',
        Aries: 'Aries',
        Taurus: 'Taurus',
        Gemini: 'Gemini',
        Cancer: 'Cancer',
        Leo: 'Leo',
        Virgo: 'Virgo',
        Libra: 'Libra',
        Scorpio: 'Scorpio',
        Sagittarius: 'Sagittarius',
      },
    },
    ur: {
      translation: {
        Home: 'ہوم',
        Capricorn: 'جدی',
        Aquarius: 'دلو',
        Pisces: 'حوت',
        Aries: 'حمل',
        Taurus: 'ثور',
        Gemini: 'جوزا',
        Cancer: 'سرطان',
        Leo: 'اسد',
        Virgo: 'سنبلہ',
        Libra: 'میزان',
        Scorpio: 'عقرب',
        Sagittarius: 'قوس',
      },
    },
  },
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
