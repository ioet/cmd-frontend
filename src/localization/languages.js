import { initialize } from 'react-localize-redux';
import { addTranslationForLanguage } from 'react-localize-redux';
import { setActiveLanguage } from 'react-localize-redux';
import store from "../store";

const es = require('./es.json')
const en = require('./en.json')

const importLanguages = () => {
  store.dispatch(addTranslationForLanguage(es, 'es'));
  store.dispatch(addTranslationForLanguage(en, 'en'));
}

export default {

  defineLanguages: () => {
    const languages = [
      { name: 'Spanish', code: 'es' },
      { name: 'English', code: 'en' }
    ];
    store.dispatch(initialize(languages));
    importLanguages()
  },

  setLanguage: (language) => {
    store.dispatch(setActiveLanguage(language));
  }

}
