// Central place for contact details & links — change once, updates everywhere.
export const PHONE = '+916350566157';
export const PHONE_DISPLAY = '+91 63505 66157';
export const PHONE_2_DISPLAY = '+91 96721 10755';
export const EMAIL = 'venzaroblue@gmail.com';
export const WHATSAPP = '916350566157';
export const CHANNEL = 'https://whatsapp.com/channel/0029VbChTP1GpLHN5xjJpE3y';

export const wa = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { to: '/ready-stock-jeans', label: 'Ready Stock' },
  { to: '/white-label-jeans-manufacturer', label: 'White Label' },
  { to: '/jeans-business-consulting', label: 'Consulting' },
  { to: '/jeans-business-startup-guide', label: 'Startup Guide' },
  { to: '/jeans-manufacturing-training', label: 'Training' },
  { to: '/contact', label: 'Contact' },
];
