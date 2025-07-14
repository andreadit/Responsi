
export const educationHistory = [{ id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika', logo: '/images/amikom.svg' }, 
  { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 01 Bangunrejo', major: 'MIPA', logo: '/images/sma.jpg' },
{id: 3, period: '2017 - 2020', institution: 'SMP Negeri 02 Bangunrejo',logo:'/images/smp.png' },
{id: 4, period: '2011 - 2017', institution: 'SD Negeri 04 Tanjungjaya',logo:'/images/sd.png' }]; 
export const skills = [   { name: 'Vue.js', level: 'Mahir' }, { name: 'JavaScript', level: 'Mahir' }, 
  { name: 'Tailwind CSS', level: 'Menengah' }, { name: 'Node.js', level: 'Menengah' }, 
  { name: 'Express.js', level: 'Menengah' }, { name: 'MySQL', level: 'Mahir' }, 
  { name: 'Git & GitHub', level: 'Mahir' }, { name: 'HTML5 & CSS3', level: 'Mahir' },]; 
export const projects = [ { title: 'Website Pembelian Ticket ', image:'/images/logo1.png', 
description: 'Platform e-commerce dengan mudah saat kita ingin membeli tiket event di Yogyakarta.', tech: ['Vue.js', 'Laravel', 
'MySQL'], link: '#' }, 
  { title: '1XCV', image: '/images/logo2.png', 
description: 'Aplikasi untuk membuat CV yang modern dan berkualitas hanya dengan 1X klik.', tech: ['C++', 'MySQL','Figma'], link: '#' }]; 
module.exports = { educationHistory, skills, projects };