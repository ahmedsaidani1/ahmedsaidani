import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with over 3 years of experience creating 
            innovative web applications. I specialize in the MERN and Mean stack and love turning 
            complex problems into simple, beautiful solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">My Journey</h3>
          <div className="space-y-4 text-gray-600 text-center">
            <p className="leading-relaxed">
              Started my journey in web development 3 years ago with a passion for creating 
              digital solutions that make a difference. I've worked with startups and 
              established companies, helping them build scalable web applications.
            </p>
            <p className="leading-relaxed">
              My expertise spans across the entire development lifecycle, from initial 
              concept and design to deployment and maintenance. I'm particularly passionate 
              about creating user-centric applications with clean, maintainable code.
            </p>
          
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-600">30+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-green-600">3+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-purple-600">30+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;