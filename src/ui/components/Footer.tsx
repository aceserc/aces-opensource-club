import { Link } from "react-router-dom";
import { socialLinks } from "../../data/socialLinks";
import { ICONS } from "../../assets/icons/icons";

const iconUrls: { [key: string]: string } = {
  facebook: ICONS.facebook,
  twitter: ICONS.twitter,
  instagram: ICONS.instagram,
  linkedin: ICONS.linkedin,
  github: ICONS.github,
};

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center mb-4">
              <img src="/logo.webp" alt="ACES Logo" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">ACES</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              © 2024 ACES Open Source Club. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" to="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" to="#">
                Privacy Policy
              </Link>
              <Link className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" to="#">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {Object.entries(socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <img src={iconUrls[platform]} alt={`${platform} icon`} className="w-6 h-6" />
                  <span className="sr-only">{platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Developed with ❤️ by <a href="https://github.com/dev-sandip" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">Sandip</a>
            {" "}and <a href="" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">Contributors</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
