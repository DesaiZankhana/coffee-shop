import React from 'react'
import logo from '../../assets/images/logo.gif'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Drink', path: '/drink' },
    { label: 'Food', path: '/food' },
    { label: 'Merchandise', path: '/merchandise' },
    { label: 'Coffee At Home', path: '/coffee-at-home' },
  ];

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setIsDrawerOpen(false)
    );
  }, []);

  return (
    <>
      <header className="bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center xl:py-7 lg:py-5 py-4">
            <div className="flex items-center gap-x-3">
              {/* Mobile menu button - hidden on md and up */}
              <button
                className="block lg:hidden text-white focus:outline-none"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className='hidden lg:flex items-center gap-x-3'>
                <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
                <h1 className="text-xl font-semibold">Terres de Café</h1>
              </div>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative text-white hover:text-gray-200 transition-colors duration-200 group font-medium tracking-wider"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
            <div className='flex lg:hidden items-center gap-x-2 cursor-pointer'>
              <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
              <h1 className="text-lg font-medium">Terres de Café</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay that closes the drawer when clicked */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[9998] md:hidden transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Off-canvas drawer */}
      <div
        className={`fixed z-[9999] pointer-events-auto bg-primary text-white box-border md:w-[300px] w-[260px] shadow-2xl shadow-blue-gray-900/10 top-0 left-0 p-4 h-screen transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="mb-2 py-2 px-3 flex justify-between items-center">
          <img
            className="2xl:h-[56px] 2xl:w-[122px] xl:h-[56px] xl:w-[122px] h-12 w-auto rounded-full cursor-pointer"
            src={logo}
            alt="Workflow"
          />
          <div>
            <button
              color="blue-gray"
              onClick={(e) => setIsDrawerOpen(false)}
              className='p-3'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-3 py-1 flex flex-col justify-between h-[85vh]">
          <div className="">
            {navItems.map((item) => (
              <div key={item.path} className='my-4'>
                <Link
                  to={item.path}
                  className="relative block my-2 rounded-md text-white font-medium px-4 py-3 text-base hover:bg-white/10 transition-all duration-200 group"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.label}
                  <span className="absolute left-0 top-0 w-0.5 h-0 bg-white transition-all duration-300 group-hover:h-full"></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header