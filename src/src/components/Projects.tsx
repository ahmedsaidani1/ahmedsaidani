import React, { useState } from 'react';
import { Calendar, Code, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

 const projects = [
  {
    id: 1,
    title: 'Rental Car agency',
    description: 'I developed a sleek, user-friendly car rental website for Maxima Rent A Car, designed to provide customers with an intuitive and seamless booking experience. The website offers a modern, responsive interface that ensures accessibility across all devices. Key features include a comprehensive vehicle catalog, real-time availability updates, and a straightforward booking process. The platform is optimized for performance and user engagement, making it easy for customers to find and reserve their ideal vehicle.',
    timeline: '7 days',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    githubUrl: 'https://github.com',
     liveUrl: 'https://maximarentacar.netlify.app/',
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'luxeQR',
    description: 'I designed and developed LuxeQR, a modern and user-friendly platform that allows businesses and individuals to create and customize QR codes with style. The website features a sleek, responsive design that works seamlessly across all devices, ensuring a smooth experience for users. With intuitive navigation and an elegant interface, LuxeQR makes generating professional QR codes quick, simple, and visually appealing. The project highlights my ability to deliver functional, performance-optimized, and visually polished web solutions tailored to client needs.',
    timeline: '6 days',
    technologies: ['React', 'TypeScript'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://luxeqr.netlify.app/',
    category: 'Frontend'
  },
  {
    id: 3,
    title: 'watch store',
    description: 'I built Original Watch, a professional eCommerce-style website tailored for showcasing and selling luxury watches. The platform features a modern, elegant design that highlights product details with clarity and sophistication. It is fully responsive, ensuring a seamless browsing and shopping experience on desktop, tablet, and mobile. The website includes intuitive navigation, optimized performance, and a user-friendly layout that enhances customer engagement and trust. This project demonstrates my ability to create high-quality, conversion-focused websites for businesses in the retail and luxury goods industry.',
    timeline: '2 Weeks',
    technologies: ['Angular', 'TypeScript', 'Firebase'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://originalwatch.netlify.app/',
    category: 'Full Stack'
  },
  {
    id: 4,
    title: 'subscriptions store',
    description: 'I crafted CWARETT.TN, a sleek, modern web platform designed to provide premium subscription services—such as Netflix and ChatGPT—for users in Tunisia. The site blends elegance and functionality, delivering an intuitive, fast-loading experience across all devices. It emphasizes seamless access to premium accounts, clear navigation, and localized appeal tailored for the Tunisian market. This project underscores my ability to build user-centric, performance-optimized web solutions that align with both aesthetic and functional demands.',
    timeline: '2 Weeks',
    technologies: ['Angular', 'TypeScript', 'Firebase'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://cwarett.netlify.app/',
    category: 'Full Stack'
  },
    {
    id: 5,
    title: 'video games store',
    description: 'I developed AllalaStore, a sleek and modern eCommerce platform dedicated to video games. The website is designed to provide gamers with a smooth and engaging shopping experience, featuring a clean product catalog, responsive design, and intuitive navigation. Optimized for both performance and user experience, AllalaStore ensures fast loading speeds and accessibility across all devices. With a stylish interface tailored for gaming enthusiasts, this project highlights my ability to build dynamic, high-quality online stores that combine functionality with eye-catching design.',
    timeline: '2 Weeks',
    technologies: ['Angular', 'TypeScript', 'Firebase'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://AllalaStore.netlify.app/',
    category: 'Full Stack'
  }
  // ... continue for other projects
];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  const openModal = (title: string, description: string) => {
    setModalContent({ title, description });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience 
            in web development. Each project demonstrates different aspects of modern development.
          </p>
        </div>

        {/* Main Project Display */}
        <div className="mb-12 h-max-[300px]">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Project Details */}
            <div className="p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {projects[currentProject].category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {projects[currentProject].timeline}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {projects[currentProject].title}
                  </h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p>{truncateText(projects[currentProject].description)}</p>
                    {projects[currentProject].description.length > 200 && (
                      <button
                        onClick={() => openModal(projects[currentProject].title, projects[currentProject].description)}
                        className="text-blue-600 hover:text-blue-800 font-medium mt-2 inline-flex items-center transition-colors"
                      >
                        Read More
                      </button>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Code className="h-5 w-5 mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <a
                    href={projects[currentProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
               
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <button
            onClick={prevProject}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-gray-600 hover:text-blue-600"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextProject}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-gray-600 hover:text-blue-600"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => goToProject(index)}
              className={`group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                index === currentProject ? 'ring-4 ring-blue-600 ring-opacity-50' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.timeline}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">{modalContent.title}</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <p className="text-gray-600 leading-relaxed text-lg">
                {modalContent.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
