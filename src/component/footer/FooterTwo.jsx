import React from 'react'
import Link from "next/link";
import Image from 'next/image';
function FooterTwo() {
    return (
        <div>

            <>
                {/* rts footer area start */}
                <div className="rts-footer-area bg-light social-jumpanimation" id='get-contact'>
                    <div className="container">
                        <div className="row g-5   ptb--100 ptb_sm--60 ptb_md--80">
                            <div className="col-lg-4">
                                {/* footer-two wrapper */}
                                <div className="footer-two-main-wrapper">
                                    <Link href="#" className="logo">
                                        <Image width={151} height={25} src="assets/images/logo/logo-b.svg" alt="logo" />
                                    </Link>
                                    {/* social style two */}
                                    <ul className="social-style-two-wrapper social-anim">
                                        <li>
                                            <Link className="counter__anim" href="#">
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="counter__anim" href="#">
                                                <i className="fa-brands fa-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="counter__anim" href="#">
                                                <i className="fa-brands fa-youtube" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="counter__anim" href="#">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* social style two end */}
                                </div>
                                {/* footer-two wrapper end */}
                            </div>
                            <div className="col-lg-8">
                                <div className="footer-two-main-wrapper-right">
                                    {/* single footer two wozed */}
                                    <div className="single-footer-wized">
                                        <div className="location-information">
                                            <div className="location">
                                                <p>
                                                    Facultad de Arquitectura <br />
                                                    <strong>Universidad Continental</strong>
                                                </p>
                                            </div>
                                            <div className="contact-call">
                                                <Link href="#">+51 987 654 321</Link>
                                                <span>Para más información</span>
                                            </div>
                                            <div className="contact-call">
                                                <Link href="#">arquitectura@continental.edu.pe</Link>
                                                <span>Correo para consultas</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single footer two wozed */}
                                    {/* single footer two wozed */}
                                    <div className="single-footer-wized">
                                        <div className="location-information">
                                            <div className="location">
                                                <h6 className="title">Enlaces relevantes</h6>
                                            </div>
                                            <ul>
                                                <li>
                                                    <Link href="#">Elígenos</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Nuestro Blog</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Trabajos en proceso</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">FAQ’s</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Soporte</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* single footer two wozed */}
                                    {/* single footer two wozed */}
                                    <div className="single-footer-wized">
                                        <div className="location-information">
                                            <div className="location">
                                                <h6 className="title">Nuevas Noticias</h6>
                                                <p className="disc-f">
                                                    Suscríbete a nuestra revista &amp; y recibe actualizaciones.
                                                </p>
                                            </div>
                                            <form action="#">
                                                <div className="input-email">
                                                    <input type="text" placeholder="Ingresa tu correo" />
                                                    <button>
                                                        <i className="fa-thin fa-arrow-right" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* single footer two wozed */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rts-copyright-area-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copy-right-area-inner-two">
                                        <p className="disc">Copyright 2024. Derechos Reservados.</p>
                                        <div className="right">
                                            <ul>
                                                <li>
                                                    <Link href="#">Términos &amp; y Condiciones</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Políticas de Privacidad</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts footer area end */}
            </>

        </div>
    )
}

export default FooterTwo