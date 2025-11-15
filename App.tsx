import { useState } from 'react';
import HomePage from './components/HomePage';
import LanguagePage from './components/LanguagePage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'language'>('home');
  const [selectedLanguageId, setSelectedLanguageId] = useState<string>('');

  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguageId(languageId);
    setCurrentPage('language');
  };

  const handleBack = () => {
    setCurrentPage('home');
    setSelectedLanguageId('');
  };

  return (
    <>
      {currentPage === 'home' && (
        <HomePage onLanguageSelect={handleLanguageSelect} />
      )}
      {currentPage === 'language' && (
        <LanguagePage languageId={selectedLanguageId} onBack={handleBack} />
      )}
    </>
  );
}

export default App;
