import { h, useEffect, useState } from 'preact/hooks';

interface Project {
  image: string;
  name: string;
  description: string;
  link: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('all');

  useEffect(() => {
    // Fetch project data
    fetch('/projects/projects.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data); // Set default filter to show all projects
      });
  }, []);

  const filterProjects = (tag: string) => {
    setSelectedTag(tag);
    if (tag === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.tags.includes(tag)));
    }
  };

  return (
    <section className="p-6 bg-neutral text-secondary min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>

      {/* Filter Tag Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {['all', 'web', 'api', 'design', 'art'].map(tag => (
          <button
            key={tag}
            className={`btn btn-sm btn-outline ${selectedTag === tag ? 'bg-primary text-white' : ''}`}
            onClick={() => filterProjects(tag)}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div key={project.name} className="card shadow-lg compact bg-base-100">
            <figure>
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{project.name}</h3>
              <p>{project.description}</p>
              <div className="card-actions">
                <a href={project.link} target="_blank" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;