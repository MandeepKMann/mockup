import { useState } from "react";
import bears from '../carouselContent'

const Carousel = ({images}) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slideLeft = () => {
        if (currentSlide === 0) {
            setCurrentSlide(bears.length - 1)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const slideRight = () => {
        if (currentSlide === (bears.length - 1)) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    return (
        <section className="carouselSection">
            <div className="carousel">
                <div className="carouselWrapper wrapper">
                    {images.map((image, index) => {
                        return (
                            <div 
                                key={index} 
                                className={
                                    index == currentSlide 
                                    ? "carouselCard carouselCard--active" 
                                    : "carouselCard"
                                }
                            >
                                <img src={image.image} alt={image.alt} />
                                <div className="cardOverlay">
                                    <h2 className="cardTitle">{image.title}</h2>
                                </div>
                            </div>
                        )
                    })}
                    <div className="carouselArrowLeft" onClick={slideLeft}>&lsaquo;</div>
                    <div className="carouselArrowRight" onClick={slideRight}>&rsaquo;</div>
                    <div className="carouselPagination">
                        {images.map((images, index) => {
                            return (
                                <div 
                                    key={index}
                                    className={
                                    index == currentSlide 
                                    ? "paginationDot paginationDot--active" 
                                    : "paginationDot"
                                    }
                                >
                                        

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Carousel;