import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'kn';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Want to collaborate, create, or listen? Let\'s connect!',
      getInTouch: 'Get in Touch',
      quickLinks: 'Quick Links',
      sendMessage: 'Send us a Message',
      form: {
        fullName: 'Full Name',
        fullNamePlaceholder: 'Enter your full name',
        emailAddress: 'Email Address',
        emailPlaceholder: 'Enter your email address',
        subject: 'Subject',
        selectSubject: 'Select a subject',
        subjects: {
          collaboration: 'Collaboration',
          audiobook: 'Audiobook Production',
          voiceActing: 'Voice Acting',
          general: 'General Inquiry'
        },
        message: 'Message',
        messagePlaceholder: 'Tell us about your project or inquiry...',
        sendButton: 'Send Message'
      },
      contactInfo: {
        email: 'Email',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        location: 'Location',
        locationValue: 'Bangalore, Karnataka, India',
        responseTime: 'Response Time',
        responseTimeValue: 'Within 24 hours'
      },
      links: {
        audiobooks: 'Explore our Audiobooks – Experience Audio Cinema',
        syllabus: 'Kannada Syllabus – Made Easy with Voice, Music & Effects'
      }
    },
    kn: {
      title: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
      subtitle: 'ಸಹಯೋಗ, ಸೃಷ್ಟಿ ಅಥವಾ ಕೇಳಲು ಬಯಸುವಿರಾ? ಸಂಪರ್ಕ ಸಾಧಿಸೋಣ!',
      getInTouch: 'ಸಂಪರ್ಕದಲ್ಲಿರಿ',
      quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
      sendMessage: 'ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ',
      form: {
        fullName: 'ಪೂರ್ಣ ಹೆಸರು',
        fullNamePlaceholder: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
        emailAddress: 'ಇಮೇಲ್ ವಿಳಾಸ',
        emailPlaceholder: 'ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ',
        subject: 'ವಿಷಯ',
        selectSubject: 'ವಿಷಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        subjects: {
          collaboration: 'ಸಹಯೋಗ',
          audiobook: 'ಆಡಿಯೋಬುಕ್ ನಿರ್ಮಾಣ',
          voiceActing: 'ಧ್ವನಿ ನಟನೆ',
          general: 'ಸಾಮಾನ್ಯ ವಿಚಾರಣೆ'
        },
        message: 'ಸಂದೇಶ',
        messagePlaceholder: 'ನಿಮ್ಮ ಯೋಜನೆ ಅಥವಾ ವಿಚಾರಣೆಯ ಬಗ್ಗೆ ತಿಳಿಸಿ...',
        sendButton: 'ಸಂದೇಶ ಕಳುಹಿಸಿ'
      },
      contactInfo: {
        email: 'ಇಮೇಲ್',
        phone: 'ಫೋನ್',
        whatsapp: 'ವಾಟ್ಸ್‌ಆಪ್',
        location: 'ಸ್ಥಳ',
        locationValue: 'ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ, ಭಾರತ',
        responseTime: 'ಪ್ರತಿಕ್ರಿಯೆ ಸಮಯ',
        responseTimeValue: '24 ಗಂಟೆಗಳೊಳಗೆ'
      },
      links: {
        audiobooks: 'ನಮ್ಮ ಆಡಿಯೋಬುಕ್‌ಗಳನ್ನು ಅನ್ವೇಷಿಸಿ – ಆಡಿಯೋ ಸಿನಿಮಾವನ್ನು ಅನುಭವಿಸಿ',
        syllabus: 'ಕನ್ನಡ ಪಠ್ಯಕ್ರಮ – ಧ್ವನಿ, ಸಂಗೀತ ಮತ್ತು ಪರಿಣಾಮಗಳೊಂದಿಗೆ ಸುಲಭಗೊಳಿಸಲಾಗಿದೆ'
      }
    }
  };

  const currentContent = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentContent.title}</h2>
          <p className="text-xl text-gray-600">
            {currentContent.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{currentContent.getInTouch}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{currentContent.contactInfo.email}</h4>
                    <p className="text-gray-600">hello@dhwanidhare.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{currentContent.contactInfo.phone}</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{currentContent.contactInfo.whatsapp}</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{currentContent.contactInfo.location}</h4>
                    <p className="text-gray-600">{currentContent.contactInfo.locationValue}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{currentContent.contactInfo.responseTime}</h4>
                    <p className="text-gray-600">{currentContent.contactInfo.responseTimeValue}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{currentContent.quickLinks}</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors">
                  <span>🔗</span>
                  <span>{currentContent.links.audiobooks}</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors">
                  <span>🔗</span>
                  <span>{currentContent.links.syllabus}</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{currentContent.sendMessage}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.fullName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder={currentContent.form.fullNamePlaceholder}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.emailAddress}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder={currentContent.form.emailPlaceholder}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.subject}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">{currentContent.form.selectSubject}</option>
                  <option value="collaboration">{currentContent.form.subjects.collaboration}</option>
                  <option value="audiobook">{currentContent.form.subjects.audiobook}</option>
                  <option value="voice-acting">{currentContent.form.subjects.voiceActing}</option>
                  <option value="general">{currentContent.form.subjects.general}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder={currentContent.form.messagePlaceholder}
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{currentContent.form.sendButton}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;