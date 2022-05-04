import './App.css';
import { Fragment } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Landing from './components/landing/Landing';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';

function App() {
  return (
    <Fragment>
      <Nav />
      <Landing />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
