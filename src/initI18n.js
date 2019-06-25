import i18next from 'i18next';
import en from './locales/messages.en';
import ru from './locales/messages.ru';

function initI18n(lng = 'en') {
  i18next.init({
    lng,
    resources: {
      en,
      ru
    }
  });

  return i18next;
}

export default initI18n;
