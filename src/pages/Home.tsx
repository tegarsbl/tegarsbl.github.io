import { h } from 'preact';

const Home: React.FC = () => {
  const skills = [
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript.png' },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/48/nodejs.png' },
    { name: 'Python', icon: 'https://img.icons8.com/color/48/python.png' },
    { name: 'C++', icon: 'https://img.icons8.com/color/48/c-plus-plus.png' },
    { name: 'Graphics Design', icon: '/images/icons/graphic-design.png' },
    { name: 'Pixel Art', icon: '/images/icons/pixel-art.png' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200 text-secondary">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
            <p className="py-6">I'm Tegar Sabila, a passionate web developer. Check out my projects and get in touch!</p>
            <a href="/projects" className="btn btn-primary">View Projects</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="p-6 bg-neutral text-secondary min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map(skill => (
            <div key={skill.name} className="card p-4 shadow-lg bg-base-100 text-center w-40">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;