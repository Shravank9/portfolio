import { useState } from 'react';
import './App.css';
import { Mail, Briefcase, ExternalLink, Code2, Award, Users } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiCodechef, SiLeetcode, SiCodeforces } from 'react-icons/si';
import { SpeedInsights } from '@vercel/speed-insights/react';

import signToTextImg from './assets/sign_to_text.png';
import heartFailureImg from './assets/heart_failure.png';
import virtualWardrobeImg from './assets/virtual_wardrobe.png';
import automotivePortalImg from './assets/automotive_portal.png';
import factoryiqPortalImg from './assets/factoryiq_portal.png';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <nav id="desktop-nav" className="navbar">
        <div className="nav-brand">Shravan Kumar</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#coding-profiles">Coding Profiles</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <nav id="hamburger-nav" className="hamburger-nav">
        <div className="nav-brand">Shravan Kumar</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuActive ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuActive ? 'open' : ''}`}>
            <a href="#about" onClick={toggleMenu}>About</a>
            <a href="#experience" onClick={toggleMenu}>Experience</a>
            <a href="#coding-profiles" onClick={toggleMenu}>Coding Profiles</a>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
            <a href="#achievements" onClick={toggleMenu}>Achievements</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-pic-container">
          {/* Placeholder for the user's photo. They can upload a profile.png to the public folder later */}
          <img
            src="./favicon.svg"
            alt="Profile picture of Gandesiri Shravan Kumar"
            className="about-pic"
            onError={(e) => {
              e.target.src = 'https://ui-avatars.com/api/?name=Shravan+Kumar&size=400&background=e0e0e0&color=333&rounded=true';
            }}
          />
        </div>
        <div className="hero-text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Gandesiri Shravan Kumar</h1>
          <h2 className="section__text__p2">AI & ML Enthusiast</h2>
          <div className="hero-btns">
            <a href="./resume.pdf" download className="btn btn-color-1" style={{ backgroundColor: '#555', color: 'white', borderColor: '#555' }}>Download CV</a>
            <a href="#contact" className="btn btn-color-1">Contact Info</a>
          </div>
          <div id="socials-container">
            <a href="https://www.linkedin.com/in/gandesiri-shravan-kumar-a8a0a2322" style={{ display: 'contents' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0a66c2' }}>
                <FaLinkedinIn size={16} color="#ffffff" />
              </div>
            </a>
            <a href="https://github.com/Shravank9" style={{ display: 'flex', alignItems: 'center' }}>
              <FaGithub size={40} color="#333" />
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="section-title">About Me</h1>
        <div className="about-details-container">
          <div className="details-container">
            <Briefcase size={32} color="#333" style={{ marginBottom: '1rem' }} />
            <h3>Experience</h3>
            <p>AI-ML Virtual Internship<br />AICTE & Google for Developers</p>
          </div>
          <div className="details-container">
            <Users size={32} color="#333" style={{ marginBottom: '1rem' }} />
            <h3>Education</h3>
            <p style={{ color: 'var(--text-secondary)' }}>B.Tech. Computer Science and<br />Engineering (Artificial Intelligence<br />and Machine Learning)</p>
          </div>
        </div>
        <div style={{ maxWidth: '800px', textAlign: 'justify', margin: '2rem auto', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Welcome to my portfolio!
          </p>
          <p style={{ marginBottom: '1rem' }}>
            I’m Gandesiri Shravan Kumar. Having successfully completed an AI-ML Virtual Internship program supported by AICTE and Google for Developers, I bring expertise in Python, React, Node.js, and Machine Learning frameworks, building intelligent AI applications and scalable full-stack solutions.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            I have completed my B.Tech in Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning from CMR Technical Campus (awaiting final semester results). Over the years, I’ve developed a strong foundation in full-stack development, software engineering, problem-solving, and data-driven design.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            In the fast-paced world of technology, I approach challenges with a solution-driven and innovative mindset, striving to deliver impactful, efficient, and user-centric applications. I’m passionate about pushing boundaries, continuously learning, and contributing to the ever-evolving tech landscape.
          </p>
        </div>
      </section>

      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="section-title">Experience</h1>
        <div className="grid-container">
          <div className="card">
            <h3>Frontend</h3>
            <ul className="skills-list">
              <li><span>HTML5 & CSS3</span> <span className="skills-level">Experienced</span></li>
              <li><span>JavaScript</span> <span className="skills-level">Experienced</span></li>
              <li><span>React.js</span> <span className="skills-level">Intermediate</span></li>
            </ul>
          </div>
          <div className="card">
            <h3>Backend</h3>
            <ul className="skills-list">
              <li><span>Python</span> <span className="skills-level">Experienced</span></li>
              <li><span>Node.js</span> <span className="skills-level">Intermediate</span></li>
              <li><span>Django</span> <span className="skills-level">Intermediate</span></li>
              <li><span>REST APIs</span> <span className="skills-level">Intermediate</span></li>
              <li><span>Java</span> <span className="skills-level">Intermediate</span></li>
            </ul>
          </div>
          <div className="card">
            <h3>Databases & Tools</h3>
            <ul className="skills-list">
              <li><span>MongoDB</span> <span className="skills-level">Intermediate</span></li>
              <li><span>MySQL</span> <span className="skills-level">Intermediate</span></li>
              <li><span>Git & GitHub</span> <span className="skills-level">Experienced</span></li>
              <li><span>Postman</span> <span className="skills-level">Intermediate</span></li>
            </ul>
          </div>
          <div className="card">
            <h3>AI & ML</h3>
            <ul className="skills-list">
              <li><span>Machine Learning</span> <span className="skills-level">Intermediate</span></li>
              <li><span>NLP</span> <span className="skills-level">Intermediate</span></li>
              <li><span>Deep Learning</span> <span className="skills-level">Intermediate</span></li>
              <li><span>Generative AI</span> <span className="skills-level">Intermediate</span></li>
              <li><span>LLM & RAG Basics</span> <span className="skills-level">Basic</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="coding-profiles">
        <p className="section__text__p1">Check up on My</p>
        <h1 className="section-title">Coding Profiles</h1>
        <div className="coding-profiles-list">
          
          <a href="https://www.codechef.com/users/s227r1a6622" className="profile-row">
            <div className="profile-info">
              <SiCodechef size={36} color="#5B4638" />
              <span className="profile-name">s227r1a6622</span>
            </div>
            <div className="profile-rating">
              <span className="rating-text">Rating: 854 (Max: 1407)</span>
              <span className="rating-arrow">⬆</span>
            </div>
          </a>

          <a href="https://codeforces.com/profile/Shravan5" className="profile-row">
            <div className="profile-info">
              <SiCodeforces size={36} color="#1F8ACB" />
              <span className="profile-name">Shravan5</span>
            </div>
            <div className="profile-rating">
              <span className="rating-text">Rating: 373</span>
              <span className="rating-arrow">⬆</span>
            </div>
          </a>

          <a href="https://leetcode.com/u/227r1a6622/" className="profile-row">
            <div className="profile-info">
              <SiLeetcode size={36} color="#FFA116" />
              <span className="profile-name">227r1a6622</span>
            </div>
            <div className="profile-rating">
              <span className="rating-text">Rating: 1423</span>
              <span className="rating-arrow">⬆</span>
            </div>
          </a>

        </div>
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="section-title">Projects</h1>
        <div className="grid-container">
          <div className="card">
            <img src={virtualWardrobeImg} alt="Virtual Wardrobe Experience with AI" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '15px', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Virtual Wardrobe Experience with AI</h3>
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>Upload your photo and a garment image for realistic AI fitting. Track clothing expenses, manage your wardrobe, and analyze spending. Uses HR-VITON, pose detection, and segmentation models.<br/><br/><span style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8 }}>*Live demo is a simplified conceptual version due to ML hardware hosting constraints.</span></p>
            <div className="hero-btns" style={{ marginTop: 'auto' }}>
              <a href="https://github.com/Shravank9/virtual-Wardrobe-experience-witha-AI" className="btn btn-color-2 project-btn"><FaGithub size={18} /> GitHub</a>
              <a href="https://virtual-wardrobe-experience-witha-ai-amcguxdp9pj3whdxbd4z3k.streamlit.app" className="btn btn-color-2 project-btn"><ExternalLink size={18} /> Live Demo</a>
            </div>
          </div>
          <div className="card">
            <img src={signToTextImg} alt="Sign to Text & Vice Versa" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '15px', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Sign to Text & Vice Versa</h3>
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>Real-time Indian Sign Language translation to text and vice versa. Based on Machine Learning models like MediaPipe and LSTM to provide a seamless bi-directional communication pipeline.<br/><br/><span style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8 }}>*Live demo is a simplified conceptual version due to ML hardware hosting constraints.</span></p>
            <div className="hero-btns" style={{ marginTop: 'auto' }}>
              <a href="https://github.com/Shravank9/Sign-to-Text-Conversion-Using-AI" className="btn btn-color-2 project-btn"><FaGithub size={18} /> GitHub</a>
              <a href="https://sign-to-text-conversion-using-ai-wetnvz4byylezufjbxajlj.streamlit.app" className="btn btn-color-2 project-btn"><ExternalLink size={18} /> Live Demo</a>
            </div>
          </div>
          <div className="card">
            <img src={heartFailureImg} alt="Heart Failure Detection" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '15px', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Heart Failure Detection</h3>
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>Detects Chronic Heart Failure (CHF) using a Random Forest Aggregate Model (RFAM) trained on medical data. Predicts CHF based on key clinical features, using data preprocessing to support early diagnosis.<br/><br/><span style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8 }}>*Live demo is a simplified conceptual version due to ML hardware hosting constraints.</span></p>
            <div className="hero-btns" style={{ marginTop: 'auto' }}>
              <a href="https://github.com/Shravank9/Chronic-Heart-Failure-Detection-using-RFAM" className="btn btn-color-2 project-btn"><FaGithub size={18} /> GitHub</a>
              <a href="https://chronic-heart-failure-detection-using-rfam-eqf4mjigekb3bndjheq.streamlit.app/" className="btn btn-color-2 project-btn"><ExternalLink size={18} /> Live Demo</a>
            </div>
          </div>
          <div className="card">
            <img src={automotivePortalImg} alt="Nexgile Automotive Portal" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '15px', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Nexgile Automotive Portal</h3>
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>Full-featured React automotive dealership portal with robust modules for CRM, inventory management, sales tracking, and service operations. <br/><br/><span style={{ fontSize: '0.9rem' }}><strong>Admin:</strong> manager@nexgile.com (pw: demo123)<br/><strong>User:</strong> test@nexgile.com (pw: demo123)</span></p>
            <div className="hero-btns" style={{ marginTop: 'auto' }}>
              <a href="https://github.com/Shravank9/nexgile-automotive-portal" className="btn btn-color-2 project-btn"><FaGithub size={18} /> GitHub</a>
              <a href="https://nexgile-automotive-portal.vercel.app" className="btn btn-color-2 project-btn"><ExternalLink size={18} /> Live Demo</a>
            </div>
          </div>
          <div className="card">
            <img src={factoryiqPortalImg} alt="Nexgile FactoryIQ Portal" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '15px', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Nexgile FactoryIQ Portal</h3>
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>A comprehensive React-based Manufacturing Excellence Portal. Features advanced modules for operations tracking, real-time analytics, quality control, supply chain optimization, and after-sales management. <br/><br/><span style={{ fontSize: '0.9rem' }}><strong>Admin:</strong> admin@nexgile.com (pw: admin123)<br/><strong>User:</strong> jane@customer.com (pw: customer123)</span></p>
            <div className="hero-btns" style={{ marginTop: 'auto' }}>
              <a href="https://github.com/Shravank9/nexgile-factoryiq-portal" className="btn btn-color-2 project-btn"><FaGithub size={18} /> GitHub</a>
              <a href="https://nexgile-factoryiq-portal.vercel.app" className="btn btn-color-2 project-btn"><ExternalLink size={18} /> Live Demo</a>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements">
        <p className="section__text__p1">Have a look at My</p>
        <h1 className="section-title">Achievements</h1>
        <div className="grid-container">
          <div className="card achievement-card">
            <Award size={48} color="var(--text-primary)" style={{ marginBottom: '15px' }} />
            <h3 style={{ color: 'var(--text-primary)' }}>Top Performer</h3>
            <p style={{ color: 'var(--text-secondary)' }}>1st Prize in B-PLAN PITCH</p>
          </div>
          <div className="card achievement-card">
            <Code2 size={48} color="var(--text-primary)" style={{ marginBottom: '15px' }} />
            <h3 style={{ color: 'var(--text-primary)' }}>Problem Solver</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Solved 200+ DSA problems on LeetCode, CodeChef, Codeforces, HackerRank, and HackerEarth.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="section-title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <a href="mailto:shravank242412@gmail.com" style={{ display: 'contents' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0' }}>
                <Mail size={20} color="var(--text-primary)" />
              </div>
            </a>
            <p><a href="mailto:shravank242412@gmail.com">shravank242412@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <a href="https://www.linkedin.com/in/gandesiri-shravan-kumar-a8a0a2322" style={{ display: 'contents' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0a66c2' }}>
                <FaLinkedinIn size={16} color="#ffffff" />
              </div>
            </a>
            <p><a href="https://www.linkedin.com/in/gandesiri-shravan-kumar-a8a0a2322">LinkedIn</a></p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <nav>
          <div className="nav-links" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#coding-profiles">Coding Profiles</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <p style={{ fontSize: '1.05rem' }}>Copyright © {new Date().getFullYear()} <strong>Gandesiri Shravan Kumar</strong>. All Rights Reserved.</p>
      </footer>
      <SpeedInsights />
    </>
  );
}

export default App;
