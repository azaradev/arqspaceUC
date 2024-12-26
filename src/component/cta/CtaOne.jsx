"use client"
import Link from 'next/link';
function CtaOne() {
    return (
        <div>
            <>
                {/* rts cta area stat */}
                <div className="rts-cta-main-wrapper rts-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-style-center cta-wrapper-two">
                                    <div className="pre-title-area">
                                        <img src="assets/images/about/02.png" alt="about" />
                                        <span className="pre-title">Colabora con Nosotros</span>
                                    </div>
                                    <h2 className="title quote">
                                        <span>Estamos</span> ansiosos de aprender <br />
                                        más sobre <span>tus proyectos</span>
                                    </h2>
                                    <Link href="/contact" className="rts-btn btn-border">
                                        Conocer Más <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts cta area end */}
            </>

        </div>
    )
}

export default CtaOne