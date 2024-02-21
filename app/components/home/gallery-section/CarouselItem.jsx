const CarouselItem = ({ projectSrc, alt, onClick }) => {
    return (
      <div className="carousel-item cursor-pointer h-full rounded-2xl overflow-hidden">
        <img src={projectSrc} alt={alt} onClick={onClick} />
      </div>
    );
  };

  export default CarouselItem;
  