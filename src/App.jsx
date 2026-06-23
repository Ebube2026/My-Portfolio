import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CVUpload from './components/CVUpload';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  // Central Data Object
  const userData = {
    name: 'Umeaku Ebubechukwu',
    title: 'Frontend Developer & UI Designer',
    bio: 'I build accessible, responsive, and visually stunning web applications using modern technologies.',
    email: 'vanyapraise@example.com',
    phone: '+234 800 000 0000',
    location: 'Ogun, Nigeria',
    github: 'github.com/vanya-codes',
    linkedin: 'linkedin.com/in/vanya'
  };

  return (
    <div className="app">
      <Navbar ownerName={userData.name} />
      <Hero name={userData.name} title={userData.title} bio={userData.bio} />
      <About 
        name={userData.name} 
        bio={userData.bio} 
        email={userData.email} 
        phone={userData.phone} 
        location={userData.location} 
        github={userData.github} 
        linkedin={userData.linkedin} 
      />
      <Skills />
      <Projects />
      <Education />
      <CVUpload />
      <Contact />
    </div>
  );
}

export default App;
