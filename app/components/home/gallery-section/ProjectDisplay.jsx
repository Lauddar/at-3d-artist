
import { Changa_One } from 'next/font/google';
import { isInSection } from "../../../utils/utils";
import ProjectPopup from './ProjectPopup';

const changaOne = Changa_One({ subsets: ['latin'], weight: '400' });

export default function ProjectDisplay({ projectId, projects }) {
  const projectContent = projects.find((project) => project.id == projectId);

  const handlePopupOpen = () => {
    // Lógica para abrir el popup
  };

  return (
    <div id="projectDisplay" className={`project-display mx-auto flex gap-[3vw] ${isInSection("projectDisplay") ? 'z-20' : ''}`}>
      <div className="w-3/5 flex-none mr-4">
        <div className="relative h-full w-auto overflow-hidden mx-auto rounded-md">
          <img src={projectContent.src} alt={projectContent.title} className="w-auto h-full absolute-img" />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="pt-[15%]">
          <h2 className="text-2xl bold">{projectContent.title}</h2>
          <p className="pt-2">{projectContent.description}</p>
        </div>
        <div className="justify-end pb-[30%]">
          <button className={`bg-tertiary text-black font-bold py-2 px-4 rounded tracking-wide ${changaOne.className}`} onClick={handlePopupOpen}>Ver proyecto</button>
        </div>
      </div>
      {/*<ProjectPopup />*/}
    </div>
  );
}
