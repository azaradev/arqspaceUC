"use client"
import Image from 'next/image';
import Link from 'next/link';
function AboutTwo() {

    return (
        <div>

            {/* rts about area start */}
            <div className="rts-about-area rts-section-gap bg-light" id='about'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="thumbnail-image">
                                <img src="/assets/images/about/03.png" alt="about" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-inner-two-wrapper">
                                <div className="title-left-style-two">
                                    <div className="pre-title">
                                        <span className="pre-title">Proyectos</span>
                                        <img  src="/assets/images/service/02.png" alt="service" />
                                    </div>
                                    <h2 className="title quote">
                                        Nuestros Proyectos <br />
                                        Nos Representan
                                    </h2>
                                </div>
                                <p className="disc">
                                    Un vistazo a las propuestas arquitectónicas más innovadoras realizadas por nuestra comunidad.
                                </p>
                                <div className="about-in-image">
                                    <img
                                        className="rts-reveal-image-one" data-aos="move-right" data-aos-delay="100"
                                        src="/assets/images/about/04.jpg"
                                        alt="about"
                                    />
                                </div>
                                <div className="bottom-image-title mt--20">
                                    <img  src="/assets/images/about/05.png" alt="shape" />
                                    <span>“Título del Proyecto”</span>
                                </div>
                                {/* about short contact area start */}
                                <div className="about-short-contact-area mt--50">
                                    <Link href="/about" className="rts-btn btn-border">
                                        Conoce más <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                    <div className="contact-information">
                                        <i class="fa-solid fa-swatchbook"></i>
                                        <div className="information">
                                            <span>Línea de Investigación: </span>
                                            <Link href="Tel:1234567890">+236-3256.21456</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* about short contact area end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about area end */}

        </div>
    )
}

export default AboutTwo