import React from 'react';
import { Headphones, Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'kn';
  onLanguageChange: (lang: 'en' | 'kn') => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const content = {
    en: {
      title: 'Dhwanidhare Media',
      subtitle: 'Dhwanisuva Aksharaloka',
      nav: {
        samples: 'Audio Samples',
        projects: 'Projects',
        testimonials: 'Testimonials',
        contact: 'Contact',
        joinUs: 'Join Us'
      }
    },
    kn: {
      title: 'ಧ್ವನಿಧಾರೆ ಮೀಡಿಯಾ',
      subtitle: 'ಧ್ವನಿಸುವ ಅಕ್ಷರಲೋಕ',
      nav: {
        samples: 'ಆಡಿಯೋ ಮಾದರಿಗಳು',
        projects: 'ನಮ್ಮ ಯೋಜನೆಗಳು',
        testimonials: 'ಪ್ರಶಂಸಾಪತ್ರಗಳು',
        contact: 'ಸಂಪರ್ಕಿಸಿ',
        joinUs: 'ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ'
      }
    }
  };

  const currentContent = content[language];

  return (
    <header className="bg-gradient-to-r from-blue-100 to-blue-200 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Headphones className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">{currentContent.title}</h1>
              <p className="text-sm text-blue-600">{currentContent.subtitle}</p>
            </div>
          </div>
          
          {/* Language Switch */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/70 rounded-full px-3 py-1">
              <Globe className="h-4 w-4 text-blue-600" />
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded-full text-sm font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('kn')}
                className={`px-2 py-1 rounded-full text-sm font-medium transition-colors ${
                  language === 'kn' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                ಕನ್ನಡ
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center space-x-8 pb-4">
          <a href="#samples" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            {currentContent.nav.samples}
          </a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            {currentContent.nav.projects}
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            {currentContent.nav.testimonials}
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            {currentContent.nav.contact}
          </a>
          <a href="#join-us" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            {currentContent.nav.joinUs}
          </a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-300">
            <div className="flex flex-col space-y-2">
              <a href="#samples" className="py-2 text-gray-700 hover:text-blue-600 transition-colors">
                {currentContent.nav.samples}
              </a>
              <a href="#projects" className="py-2 text-gray-700 hover:text-blue-600 transition-colors">
                {currentContent.nav.projects}
              </a>
              <a href="#testimonials" className="py-2 text-gray-700 hover:text-blue-600 transition-colors">
                {currentContent.nav.testimonials}
              </a>
              <a href="#contact" className="py-2 text-gray-700 hover:text-blue-600 transition-colors">
                {currentContent.nav.contact}
              </a>
              <a href="#join-us" className="py-2 text-gray-700 hover:text-blue-600 transition-colors">
                {currentContent.nav.joinUs}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;