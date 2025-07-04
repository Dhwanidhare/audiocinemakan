import React from 'react';
import { BookOpen, GraduationCap, Mic, Film, Radio } from 'lucide-react';

interface ProjectsProps {
  language: 'en' | 'kn';
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Our Projects',
      subtitle: 'Each project is crafted with care, creativity, and clarity—for Kannada listeners worldwide.',
      projects: [
        {
          title: 'Audiobooks',
          description: 'Fiction, Non-Fiction, Mystery, Spiritual, Children'
        },
        {
          title: 'Syllabus Content',
          description: 'For kids – textbook to audio format with music & effects'
        },
        {
          title: 'Original Audio Series',
          description: 'Unique storytelling experiences crafted exclusively'
        },
        {
          title: 'Audio Cinema',
          description: 'Multivoice storytelling with BGM & effects'
        },
        {
          title: 'Podcasts',
          description: 'Engaging conversations and content'
        }
      ]
    },
    kn: {
      title: 'ನಮ್ಮ ಯೋಜನೆಗಳು',
      subtitle: 'ಪ್ರತಿ ಯೋಜನೆಯನ್ನು ಕಾಳಜಿ, ಸೃಜನಶೀಲತೆ ಮತ್ತು ಸ್ಪಷ್ಟತೆಯೊಂದಿಗೆ ರಚಿಸಲಾಗಿದೆ—ವಿಶ್ವಾದ್ಯಂತದ ಕನ್ನಡ ಕೇಳುಗರಿಗಾಗಿ.',
      projects: [
        {
          title: 'ಆಡಿಯೋಬುಕ್‌ಗಳು',
          description: 'ಕಾಲ್ಪನಿಕ, ಅಕಾಲ್ಪನಿಕ, ರಹಸ್ಯ, ಆಧ್ಯಾತ್ಮಿಕ, ಮಕ್ಕಳ'
        },
        {
          title: 'ಪಠ್ಯಕ್ರಮ ವಿಷಯ',
          description: 'ಮಕ್ಕಳಿಗಾಗಿ – ಪಠ್ಯಪುಸ್ತಕದಿಂದ ಸಂಗೀತ ಮತ್ತು ಪರಿಣಾಮಗಳೊಂದಿಗೆ ಆಡಿಯೋ ಸ್ವರೂಪಕ್ಕೆ'
        },
        {
          title: 'ಮೂಲ ಆಡಿಯೋ ಸರಣಿ',
          description: 'ವಿಶೇಷವಾಗಿ ರಚಿಸಲಾದ ಅನನ್ಯ ಕಥೆ ಹೇಳುವ ಅನುಭವಗಳು'
        },
        {
          title: 'ಆಡಿಯೋ ಸಿನಿಮಾ',
          description: 'BGM ಮತ್ತು ಪರಿಣಾಮಗಳೊಂದಿಗೆ ಬಹುಧ್ವನಿ ಕಥೆ ಹೇಳುವಿಕೆ'
        },
        {
          title: 'ಪಾಡ್‌ಕಾಸ್ಟ್‌ಗಳು',
          description: 'ಆಕರ್ಷಕ ಸಂಭಾಷಣೆಗಳು ಮತ್ತು ವಿಷಯ'
        }
      ]
    }
  };

  const currentContent = content[language];

  const projects = currentContent.projects.map((project, index) => ({
    ...project,
    icon: [
      <BookOpen className="h-8 w-8" />,
      <GraduationCap className="h-8 w-8" />,
      <Mic className="h-8 w-8" />,
      <Film className="h-8 w-8" />,
      <Radio className="h-8 w-8" />
    ][index]
  }));

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentContent.title}</h2>
          <p className="text-xl text-gray-600">
            {currentContent.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-blue-100 p-4 rounded-2xl w-fit mb-6">
                <div className="text-blue-600">
                  {project.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;