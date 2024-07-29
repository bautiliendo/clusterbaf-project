export const handleWhatsapp = (e: React.FormEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const mensaje = "Hola! Me contacto desde su página web para realizar una consulta"
  const numeroTel = '5493515581441';
  const whatsappLink = `https://wa.me/${numeroTel}?text=${encodeURIComponent(mensaje)}`;
  window.open(whatsappLink, '_blank')
}

export const handleLinkedIn = (e: React.FormEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const link = "https://www.linkedin.com/company/clusterbaf/about/";
  window.open(link, '_blank')
}

import React from 'react';

export const handleGmail = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const email = 'comercial@clusterbaf.com';
  const subject = 'Consulta desde la página web';
  const body = 'Hola, me gustaría obtener más información sobre...';

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(gmailLink, '_blank');

};