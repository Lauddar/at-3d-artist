const CarouselItem = ({ imageSrc, caption }) => {
    return (
      <div className="carousel-item cursor-pointer h-full rounded-2xl overflow-hidden">
        <img src={imageSrc} alt={caption} />
      </div>
    );
  };

  export default CarouselItem;
  