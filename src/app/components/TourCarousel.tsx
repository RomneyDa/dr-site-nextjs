"use client"
import React, { Component, ReactNode } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CarouselItem = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-[700px] flex flex-row items-center justify-center">
            <div className="h-full rounded-2xl overflow-hidden">
                {children}
            </div>
        </div>
    )
}
const TourCarousel = () => {
    return (
        <Carousel
            useKeyboardArrows
            swipeable
            showIndicators={false}
            showThumbs
            showStatus={false}
            showArrows
            renderArrowNext={(clickHandler, hasNext, label) => {
                if (!hasNext) return null
                return (
                    <div
                        className="absolute top-0 right-0 z-50 h-full flex flex-col items-center justify-center px-2 cursor-pointer group"
                        onClick={clickHandler}
                    >
                        <ArrowRight
                            className='w-16 h-16 p-3 text-white rounded-full transition-all bg-transparent group-hover:bg-black/70 flex items-center justify-center '
                        />
                    </div>
                );

            }}
            renderArrowPrev={(clickHandler, hasNext, label) => {
                if (!hasNext) return null
                return (
                    <div
                        className="absolute top-0 left-0 z-50 h-full flex flex-col items-center justify-center px-2 cursor-pointer group"
                        onClick={clickHandler}
                    >
                        <ArrowLeft
                            className='w-16 h-16 p-3 text-white rounded-full transition-all bg-transparent group-hover:bg-black/70 flex items-center justify-center '
                        />
                    </div>
                );

            }}
        >
            {/* <CarouselItem>
                <Grapes13 className='object-center object-cover' />
            </CarouselItem> */}
        </Carousel>
    )
}

export default TourCarousel
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));