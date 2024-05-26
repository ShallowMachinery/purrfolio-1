import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash.replace('#', ''));
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    event.preventDefault();
    const targetSection = document.querySelector(hash);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(hash.replace('#', ''));
    setIsNavbarOpen(false);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between sticky top-0 z-50" style={{ background: 'linear-gradient(rgba(31, 41, 55, 1), rgba(17, 24, 39, 1))' }}>
      <div>
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>
      <div className="hidden sm:flex items-center space-x-6">
        <a href="#intro" onClick={(e) => handleLinkClick(e, '#intro')} className={`text-gray-300 transition-colors duration-300 ${activeSection === 'intro' ? 'font-bold' : ''} hover:text-blue-500`}>Intro</a>
        <a href="#proficiency" onClick={(e) => handleLinkClick(e, '#proficiency')} className={`text-gray-300 transition-colors duration-300 ${activeSection === 'proficiency' ? 'font-bold' : ''} hover:text-blue-500`}>About me</a>
        <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className={`text-gray-300 transition-colors duration-300 ${activeSection === 'projects' ? 'font-bold' : ''} hover:text-blue-500`}>Projects</a>
        <a href="#hobbies" onClick={(e) => handleLinkClick(e, '#hobbies')} className={`text-gray-300 transition-colors duration-300 ${activeSection === 'hobbies' ? 'font-bold' : ''} hover:text-blue-500`}>Hobbies</a>
        <a href="#inquiries" onClick={(e) => handleLinkClick(e, '#inquiries')} className={`text-gray-300 transition-colors duration-300 ${activeSection === 'inquiries' ? 'font-bold' : ''} hover:text-blue-500`}>Inquiries</a>
      </div>
      <div className="flex sm:hidden">
        <button className="text-gray-300" onClick={toggleNavbar}>{isNavbarOpen ? '' : 'Menu'}</button>
      </div>
      {isNavbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-100 flex justify-center items-center transition-opacity duration-300">
        <div className="flex flex-col items-center space-y-4 transition-opacity duration-300">
            <button className="absolute top-8 left-8 text-gray-300 mt-0 ml-0" onClick={closeNavbar}>✖</button>
            <a href="#intro" onClick={(e) => handleLinkClick(e, '#intro')} className={`text-gray-300 transition-colors duration-300 ${activeSection === 'intro' ? 'font-bold' : ''} hover:text-blue-500`}>Intro</a>
            <a href="#proficiency" onClick={(e) => handleLinkClick(e, '#proficiency')} className={`text-gray-300 transition-colors duration-300 ${activeSection === 'proficiency' ? 'font-bold' : ''} hover:text-blue-500`}>About me</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className={`text-gray-300 transition-colors duration-300 ${activeSection === 'projects' ? 'font-bold' : ''} hover:text-blue-500`}>Projects</a>
            <a href="#hobbies" onClick={(e) => handleLinkClick(e, '#hobbies')} className={`text-gray-300 transition-colors duration-300 ${activeSection === 'hobbies' ? 'font-bold' : ''} hover:text-blue-500`}>Hobbies</a>
            <a href="#inquiries" onClick={(e) => handleLinkClick(e, '#inquiries')} className={`text-gray-300 transition-colors duration-300 ${activeSection === 'inquiries' ? 'font-bold' : ''} hover:text-blue-500`}>Inquiries</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
