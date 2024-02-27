import { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { changaOne } from '@/app/utils/ThemeContext';
import { isInSection } from '@/app/utils/utils';
import ProjectPopup from './ProjectPopup';

export default function ProjectDisplay({ projectId, projects }) {
  const projectContent = projects.find((project) => project.id == projectId);
  const [isVisible, setIsVisible] = useState(false);
  const [style, setStyle] = useSpring(() => ({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: config.gentle,
  }));

  const handlePopupOpen = () => {
    // Logic to open the popup
  };

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(isInSection('projectDisplay'));
    };

    updateVisibility();

    window.addEventListener('scroll', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
    };
  }, [setIsVisible]);

  useEffect(() => {
    if (isVisible) {
      setStyle({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: config.gentle,
      });
    }

    if (!isVisible) {
      setStyle({
        from: { opacity: 1, transform: 'scale(1)' },
        to: { opacity: 0, transform: 'scale(0.8)' },
        config: config.gentle,
      });
    }
  }, [isVisible, setStyle, projectId]);

  console.log('isinsection: ' + isInSection('projectDisplay'))

  return (
    <animated.div id="projectDisplay" className="project-display mx-auto flex gap-[3vw]" style={style}>
      <div className="w-3/5 flex-none mr-4">
        <div className="relative h-full w-auto overflow-hidden mx-auto rounded-md">
          <img src={projectContent.src} alt={projectContent.title} className="absolute-img" />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="pt-[15%]">
          <h2 className="text-2xl bold">{projectContent.title}</h2>
          <p className="pt-2">{projectContent.description}</p>
        </div>
        <div className="justify-end pb-[30%]">
          <button
            className={`bg-tertiary text-black font-bold py-2 px-4 rounded tracking-wide ${changaOne.className}`}
            onClick={handlePopupOpen}
          >
            Ver proyecto
          </button>
        </div>
      </div>
      {/*<ProjectPopup />*/}
    </animated.div>
  );
}
