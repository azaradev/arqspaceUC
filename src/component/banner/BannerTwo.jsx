"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay, Keyboard, EffectFade } from 'swiper/modules';
import { useState } from 'react';
function BannerTwo() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <div className="swiper-banner-two-wrapper" id='home'>
                <div className="swiper mySwiper-banner-two">
                    <Swiper
                        modules={[Navigation, Thumbs, Autoplay, Keyboard, EffectFade]} // Import Swiper modules
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                        keyboard={{ enabled: true, onlyInViewport: true, speed: 1000 }}
                        autoplay={{ delay: 4000 }}
                        loop={true}
                        thumbs={{ swiper: thumbsSwiper }} // Connect thumbs swiper
                        effect="fade"
                        className="mySwiper-banner-two" // Class for styling
                    >
                        <SwiperSlide>
                            {/* banner-two area start */}
                            <div className="banner-twoa-rea-start bg_image banner-bg-2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* banner content two inner area start */}
                                            <div className="banner-inner-content-wrapper">
                                                <span className="pre-title">Facultad de Arquitectura </span>
                                                <h1 className="title">
                                                    Espacio <span>Arquitectónico</span> <br />
                                                    UC
                                                </h1>
                                                <p className="disc">
                                                Diseñamos espacios arquitectónicos que combinan funcionalidad, estética y sostenibilidad, creando ambientes que impactan y enriquecen la vida.
                                                </p>
                                                <a
                                                    href="/portfolio-grid-1"
                                                    className="rts-btn btn-border"
                                                >
                                                    Conoce más <i className="fa-regular fa-arrow-right" />
                                                </a>
                                            </div>
                                            {/* banner content two inner area end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* banner-two area end */}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* banner-two area start */}
                            <div className="banner-twoa-rea-start bg_image banner-bg-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* banner content two inner area start */}
                                            <div className="banner-inner-content-wrapper">
                                                <span className="pre-title">Facultad de Diseño </span>
                                                <h1 className="title">
                                                    Diseño <span>Arquitectónico</span> <br />
                                                    UC
                                                </h1>
                                                <p className="disc">
                                                Nuestros diseños arquitectónicos responden a las necesidades del presente, anticipándose al futuro y ofreciendo soluciones creativas y sostenibles.
                                                </p>
                                                <a
                                                    href="/portfolio-grid-1"
                                                    className="rts-btn btn-border"
                                                >
                                                    Diseños recientes <i className="fa-regular fa-arrow-right" />
                                                </a>
                                            </div>
                                            {/* banner content two inner area end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* banner-two area end */}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* banner-two area start */}
                            <div className="banner-twoa-rea-start bg_image banner-bg-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* banner content two inner area start */}
                                            <div className="banner-inner-content-wrapper">
                                                <span className="pre-title">Comunidad </span>
                                                <h1 className="title">
                                                    Comunidad <span>Arquitectónica</span> <br />
                                                    UC
                                                </h1>
                                                <p className="disc">
                                                Fomentamos la colaboración entre estudiantes, docentes y profesionales, creando una comunidad que impulsa la innovación y el intercambio de ideas.
                                                </p>
                                                <a
                                                    href="/portfolio-grid-1"
                                                    className="rts-btn btn-border"
                                                >
                                                    Explora más <i className="fa-regular fa-arrow-right" />
                                                </a>
                                            </div>
                                            {/* banner content two inner area end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* banner-two area end */}
                        </SwiperSlide>
                    </Swiper>
                    <div className="thumbs-swiper-main-wrapper-two">
                        {/* Swiper */}
                        <div className="swiper swiper-banner-thumb-2">
                            <Swiper
                                modules={[Navigation, Thumbs]} // Add required modules
                                slidesPerView={3}
                                onSwiper={setThumbsSwiper} // Set thumbs swiper instance
                                className="swiper-banner-thumb-2" // Class for custom styling
                            >
                                <SwiperSlide>
                                    {/* single item */}
                                    <div className="single-item">
                                        <span className="number">01</span>
                                        <div className="inner">
                                            <span className="pre">Arquitectura</span>
                                            <h6 className="title">Espacio Arquitectónico</h6>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single item */}
                                    <div className="single-item">
                                        <span className="number">02</span>
                                        <div className="inner">
                                            <span className="pre">Diseño de Interiores</span>
                                            <h6 className="title">Diseño Arquitectónico</h6>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single item */}
                                    <div className="single-item">
                                        <span className="number">03</span>
                                        <div className="inner">
                                            <span className="pre">Comunidad</span>
                                            <h6 className="title">Comunidad Arquitectónica</h6>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BannerTwo