import React from 'react';

interface Props {
}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="border-t-4 bg-white-700 text-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <p>&copy; WINGI store 2023</p>
        </div>
        <div>
          <a href="#" className="mx-3 hover:text-gray-400">
            About
          </a>
          <a href="#" className="mx-3 hover:text-gray-400">
            Contact
          </a>
          <a href="#" className="mx-3 hover:text-gray-400">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
