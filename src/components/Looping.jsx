// TechLogoCarousel.jsx
import React from 'react';
import LogoLoop from './LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,   // ✅ correct
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org' }, // ✅ updated
  { node: <SiExpress />, title: 'Express.js', href: 'https://expressjs.com' },
  { node: <SiMongodb />, title: 'MongoDB', href: 'https://www.mongodb.com/' },
  { node: <SiPostgresql />, title: 'PostgreSQL', href: 'https://www.postgresql.org/' },
  { node: <SiRedux />, title: 'Redux', href: 'https://redux.js.org/' },
  { node: <SiHtml5 />, title: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
  { node: <SiCss3 />, title: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com/' },
  { node: <SiDocker />, title: 'Docker', href: 'https://www.docker.com/' },
];


const TechLogoCarousel = ({ speed = 100, logoHeight = 40, gap = 40 }) => {
  return (
    <div className="h-40 relative">
      <LogoLoop
        logos={techLogos}
        speed={speed}
        direction="left"
        logoHeight={logoHeight}
        gap={gap}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#616161"
      />
    </div>
  );
};

export default TechLogoCarousel;
