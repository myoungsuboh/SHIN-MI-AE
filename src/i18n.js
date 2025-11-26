import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // 서버에서 번역 파일을 불러옵니다.
  .use(LanguageDetector) // 사용자의 브라우저 언어를 감지합니다.
  .use(initReactI18next) // i18next를 리액트와 통합합니다.
  .init({
    supportedLngs: ['ko', 'en', 'ja', 'uz', 'ru'], // 지원할 언어 목록
    fallbackLng: 'ko', // 기본 언어
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'], // 언어 선택을 쿠키에 저장합니다.
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // 번역 파일 경로
    },
    react: {
      useSuspense: true, // 번역 파일 로딩 중 Suspense 사용
    },
  });

export default i18n;
