import { Swiper, SwiperSlide } from 'swiper/react';

import images from '~/assets/images';
function Slide() {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
        >
            {images.slide.map((image) => {
                return (
                    <SwiperSlide>
                        <div className="home-slider-wrapper-slide swiper-slide">
                            <div className="home-slider-wrapper-slide-image">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default Slide;
