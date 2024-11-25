import './Project.css';

function Project() {
  return (
    <div className="project-container">
      <header className="project-header">
        <h1>Project Title</h1>
        <p>This short film that explores the interwoven effects of dreams and reality. The film unfolds through the inner world of the protagonist, revealing deep human nature.</p>
      </header>
      <div className="project-content">
        <h2>Production Team</h2>   
    <ul>
        <li>Director: Zhao</li>
        <li>Screenwriter: Qian</li>
        <li>Lead Actors: Sun</li>
        <li>Cinematographer: Li</li>
        <li>Editor: Wang</li>
        <li>Sound Designer: Cheng</li>
    </ul>

        <h2>Shooting Summary</h2>
        <p>
        This micro film lasts about 2 minutes, the shooting period is daytime, and a lot of equipment is used.
        </p>
      </div>
    </div>

    
  );
}

export default Project;