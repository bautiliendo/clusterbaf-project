import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo-footer-transformed.webp';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { useScrollNavigation } from "../helpers/ScrollToSection";
import { ProductOption } from "../types";
import { LanguageSwitch } from "./LanguageSwitch";
import { useLanguage } from '../hooks/useLanguage';
import translations from '../translations.json';

export const NavBar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const scrollToSection = useScrollNavigation();
  const { language } = useLanguage();
     // @ts-expect-error development
  const t = translations[language].navbar;
     // @ts-expect-error development
  const tProductOptions = translations[language].productOptions;

  const handleNav = () => {
    setNav(!nav)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const productOptionsRoutes: Record<ProductOption, string> = {
    "ingenieriaGestion": "/ingenieriaGestion",
    "ingenieriaProcesos": "/ingenieriaProcesos",
    "industrializacion": "/industrializacion",
    "mantenimiento": "/mantenimiento",
    "outsourcing": "/outsourcing",
    "capacitaciones": "/capacitaciones"
  };

  const productOptions: ProductOption[] = Object.keys(productOptionsRoutes) as ProductOption[];


  return (
    <div className="top-0 left-0 w-full z-50 fixed bg-rich_black">
      <div className='flex items-center justify-between h-30 text-white px-4 max-w-7xl mx-auto'>
        <div className="flex-shrink-0">
          <img src={Logo} className="sm:h-16 h-14 cursor-pointer my-4" onClick={() => scrollToSection("hero")} alt="Logo Clusterbaf" />
        </div>
        <div className="flex flex-grow justify-end items-center">
          <ul className='hidden md:flex items-center font-bold text-md gap-10'>
            <li className='relative group'>

              <button
                className='flex items-center hover:scale-[1.04] border-none px-4'
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                onClick={() => {
                  scrollToSection('ingYServ')
                }}
              >
                {t.engineeringAndServices}
                <FaChevronDown className={`ml-2 mt-1 transform ${dropdownOpen ? 'rotate-180' : ''} transition-transform text-jonquil`} />
              </button>
              {dropdownOpen && (
                <div
                  className="absolute left-0 rounded-lg shadow-lg bg-rich_black  divide-y divide-gray-100 "
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="py-1">
                    {productOptions.map((option, index) => (
                      <Link
                        key={index}
                        to={productOptionsRoutes[option]}
                        className="block px-4 py-2 text-sm  text-white "
                      >
                        <p className="hover:scale-[1.02]">{index + 1}- {tProductOptions[option]}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li className='hover:scale-[1.04]'>
              <button onClick={() => scrollToSection('about')}>{t.about}</button>
            </li>
            <li className='hover:scale-[1.04]'>
              <button onClick={() => scrollToSection('contact')}>{t.contact}</button>
            </li>
            <li className=''><LanguageSwitch /></li>
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
              <img src={Logo} className="sm:h-16 h-14 cursor-pointer my-4" onClick={() => { scrollToSection('hero'); handleNav(); {dropdownOpen? toggleDropdown() : ''} }} alt="Logo Clusterbaf" />
              <AiOutlineClose size={25} onClick={() => {handleNav(); {dropdownOpen? toggleDropdown() : ''}}} className="" />
            </div>
            <ul className="p-4 font-bold flex flex-col text-center">
              <li className='p-4 border-b border-gray-600'>
                <button
                  onClick={toggleDropdown}
                  className="flex text-center mx-auto border-none hover:underline uppercase"
                >
                  {t.engineeringAndServices}
                  <FaChevronDown className={`ml-2 mt-1 transform ${dropdownOpen ? 'rotate-180' : ''} transition-transform text-jonquil`} />
                </button>
                {dropdownOpen && (
                  <>
                    <Link
                      to={'/ingYServ'}
                      className="block py-2 px-4 text-sm text-left"
                      onClick={() => {handleNav(); {dropdownOpen? toggleDropdown() : ''}}}
                    >
                      <p className="">{t.all}</p>
                    </Link>
                    <div className="mt-2 space-y-2">
                      {productOptions.map((option, index) => (
                        <Link
                          key={index}
                          to={productOptionsRoutes[option]}
                          className="block py-2 px-4 text-sm text-left"
                          onClick={() => {handleNav(); {dropdownOpen? toggleDropdown() : ''}}}
                        >
                          <p className="hover:scale-[1.02]">{index + 1}- {tProductOptions[option]}</p>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </li>
              <li className='p-4 border-b border-gray-600 hover:underline uppercase'>
                <button onClick={() => { scrollToSection('about'); handleNav(); {dropdownOpen? toggleDropdown() : ''} }}>{t.about}</button>
              </li>
              <li className='p-4 border-b border-gray-600 hover:underline uppercase'>
                <button onClick={() => { scrollToSection('contact'); handleNav(); {dropdownOpen? toggleDropdown() : ''} }}>{t.contact}</button>
              </li>
              <li className='p-4 mx-auto'><LanguageSwitch /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}