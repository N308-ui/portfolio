import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, ChevronDown, Shield, Terminal, Code, Server, Cpu, Trophy, GraduationCap, Lock, Wifi, Bug, Binary } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const text = "Senior Developer & Ethical Hacker";
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: "Network Security Scanner",
      description: "Advanced vulnerability assessment tool built with C++ and Python",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      tags: ["C++", "Python", "Network Security", "Pentesting"],
      icon: <Wifi className="text-green-500" size={24} />,
      link: "#"
    },
    {
      title: "Security Dashboard",
      description: "Real-time security monitoring dashboard with threat detection",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=800",
      tags: ["TypeScript", "React", "Docker", "Security"],
      icon: <Lock className="text-green-500" size={24} />,
      link: "#"
    },
    {
      title: "Web Application Firewall",
      description: "Custom WAF implementation with advanced threat detection",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      tags: ["C", "PHP", "Bash", "Security"],
      icon: <Shield className="text-green-500" size={24} />,
      link: "#"
    }
  ];

  const skills = [
    { name: "C/C++", icon: <Code size={24} />, level: "Expert", percentage: 95 },
    { name: "Assembly", icon: <Cpu size={24} />, level: "Expert", percentage: 90 },
    { name: "TypeScript/JavaScript", icon: <Terminal size={24} />, level: "Advanced", percentage: 85 },
    { name: "Penetration Testing", icon: <Bug size={24} />, level: "Expert", percentage: 95 },
    { name: "Docker", icon: <Server size={24} />, level: "Advanced", percentage: 85 },
    { name: "Binary Exploitation", icon: <Binary size={24} />, level: "Expert", percentage: 90 },
  ];

  const achievements = [
    { name: "HackTheBox Elite Hacker", icon: <Trophy size={24} />, description: "Achieved Elite status on HackTheBox platform" },
    { name: "1337 School Morocco", icon: <GraduationCap size={24} />, description: "Senior Software Developer & Security Engineer" },
  ];

  return (
    <div className={`min-h-screen gradient-bg transition-colors duration-300 relative overflow-hidden`}>
      <div className="matrix-rain">
        <div className="scan-line"></div>
      </div>
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed w-full backdrop-blur-sm z-50 border-b border-green-500/20">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-500 glitch terminal-cursor">&gt; Hamza.sec_</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-green-500/10 transition-colors text-green-500"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className={`pt-32 pb-16 px-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto">
            <div className="max-w-3xl backdrop-blur-md bg-black/40 p-8 rounded-2xl border border-green-500/20 card-glow">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-12 h-12 text-green-500" />
                <h1 className="text-5xl font-bold text-green-500 hover-glow">
                  Hamza Barda
                </h1>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-green-400 typing-effect">
                {typedText}
              </h2>
              <p className="text-xl text-green-300/80 mb-8">
                Elite HackTheBox member and 1337 School graduate, specialized in low-level security, 
                ethical hacking, and system architecture. Committed to securing digital infrastructure 
                through advanced penetration testing and secure development practices.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/nvyay012" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors hover-glow">
                  <Github /> GitHub
                </a>
                <a href="#" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors hover-glow">
                  <Linkedin /> LinkedIn
                </a>
                <a href="mailto:hbarda@student.1337.ma" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors hover-glow">
                  <Mail /> Email
                </a>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-16 flex justify-center">
            <ChevronDown className="animate-bounce text-green-500/50" />
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-green-500 terminal-cursor">&gt; Elite_Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="backdrop-blur-md bg-black/40 p-6 rounded-xl border border-green-500/20 card-glow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-green-500">{achievement.icon}</div>
                    <h3 className="text-xl font-bold text-green-400 hover-glow">{achievement.name}</h3>
                  </div>
                  <p className="text-green-300/80">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-green-500 terminal-cursor">&gt; Technical_Arsenal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="backdrop-blur-md bg-black/40 p-6 rounded-xl border border-green-500/20 card-glow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-green-500">{skill.icon}</div>
                    <h3 className="text-xl font-bold text-green-400 hover-glow">{skill.name}</h3>
                  </div>
                  <div className="skill-bar mt-2">
                    <div 
                      className="skill-progress" 
                      style={{ transform: `scaleX(${skill.percentage / 100})` }}
                    />
                  </div>
                  <p className="text-green-300/80 mt-2">{skill.level} - {skill.percentage}%</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-green-500 terminal-cursor">&gt; Security_Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-black/40 rounded-xl overflow-hidden border border-green-500/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group card-glow"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a href={project.link} className="text-green-400 flex items-center gap-2 hover-glow">
                        View Project <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {project.icon}
                      <h3 className="text-xl font-bold text-green-400 hover-glow">{project.title}</h3>
                    </div>
                    <p className="text-green-300/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-green-500/5 text-sm rounded-full text-green-400 border border-green-500/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 bg-black/40">
          <div className="container mx-auto max-w-3xl text-center backdrop-blur-md bg-black/40 p-8 rounded-2xl border border-green-500/20 card-glow">
            <h2 className="text-3xl font-bold mb-6 text-green-500 terminal-cursor">&gt; Initialize_Contact</h2>
            <p className="text-green-300/80 mb-8">
              Need a security audit or penetration testing services?
              Let's work together to identify and eliminate vulnerabilities in your systems.
            </p>
            <a
              href="mailto:hbarda@student.1337.ma"
              className="inline-flex items-center gap-2 bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-400 transition-colors"
            >
              Start Mission <Terminal size={20} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;