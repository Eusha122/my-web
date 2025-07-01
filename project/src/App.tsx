import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Download, Menu, X, ExternalLink, Trophy, Code, BookOpen, Folder, Star, Calendar } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "Chess Game Engine",
      description: "A fully functional chess game built with Python featuring AI opponent and move validation.",
      language: "Python",
      technologies: ["Python", "Pygame", "AI"],
      github: "#",
      demo: "#",
      status: "Completed",
      featured: true
    },
    {
      id: 2,
      title: "Student Management System",
      description: "A comprehensive system to manage student records with database integration.",
      language: "Python",
      technologies: ["Python", "SQLite", "Tkinter"],
      github: "#",
      demo: "#",
      status: "In Progress",
      featured: false
    },
    {
      id: 3,
      title: "Data Structures Visualizer",
      description: "Interactive visualization of common data structures and algorithms.",
      language: "C++",
      technologies: ["C++", "Graphics", "Algorithms"],
      github: "#",
      demo: "#",
      status: "Completed",
      featured: true
    },
    {
      id: 4,
      title: "Calculator Pro",
      description: "Advanced calculator with scientific functions and expression parsing.",
      language: "Python",
      technologies: ["Python", "Math", "GUI"],
      github: "#",
      demo: "#",
      status: "Completed",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-pink-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-b border-pink-500/20 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Eusha Ibna Akbor
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-pink-400 border-b-2 border-pink-400'
                      : 'text-gray-300 hover:text-pink-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-pink-400 hover:bg-slate-800"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-pink-500/20 bg-slate-900/95">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-pink-400 hover:bg-slate-800 rounded-md"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Hello, I'm
                  <span className="block bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Eusha Ibna Akbor
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  A passionate 16-year-old developer and chess enthusiast, crafting digital solutions while mastering the art of strategic thinking.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-blue-600 transition-all duration-200 flex items-center gap-2 shadow-lg"
                >
                  <Folder size={20} />
                  View Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-lg font-medium hover:bg-pink-400 hover:text-white transition-colors duration-200"
                >
                  Get In Touch
                </button>
              </div>

              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                  <Code size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-gradient-to-r from-pink-400 to-blue-400 shadow-2xl shadow-pink-500/20">
                  <img 
                    src="/481281109_1096804492202639_400819024598160651_n.jpg" 
                    alt="Eusha Ibna Akbor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">👋</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A young mind with big dreams, combining academic excellence with a passion for technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi! I'm Eusha Ibna Akbor, a 16-year-old Class 10 student at <span className="font-semibold text-pink-400">Shaheed Colonel Kazi Emdadul Haque Public School</span>. 
                While most of my peers are just discovering their interests, I've already fallen in love with the world of programming and strategic thinking.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With <span className="font-semibold text-blue-400">2 years of Python experience</span> under my belt, I've discovered that coding is like playing chess - 
                it requires patience, strategy, and the ability to think several moves ahead. Speaking of chess, I'm quite skilled at it too! 
                The logical thinking from chess perfectly complements my programming journey.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently, I'm expanding my horizons by learning <span className="font-semibold text-pink-400">C++</span> and strengthening my foundation in 
                web technologies. I believe in continuous learning and am always excited to take on new challenges that push my boundaries.
              </p>
              
              <div className="bg-gradient-to-r from-pink-900/30 to-blue-900/30 p-6 rounded-xl border border-pink-500/20">
                <p className="text-gray-300 italic">
                  "Every line of code I write and every chess move I make teaches me something new about problem-solving and strategic thinking."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 rounded-xl text-center border border-blue-500/20">
                <BookOpen className="mx-auto text-blue-400 mb-3" size={32} />
                <div className="text-2xl font-bold text-blue-400 mb-2">16 Years</div>
                <div className="text-gray-300 text-sm">Age</div>
              </div>
              <div className="bg-gradient-to-br from-pink-900/50 to-pink-800/50 p-6 rounded-xl text-center border border-pink-500/20">
                <Code className="mx-auto text-pink-400 mb-3" size={32} />
                <div className="text-2xl font-bold text-pink-400 mb-2">2 Years</div>
                <div className="text-gray-300 text-sm">Python Experience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-6 rounded-xl text-center border border-purple-500/20">
                <Trophy className="mx-auto text-purple-400 mb-3" size={32} />
                <div className="text-2xl font-bold text-purple-400 mb-2">Chess</div>
                <div className="text-gray-300 text-sm">Strategic Player</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-900/50 to-indigo-800/50 p-6 rounded-xl text-center border border-indigo-500/20">
                <div className="text-2xl font-bold text-indigo-400 mb-2">5+</div>
                <div className="text-gray-300 text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my Python and C++ projects that demonstrate my growing skills and passion for development
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-pink-400 mb-8 flex items-center gap-2">
              <Star className="text-pink-400" size={24} />
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project) => (
                <div key={project.id} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 shadow-lg hover:shadow-pink-500/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-2 rounded-lg">
                        <Folder className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{project.title}</h4>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          project.language === 'Python' 
                            ? 'bg-green-900/50 text-green-400 border border-green-500/30' 
                            : 'bg-blue-900/50 text-blue-400 border border-blue-500/30'
                        }`}>
                          {project.language}
                        </span>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-900/50 text-green-400' 
                        : 'bg-yellow-900/50 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full border border-slate-600/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.demo} 
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-8 flex items-center gap-2">
              <Code className="text-blue-400" size={24} />
              All Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Folder className="text-gray-400" size={18} />
                      <h4 className="font-semibold text-white text-sm">{project.title}</h4>
                    </div>
                    {project.featured && <Star className="text-pink-400" size={16} />}
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.language === 'Python' 
                        ? 'bg-green-900/30 text-green-400' 
                        : 'bg-blue-900/30 text-blue-400'
                    }`}>
                      {project.language}
                    </span>
                    <div className="flex gap-3">
                      <a href={project.github} className="text-gray-400 hover:text-pink-400 transition-colors">
                        <Github size={14} />
                      </a>
                      <a href={project.demo} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upload New Project CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-pink-900/30 to-blue-900/30 rounded-xl p-8 border border-pink-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
              <p className="text-gray-300 mb-6">I'm constantly working on new projects and learning new technologies. Check back regularly for updates!</p>
              <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-blue-600 transition-all duration-200 flex items-center gap-2 mx-auto">
                <Github size={20} />
                View GitHub Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies I've mastered and those I'm currently exploring
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Python */}
            <div className="bg-slate-800/60 rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-green-400 p-3 rounded-lg mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Python</h3>
              </div>
              <p className="text-gray-300 mb-4">2 years of experience building projects and solving problems</p>
              <div className="bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
              <span className="text-sm text-green-400 mt-2 block">Advanced</span>
            </div>

            {/* C++ */}
            <div className="bg-slate-800/60 rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-3 rounded-lg mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">C++</h3>
              </div>
              <p className="text-gray-300 mb-4">Currently learning and exploring object-oriented programming</p>
              <div className="bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
              <span className="text-sm text-blue-400 mt-2 block">Learning</span>
            </div>

            {/* Web Technologies */}
            <div className="bg-slate-800/60 rounded-xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-3 rounded-lg mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Web Dev</h3>
              </div>
              <p className="text-gray-300 mb-4">HTML, CSS, and JavaScript for creating web experiences</p>
              <div className="bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-pink-500 to-pink-400 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <span className="text-sm text-pink-400 mt-2 block">Intermediate</span>
            </div>

            {/* Chess */}
            <div className="bg-slate-800/60 rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-purple-400 p-3 rounded-lg mr-4">
                  <Trophy className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Chess</h3>
              </div>
              <p className="text-gray-300 mb-4">Strategic thinking and tactical planning on the board</p>
              <div className="bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full" style={{width: '80%'}}></div>
              </div>
              <span className="text-sm text-purple-400 mt-2 block">Skilled</span>
            </div>

            {/* Problem Solving */}
            <div className="bg-slate-800/60 rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 p-3 rounded-lg mr-4">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Problem Solving</h3>
              </div>
              <p className="text-gray-300 mb-4">Analytical thinking and creative solution development</p>
              <div className="bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 h-2 rounded-full" style={{width: '90%'}}></div>
              </div>
              <span className="text-sm text-indigo-400 mt-2 block">Excellent</span>
            </div>

            {/* Academic Excellence */}
            <div className="bg-slate-800/60 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 p-3 rounded-lg mr-4">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Academics</h3>
              </div>
              <p className="text-gray-300 mb-4">Balancing studies with passion for technology</p>
              <div className="bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
              <span className="text-sm text-cyan-400 mt-2 block">Strong</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Interested in collaborating on a project or just want to chat about tech and chess?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  I'm always excited to connect with fellow developers, chess enthusiasts, or anyone interested in technology. 
                  Whether you want to discuss a coding project, challenge me to a chess game, or just have a friendly conversation, 
                  feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-3 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <div className="text-gray-300">eusha.akbor@example.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-white">School</div>
                    <div className="text-gray-300">Shaheed Colonel Kazi Emdadul Haque Public School</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-white">Interests</div>
                    <div className="text-gray-300">Programming, Chess, Problem Solving</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <a href="#" className="bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 border border-slate-600">
                  <Github size={24} />
                </a>
                <a href="#" className="bg-gradient-to-r from-pink-500 to-blue-500 text-white p-3 rounded-lg hover:from-pink-600 hover:to-blue-600 transition-colors duration-200">
                  <Code size={24} />
                </a>
                <a href="#" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors duration-200">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="bg-slate-800/60 p-8 rounded-xl border border-pink-500/20">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tell me about your project or just say hi..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-pink-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Send Message
                  <ExternalLink size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-pink-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Eusha Ibna Akbor. All rights reserved. Built with passion for code and chess.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;