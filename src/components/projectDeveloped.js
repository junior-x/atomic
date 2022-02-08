import './../App.css';
import { FaJs, FaFigma, FaSass, FaApple, FaReact, FaGithub } from 'react-icons/fa';

function ProjectDeveloped() {

  return (
    <>
      <div className='project'>
        <h3 style={{ paddingTop: '270px' }}>project developed with</h3>
        <div className='projectIcons' >
          <div className='projectIconsDiv' ><FaJs /><FaFigma /><FaSass /> <FaApple /> <FaReact /> <FaGithub /></div>
        </div>
      </div>
    </>
  );
}

export default ProjectDeveloped;