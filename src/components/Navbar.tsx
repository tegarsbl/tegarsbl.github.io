import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

const Navbar: FunctionalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-neutral text-secondary">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <a href="/" className="text-lg font-bold">Tegar Sabila</a>
        </div>
        <div className="flex-none lg:hidden">
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className={`flex-none lg:flex ${isOpen ? '' : 'hidden'}`}>
          <ul className="menu menu-horizontal p-0">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;