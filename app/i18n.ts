import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      login: {
        title: 'Login',
        email: 'Email',
        password: 'Password',
        forgotPassword: 'Forgot your password?',
        dontHaveAccount: 'Don\'t have an account?',
        alreadyHaveAccount: 'Already have an account?',
        passwordPlaceholder: 'Enter your password',
        cpfPlaceholder: 'Enter your CPF',
        button: 'Login'
      },
      register: 'Register',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      forgotPassword: 'Forgot your password?',
      dontHaveAccount: 'Don\'t have an account?',
      alreadyHaveAccount: 'Already have an account?',
      name: 'Name',
      phone: 'Phone',
      address: 'Address',
      city: 'City',
      state: 'State',
      zipCode: 'ZIP Code',
      country: 'Country',
      confirm: 'Confirm',
      cancel: 'Cancel',
    },
  },
  pt: {
    translation: {
      // Add your Portuguese translations here
      welcome: 'Bem-vindo',
      login: {
        title: 'Login',
        email: 'Email',
        password: 'Senha',
        forgotPassword: 'Esqueceu sua senha?',
        dontHaveAccount: 'Não tem uma conta?',
        alreadyHaveAccount: 'Já tem uma conta?',
        passwordPlaceholder: 'Digite sua senha',
        cpfPlaceholder: 'Digite seu CPF',
        button: 'Entrar'
      },
      register: 'Cadastrar',
      email: 'Email',
      password: 'Senha',
      confirmPassword: 'Confirmar Senha',
      forgotPassword: 'Esqueceu sua senha?',
      dontHaveAccount: 'Não tem uma conta?',
      alreadyHaveAccount: 'Já tem uma conta?',
      name: 'Nome',
      phone: 'Telefone',
      address: 'Endereço',
      city: 'Cidade',
      state: 'Estado',
      zipCode: 'CEP',
      country: 'País',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
    },
  },
};

const fallback = { languageTag: 'en' };
const { languageTag } =
  RNLocalize.getLocales()[0] || fallback;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: languageTag,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 