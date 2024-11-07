import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../shadcn/ui/sheet";
import { Button } from "../shadcn/ui/button";
import { Menu, X, Home, Info, FolderGit2, Calendar, Users, Mail, LucideIcon } from "lucide-react";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
  showIcon?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, icon: Icon, onClick, showIcon = true }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center space-x-2 text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
  >
    {showIcon && Icon && <Icon size={20} />}
    <span>{children}</span>
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/about", label: "About", icon: Info },
    { to: "/projects", label: "Projects", icon: FolderGit2 },
    { to: "/events", label: "Events", icon: Calendar },
    { to: "/team", label: "Team", icon: Users },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="px-4 font-bricolage-grotesque lg:px-6 h-16 flex items-center bg-white dark:bg-gray-800 shadow-md">
      <Link className="flex items-center justify-center" to="/">
        <img src="/logo.webp" alt="ACES Logo" className="h-8 w-8" />
        <span className="ml-2 text-xl font-bold text-indigo-600 dark:text-indigo-400">ACES</span>
      </Link>
      {/* Desktop Nav - Hide icons */}
      <nav className="hidden md:flex ml-auto gap-6">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} showIcon={false}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      {/* Mobile Nav - Show icons */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden ml-auto">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <Link className="flex items-center" to="/" onClick={() => setIsOpen(false)}>
                <img src="/logo.webp" alt="ACES Logo" className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold text-indigo-600 dark:text-indigo-400">ACES</span>
              </Link>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetTrigger>
            </div>
            <nav className="flex flex-col space-y-4 flex-grow">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} icon={item.icon} onClick={() => setIsOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
