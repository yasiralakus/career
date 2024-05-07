import { createClient } from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const DataContext = createContext(null);

export default function App() {

    const [login, setLogin] = useState(true);
    const [openLogin, setOpenLogin] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(null);
    const [otherProjects, setOtherProjects] = useState(false);
    const [inputTitle, setInputTitle] = useState(null);
    const [inputLocation, setInputLocation] = useState(null);
    const [inputStatus, setInputStatus] = useState(null);
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            setScrollPosition(scroll)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="full-page">

            <div style={openMobileMenu === true ? {right: '0'} : {}} className="mobile-menu">

                <div style={{position: 'absolute',top: '30px'}} className="mobile-button" onClick={() => setOpenMobileMenu(false)}>
                    <span style={openMobileMenu === true ? {transform: 'rotate(45deg) translateX(7px) translateY(5px)'} : {}}></span>
                    <span style={openMobileMenu === true ? {opacity: '0'} : {}}></span>
                    <span style={openMobileMenu === true ? {transform: 'rotate(135deg) translateX(-6px) translateY(5px)'} : {}}></span>
                </div>

                <ul>
                    <li><Link to={'/'}>Anasayfa</Link></li>
                    <li><Link to={'/jobs'}>İlanlar</Link></li>
                    <li><Link to={'/companies'}>Şirketler</Link></li>
                    <li><Link to={'/about-us'}>Hakkımızda</Link></li>
                    <li><Link to={'/contact'}>İletişim</Link></li>
                </ul>

            </div>

            <button id="other-button" onClick={() => (otherProjects === true ? setOtherProjects(false) : setOtherProjects(true))}>
                <i style={otherProjects === true ? {transform: 'rotate(180deg)'} : {}} className="fa-solid fa-angle-right"></i>
            </button>

            <div style={otherProjects === true ? {left: '0'}:{}} className="other-projects">

                <h1>DİĞER PROJELERİM</h1>

                <Link to={'https://yasiralakus-ankablog.netlify.app/'} className="other-projects-item">
                    <h3>Anka Blog</h3>
                </Link>

                <Link to={'https://yasiralakus-ecommerce.netlify.app/'} className="other-projects-item">
                    <h3>E-Ticaret Sitesi</h3>
                </Link>

                <Link to={'https://yasiralakus-filmapp.netlify.app/'} className="other-projects-item">
                    <h3>Dijital Film Platformu</h3>
                </Link>

                <Link to={'https://yasiralakus-rockpaperscissors.netlify.app/'} className="other-projects-item">
                    <h3>Taş Kağıt Makas</h3>
                </Link>

                <Link to={'https://weather-app-yasiralakus.netlify.app/'} className="other-projects-item">
                    <h3>Hava Durumu Uygulaması</h3>
                </Link>

                <Link to={'https://weather-app-yasiralakus.netlify.app/'} className="other-projects-item">
                    <h3>Vücut Kitle İndeksi Hesaplayıcı</h3>
                </Link>
                
            </div>

            <button onClick={() => (window.scrollTo(0, 0))} style={scrollPosition > 200 ? {opacity: '1'}: {}} className="go-to-top"><i className="fa-solid fa-arrow-up"></i></button>

            {openLogin === true && <div className="login-signup-bg">
                <div className="login-signup">
                    <button onClick={() => (setOpenLogin(false))}><i className="fa-solid fa-xmark"></i></button>
                    <header>
                        <button onClick={() => {setLogin(true)}} style={login === true ? {backgroundColor: '#007BFF', color: '#fff'} : {}}>Giriş Yap</button>
                        <button onClick={() => {setLogin(false)}} style={login === false ? {backgroundColor: '#007BFF', color: '#fff'} : {}}>Kayıt Ol</button>
                    </header>
                    {login === true ?
                        <form>
                            <input type="text" name="email" placeholder="E-posta" required />
                            <input type="password" name="password" placeholder="Şifre" required />
                            <button>Giriş Yap</button>
                            <p>Henüz hesabınız yoksa <span onClick={() => (setLogin(false))}>KAYIT OL</span>'un.</p>
                        </form>
                        :
                        <form>
                            <input type="text" name="name" placeholder="İsim" required/>
                            <input type="text" name="surname" placeholder="Soyisim" required/>
                            <input type="text" name="email" placeholder="E-posta" required/>
                            <input type="password" name="password" placeholder="Şifre" required/>
                            <button>Kayıt Ol</button>
                            <p>Zaten hesabınız varsa <span onClick={() => (setLogin(true))}>GİRİŞ YAP</span>'ın.</p>
                        </form>
                    }
                </div>
            </div>}

            <header style={scrollPosition > 30 ? {backgroundColor: '#007BFF'} : {}} className="header" id="top">

                <div className="container">

                    <h1>Keller</h1>

                    <ul className="nav">
                        <li><Link to={'/'}>Anasayfa</Link></li>
                        <li><Link to={'/jobs'}>İlanlar</Link></li>
                        <li><Link to={'/companies'}>Şirketler</Link></li>
                        <li><Link to={'/about-us'}>Hakkımızda</Link></li>
                        <li><Link to={'/contact'}>İletişim</Link></li>
                    </ul>

                    <div className="mobile-button" onClick={() => openMobileMenu === true ? setOpenMobileMenu(false) : setOpenMobileMenu(true)}>
                        <span style={openMobileMenu === true ? {transform: 'rotate(45deg) translateX(7px) translateY(5px)'} : {}}></span>
                        <span style={openMobileMenu === true ? {opacity: '0'} : {}}></span>
                        <span style={openMobileMenu === true ? {transform: 'rotate(135deg) translateX(-6px) translateY(5px)'} : {}}></span>
                    </div>

                    <ul className="auth">
                        <li onClick={() => {setOpenLogin(true)}}>Giriş Yap</li>
                        <p>veya</p>
                        <li onClick={() => {setOpenLogin(true)}}>Kayıt Ol</li>
                    </ul>
                </div>

            </header>

            <DataContext.Provider value={{inputTitle, setInputTitle, inputLocation, setInputLocation, inputStatus, setInputStatus}}>
                <Outlet />
            </DataContext.Provider>

            <footer className="footer">

                <div className="container">

                    <div>
                        <h1>Keller</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi architecto iusto ab officia iure maiores!</p>
                        <div>
                            <Link><i className="fa-brands fa-instagram"></i></Link>
                            <Link><i className="fa-brands fa-twitter"></i></Link>
                            <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                            <Link><i className="fa-brands fa-pinterest-p"></i></Link>
                        </div>
                    </div>

                    <div>
                        <h2>Hızlı Linkler</h2>
                        <Link>Yeni İlan Ver</Link>
                        <Link>İlan Listesi</Link>
                    </div>

                    <div>
                        <h2>Trend Meslekler</h2>
                        <Link>Designer</Link>
                        <Link>Developer</Link>
                        <Link>Frontend Developer</Link>
                        <Link>Backend Developer</Link>
                        <Link>UI & UX Designer</Link>
                    </div>

                    <div>
                        <h2>Abone Ol</h2>
                        <p>Güncel kalmak üzere en son İş İlanı, Özgeçmiş, Şirket Listesi ve Blog gönderilerini almak için Keller'a abone olun.</p>
                        <input type="text" placeholder="E posta adresi giriniz."/>
                    </div>

                </div>

            </footer>

            <div className="all-rights-reserved">

                <div className="container">

                    <p>© 2024 Keller. <Link>yasiralakus</Link> tarafından kodlandı.</p>

                </div>

            </div>

        </div>
    )
}