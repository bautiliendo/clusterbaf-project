import { useNavigate, useLocation } from 'react-router-dom';

export const useScrollNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // Si estamos en la página principal, hacemos scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si no estamos en la página principal, navegamos a la página principal
      // y luego hacemos scroll
      if (sectionId === 'hero') {
        navigate('/')
      }
      else navigate(`/${sectionId}`)
    }
  };

  return scrollToSection;
};