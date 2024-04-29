import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const supabase = createClient('https://hubaygyhcdmzbvakrenc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1YmF5Z3loY2RtemJ2YWtyZW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MDc5ODksImV4cCI6MjAyOTk4Mzk4OX0.dmKv3X-QeUZ8z92_qOYxX19xhcWkfuIIllYZxdrgjO8')

export default function App() {

    const [login, setLogin] = useState(true);
    const [openLogin, setOpenLogin] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(null);
    const [userData, setUserData] = useState(null);
    const [reklam, setReklam] = useState(false);
    
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

    useEffect(() => {
        const timer = setTimeout(() => {
          setReklam(true);
        }, 5000);
    
        return () => clearTimeout(timer);
      }, []);

    async function handleSignup(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        console.log(formObj)
        
        let { data: signup, error } = await supabase.auth.signUp(formObj);

        if(!error) {
            
            const { data, error } = await supabase
                .from('profiles')
                .insert([
                    {
                        name: formObj.name,
                        surname: formObj.surname,
                        email: signup.user.email,
                        user_id: signup.user.id
                    }
                ])
                .select()

        }

        alert('KAYIT BAŞARILI. GİRİŞ YAPABİLİRSİNİZ');
        setLogin(true);
  
    }

    useEffect(() => {
        async function fetchUser() {
            const { data: { user } } = await supabase.auth.getUser();
            
            let { data: profiles, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('user_id', user.id)

            setUserData(profiles ? profiles[0] : null)

        }
        fetchUser()
    }, [])

    async function handleLogout(e) {
        e.preventDefault();
        let { error } = await supabase.auth.signOut();
        setUserData(null);
    }

    async function handleLogin(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        console.log(formObj)
        
        let { data, error } = await supabase.auth.signInWithPassword(formObj);
        console.log(data)

        if(!error) {
            
            let { data: profiles, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('user_id', data.user.id)
                setUserData(profiles ? profiles[0] : null);
                setOpenLogin(false);
        }
  
    }

    function reklamfunc(e) {
        e.preventDefault();
        setReklam(false)
    }

    return (
        <div className="full-page">

            {reklam === true && 
                <Link to={'https://yasiralakus-ankablog.netlify.app/'} className="reklam-ankablog">
                    <button onClick={reklamfunc}><i className="fa-solid fa-xmark"></i></button>
                    <img src="./img/reklam/anka.png" alt="" />
                    <div>
                        <h1>Keşfet, Öğren, Paylaş: <span>Anka Blog</span></h1>
                        <p>Anka Blog ile her konuda düşüncelerinizi paylaşabilir diğer kullanıcılarla etkileşime geçebilirsiniz.</p>
                    </div>
                </Link>
            }

            <button onClick={() => (window.scrollTo(0, 0))} style={scrollPosition > 200 ? {opacity: '1'}: {}} className="go-to-top"><i className="fa-solid fa-arrow-up"></i></button>

            {openLogin === true && <div className="login-signup-bg">
                <div className="login-signup">
                    <button onClick={() => (setOpenLogin(false))}><i className="fa-solid fa-xmark"></i></button>
                    <header>
                        <button onClick={() => {setLogin(true)}} style={login === true ? {backgroundColor: '#007BFF', color: '#fff'} : {}}>Giriş Yap</button>
                        <button onClick={() => {setLogin(false)}} style={login === false ? {backgroundColor: '#007BFF', color: '#fff'} : {}}>Kayıt Ol</button>
                    </header>
                    {login === true ?
                        <form onSubmit={handleLogin}>
                            <input type="text" name="email" placeholder="E-posta" required />
                            <input type="password" name="password" placeholder="Şifre" required />
                            <button>Giriş Yap</button>
                            <p>Henüz hesabınız yoksa <span onClick={() => (setLogin(false))}>KAYIT OL</span>'un.</p>
                        </form>
                        :
                        <form onSubmit={handleSignup}>
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
                        <li><Link>Blog</Link></li>
                        <li><Link>İletişim</Link></li>
                    </ul>

                    {userData === null ?
                    <button onClick={() => {setOpenLogin(true)}}>Giriş Yap / Kayıt Ol</button>
                    :
                    <>
                        <p>{userData.name} {userData.surname} /</p>
                        <button onClick={handleLogout}>Çıkış</button>
                    </>
                    }

                </div>

            </header>

            <Outlet />

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