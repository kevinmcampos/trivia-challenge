export default function loadTranslations(I18n) {
    I18n.fallbacks = true;
    I18n.translations = {
        en: require('./en/translations'),
    };

    const languageCode = I18n.locale.substr(0, 2);
    switch (languageCode) {
        case 'pt':
            I18n.translations.pt = require('./pt/translations');
            break;
    }
}
