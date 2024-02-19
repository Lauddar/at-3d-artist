export default function ProjectDisplay({ imageId }) {
    // Lógica para obtener el contenido asociado al ID de la imagen seleccionada
    const projectContent = projects.find((project) => project.id === imageId);
  
    return (
      <div className="project-display">
        <h2>{projectContent.title}</h2>
        <p>{projectContent.description}</p>
        {/* Otros elementos del proyecto */}
      </div>
    );
  }
  