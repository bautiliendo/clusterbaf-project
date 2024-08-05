import React from 'react';
import { isMobile } from './isMobile';

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

export const handleGmail = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const email = 'comercial@clusterbaf.com';
  const subject = 'Consulta desde la página web';
  const body = 'Hola, me gustaría obtener más información sobre...';

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(gmailLink, '_blank');

};

export const handleGmailCV = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const name = formData.get('user-name') as string;
  const email = formData.get('user-email') as string;
  const phone = formData.get('user-phone') as string;
  const message = formData.get('user-message') as string;

  const toEmail = 'comercial@clusterbaf.com';
  const subject = 'Quiero sumarme al equipo CLUSTERBAF';
  const body = `Hola, me gustaría sumarme al equipo CLUSTERBAF.

Nombre: ${name}
Email: ${email}
Teléfono: ${phone}

Mensaje:
${message}

Adjuntaré mi CV`;

  if (isMobile()) {
    // Intenta abrir la aplicación de correo nativa en dispositivos móviles
    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  } else {
    // Usa el método actual para escritorio
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, '_blank');
  }
};