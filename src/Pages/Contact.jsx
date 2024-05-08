import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

export default function Contact() {

    const {openMobileMenu, setOpenMobileMenu} = useContext(DataContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        setOpenMobileMenu(false)
    }, [])

    return (
        <div className="outlet-page">

            <div className="jobs-hero">

                <img src="./img/home/little-bg.jpg" alt="" />

                <div className="container">

                    <h1>İletişim</h1>

                    <p><Link to={'/'}>Anasayfa</Link> / İletişim</p>

                </div>

            </div>

            <div className="contact-page">

                <div className="container">

                    <img src="./img/location-contact.png" alt="" />

                    <div className="contact-box">

                        <div>
                            <p><i class="fa-solid fa-phone"></i> House 09, Road 32, Mohammadpur, UK</p>
                            <p><i class="fa-solid fa-fax"></i> +88 018 785 454 589</p>
                            <p><i class="fa-regular fa-envelope"></i> +88 123 785 132 543</p>
                            <p><i class="fa-solid fa-location-dot"></i> keller@email.com</p>
                            <div>
                                <Link><i class="fa-brands fa-instagram"></i></Link>
                                <Link><i class="fa-brands fa-twitter"></i></Link>
                                <Link><i class="fa-brands fa-facebook-f"></i></Link>
                                <Link><i class="fa-brands fa-linkedin-in"></i></Link>
                            </div>
                        </div>

                        <form>
                            <h1>İletişime Geç</h1>
                            <input type="text" placeholder="Ad Soyad" required/>
                            <input type="text" placeholder="E posta" required/>
                            <textarea name="" rows={5} placeholder="Mesajınız" required></textarea>
                            <button>Gönder</button>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}