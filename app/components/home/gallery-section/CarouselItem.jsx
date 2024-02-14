const CarouselItem = ({ imageSrc, caption }) => {
    return (
      <div className="carousel-item">
        <img src={imageSrc} alt={caption} />
      </div>
    );
  };

  export default CarouselItem;
  