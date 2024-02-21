export default function ProjectDisplay({ projectId, projects }) {
    // Lógica para obtener el contenido asociado al ID de la projectn seleccionada
    console.log(projectId)

    const projectContent = projects.find((project) => project.id === projectId);
    console.log(projectContent)
  
    return (
      <div className="project-display mx-auto">
        <h2>{projectContent.title}</h2>
        <p>{projectContent.description}</p>
        <img src={projectContent.src}/>
        {/* Otros elementos del proyecto */}
      </div>
    );
  }
  