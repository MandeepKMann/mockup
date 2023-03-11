const Carousel = ({images}) => {
    return (
        <section className="carouselSection">
            <div className="carousel">
                <div className="carouselWrapper wrapper">
                    {images.map((image, index) => {
                        return (
                            <div key={index} className={index == 2 ? "carouselCard carouselCard--active" : "carouselCard"}>
                                <img src={image.image} alt={image.alt} />
                                <div className="cardOverlay">
                                    <h2 className="cardTitle">{image.title}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )

}

export default Carousel;