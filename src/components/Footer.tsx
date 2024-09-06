import { h, FunctionalComponent } from 'preact';

const Footer: FunctionalComponent = () => {
  const socialLinks = {
    github: "https://github.com/tegarsbl",
    facebook: "https://facebook.com/tegarsabila11"
  };

  return (
    <footer className="footer bg-base-200 p-4 text-center">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center space-x-4 mb-4">
          {/* GitHub */}
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75 0 4.33 2.782 8.012 6.625 9.308.485.089.665-.21.665-.465 0-.23-.008-.842-.013-1.651-2.713.591-3.295-1.305-3.295-1.305-.444-1.129-1.084-1.432-1.084-1.432-.887-.606.068-.592.068-.592 1.032.072 1.577 1.067 1.577 1.067.917 1.572 2.404 1.118 2.99.855.093-.664.358-1.118.651-1.374-2.298-.262-4.707-1.15-4.707-5.115 0-1.13.403-2.052 1.065-2.779-.107-.262-.463-1.313.102-2.737 0 0 .868-.278 2.84 1.06.82-.228 1.699-.342 2.568-.346.869.004 1.749.118 2.572.346 1.97-1.339 2.835-1.06 2.835-1.06.566 1.424.212 2.474.105 2.736.662.727 1.063 1.648 1.063 2.779 0 3.971-2.418 4.855-4.724 5.109.37.317.701.94.701 1.888 0 1.361-.013 2.457-.013 2.79 0 .254.178.557.673.464 3.843-1.295 6.621-4.973 6.621-9.305 0-5.376-4.374-9.75-9.75-9.75z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.533v-9.281H9.651v-3.63h3.206V9.104c0-3.17 1.928-4.901 4.749-4.901 1.35 0 2.511.099 2.846.144v3.304h-1.94c-1.52 0-1.812.724-1.812 1.786v2.336h3.625l-.473 3.63h-3.152V24h6.176c.731 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z"/>
            </svg>
          </a>
        </div>
        <p className="text-gray-600">&copy; 2024 Tegar Sabila. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;