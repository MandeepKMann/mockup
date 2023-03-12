import { useEffect, useState, useRef } from "react";


// https://www.youtube.com/watch?v=SAWQ_LmyY2Q
const Carousel = ({images}) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const [autoPlay, setAutoPlay] = useState(true);

    //useRef allows timeOutRef to persist accross each render
    const timeOutRef = useRef(null);

    //sets the reference of the timeOutRef to setTimeOut that slides right
    useEffect(() => {
        //if autoPlay = true, change the timeOutRef.current from null to setTimeout with the cbf that calls slideRight every 3.5 seconds
        timeOutRef.current = autoPlay && setTimeout(() => {
            slideRight()
        }, 3500)
    }, )

    const slideLeft = () => {
        if (currentSlide === 0) {
            setCurrentSlide(images.length - 1)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const slideRight = () => {
        if (currentSlide === (images.length - 1)) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const paginationClick = (index) => {
        setCurrentSlide(index)
    }

    return (
        <section className="carouselSection">
            <div 
                className="carousel wrapper"
                onMouseEnter={() => {
                    setAutoPlay(false)
                    clearTimeout(timeOutRef.current)
                }}
                onMouseLeave={() => {
                    setAutoPlay(true)
                }}
            >
                <div className="carouselSlides">
                    {images.map((image, index) => {
                        return (
                            <div 
                                key={index} 
                                className={
                                    index === currentSlide 
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
                    <div className="carouselArrowLeft" tabIndex="1" onClick={slideLeft}>&lsaquo;</div>
                    <div className="carouselArrowRight" tabIndex="1" onClick={slideRight}>&rsaquo;</div>
                    <div className="carouselPagination">
                        {images.map((_, index) => {
                            return (
                                <div 
                                    key={index}
                                    tabIndex="1"
                                    className={
                                    index === currentSlide 
                                    ? "paginationDot paginationDot--active" 
                                    : "paginationDot"
                                    }
                                    onClick={() => paginationClick(index)}
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