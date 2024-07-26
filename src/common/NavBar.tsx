import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from '../assets/logo.jpg';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFlag, FaChevronDown } from "react-icons/fa";

export const NavBar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav)
  }

  const handleLogoRedirect = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    if (pathname === '/') {
      window.scrollTo(0, 0)
    } else {
      navigate('/')
    }
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const productOptions = [
    "Ingeniería en Gestión Integral de Calidad", "Ingeniería de Procesos", "Industrialización de Componentes", "Ingeniería de Soporte", "Mantenimiento e Instalaciones Industriales ", "Outsourcing de servicios", "Capacitaciones"
  ];

  return (
    <div className="top-0 left-0 w-full z-50 fixed bg-rich_black">
      <div className='flex items-center justify-between h-30 text-white px-4 max-w-7xl mx-auto'>
        <div className="flex-shrink-0">
          <img src={Logo} className="h-24 cursor-pointer" onClick={handleLogoRedirect} alt="Logo Clusterbaf" />
        </div>
        <div className="flex flex-grow justify-end items-center">
          <ul className='hidden md:flex items-center font-bold text-md gap-10'>
            <li className='relative group'>
              <button
                className='flex items-center hover:scale-[1.04] border-none px-4'
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                Ingeniería y Servicios
                <FaChevronDown className={`ml-2 mt-1 transform ${dropdownOpen ? 'rotate-180' : ''} transition-transform text-jonquil`} />
              </button>
              {dropdownOpen && (
                <div
                  className="absolute left-0 rounded-sm shadow-lg bg-rich_black  divide-y divide-gray-100 "
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="py-1">
                    {productOptions.map((option, index) => (
                      <Link
                        key={index}
                        to="/"
                        className="block px-4 py-2 text-sm  text-white "
                      >
                        <p className="hover:scale-[1.02]">{index + 1}- {option}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li className='hover:scale-[1.04]'><Link to='/'>Nosotros</Link></li>
            <li className='hover:scale-[1.04]'><Link to='/'>Contacto</Link></li>
            <li className='hover:scale-[1.04]'><Link to='/'><FaFlag /></Link></li>
          </ul>
        </div>

        <div className="flex md:hidden items-center justify-between">
          <div>
            {nav ? (
              <AiOutlineClose size={25} onClick={handleNav} />
            ) : (
              <AiOutlineMenu size={25} onClick={handleNav} />
            )}
          </div>
        </div>

        <div onClick={handleNav} className={nav ? 'pt-6 fixed left-0 top-0 w-[100%] h-full z-50 bg-black bg-opacity-30 md:hidden' : ''}>
          <div onClick={(e) => {
            e.stopPropagation();
          }} className={nav ? 'fixed left-0 top-0 w-[100%] h-full z-50 bg-rich_black border-r-gray-900 ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
            <div className="flex items-center justify-between mx-4">
              <img src={Logo} className="h-24 cursor-pointer" onClick={(e) => { handleLogoRedirect(e); handleNav() }} alt="Logo Clusterbaf" />
              <AiOutlineClose size={25} onClick={handleNav} className="" />
            </div>
            <ul className="p-4 font-bold flex flex-col text-center">
              <li className='p-4 border-b border-gray-600'>
                <button
                  onClick={toggleDropdown}
                  className="flex text-center mx-auto border-none hover:underline uppercase"
                >
                  Ingeniería y Servicios
                  <FaChevronDown className={`ml-2 mt-1 transform ${dropdownOpen ? 'rotate-180' : ''} transition-transform text-jonquil`} />
                </button>
                {dropdownOpen && (
                  <div className="mt-2 space-y-2">
                    {productOptions.map((option, index) => (
                      <Link
                        key={index}
                        to="/"
                        className="block py-2 px-4 text-sm text-left"
                        onClick={handleNav}
                      >
                        <p className="hover:scale-[1.02]">{index + 1}- {option}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className='p-4 border-b border-gray-600 hover:underline uppercase'><Link to='/' onClick={handleNav}>Nosotros</Link></li>
              <li className='p-4 border-b border-gray-600 hover:underline uppercase'><Link to='/' onClick={handleNav}>Contacto</Link></li>
              <li className='p-4 mx-auto'><FaFlag /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}