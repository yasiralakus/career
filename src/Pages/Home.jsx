import { Link } from "react-router-dom";
import CompanySliders from "../Components/CompanySliders";
import CommentSliders from "../Components/CommentSliders";
import { useEffect, useState } from "react";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const jobs = [
        {
            job_title: 'Full Stack Developer',
            job_status: 'Full Time',
            job_locaiton: 'Georgia / USA',
            job_salary: '$5000 - $8000',
            company_name: 'Envato',
            company_logo: './img/home/company01.png'
        },
        {
            job_title: 'Frontend Developer',
            job_status: 'Full Time',
            job_locaiton: 'Lisbon / Portugal',
            job_salary: '$4000 - $6000',
            company_name: 'Github',
            company_logo: './img/home/company03.png'
        },
        {
            job_title: 'UI & UX Designer',
            job_status: 'Part Time',
            job_locaiton: 'Tokyo / Japan',
            job_salary: '$3000 - $5000',
            company_name: 'Astha',
            company_logo: './img/home/company02.png'
        },
        {
            job_title: 'Game Developer',
            job_status: 'Full Time',
            job_locaiton: 'Londra / UK',
            job_salary: '$8000 - $10000',
            company_name: 'Bebsha',
            company_logo: './img/home/company10.png'
        },
        {
            job_title: 'Frontend Developer',
            job_status: 'Freelance',
            job_locaiton: 'Dubai / UAE',
            job_salary: '$4000 - $8000',
            company_name: 'Hope',
            company_logo: './img/home/company09.png'
        },
        {
            job_title: 'Backend Developer',
            job_status: 'Full Time',
            job_locaiton: 'Istanbul / Turkey',
            job_salary: '$3000 - $6000',
            company_name: 'Generous',
            company_logo: './img/home/company06.png'
        },
        {
            job_title: 'Backend Developer',
            job_status: 'Full Time',
            job_locaiton: 'Osaka / Japan',
            job_salary: '$4000 - $8000',
            company_name: 'Salina',
            company_logo: './img/home/company08.png'
        },
        {
            job_title: 'Game Developer',
            job_status: 'Full Time',
            job_locaiton: 'Moscow / Russia',
            job_salary: '$5000 - $6000',
            company_name: 'Medicore',
            company_logo: './img/home/company04.png'
        },
        {
            job_title: 'Mobile App Developer',
            job_status: 'Part Time',
            job_locaiton: 'Milano / Italy',
            job_salary: '$4000 - $8000',
            company_name: 'Greensoul',
            company_logo: './img/home/company05.png'
        },
        {
            job_title: 'Mobile App Developer',
            job_status: 'Freelance',
            job_locaiton: 'Roma / Italy',
            job_salary: '$2000 - $6000',
            company_name: 'Generous',
            company_logo: './img/home/company06.png'
        },
        {
            job_title: 'React Developer',
            job_status: 'Full Time',
            job_locaiton: 'Milano / Italy',
            job_salary: '$4000 - $8000',
            company_name: 'Buzco',
            company_logo: './img/home/company07.png'
        },
        {
            job_title: 'Data Analyst',
            job_status: 'Freelance',
            job_locaiton: 'Utah / USA',
            job_salary: '$6000 - $10000',
            company_name: 'Envato',
            company_logo: './img/home/company01.png'
        },
    ]

    const [post,setPost] = useState(0);
    const [member,setMembers] = useState(0);
    const [company,setCompany] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            setScrollPosition(scroll);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
          if (post < 1354) {
            setPost(post + 1);
          } else {
            clearInterval(interval);
          }
        }, 10);
    
        return () => clearInterval(interval);
      }, [post]);

      useEffect(() => {
        const interval = setInterval(() => {
          if (member < 1741) {
            setMembers(member + 1);
          } else {
            clearInterval(interval);
          }
        }, 10);
    
        return () => clearInterval(interval);
      }, [member]);

      useEffect(() => {
        const interval = setInterval(() => {
          if (company < 142) {
            setCompany(company + 1);
          } else {
            clearInterval(interval);
          }
        }, 10);
    
        return () => clearInterval(interval);
      }, [company]);


    return (
        <div className="outlet-page">

            <div className="home-hero">

                <img src="./img/home/home-hero.jpg" alt="" />

                <div className="">
                    <h1>Sıradaki İşinizi Bulun</h1>
                    <p>Burada 1.324'ten fazla iş listeleniyor.</p>
                </div>

            </div>

            <div className="home-mid">

                <div className="filter-jobs">

                    <div className="container">

                        <form>
                            <input type="text" placeholder="Örn: Yazılım Mühendisi"/>
                            <input type="text" placeholder="Konum"/>
                            <select name="">
                                <option value="">Kategori</option>
                            </select>
                            <button>Ara</button>
                        </form>

                    </div>

                </div>

                <div className="latest-jobs">

                    <div className="container">

                        <h1>Son Eklenen İlanlar</h1>
                        <p>Sitemizde listelenen son iş ilanları.</p>

                        <div>

                        {jobs.slice(0,5).map(x => (
                            <Link className="latest-jobs-item">
                                <img src={x.company_logo} alt="" />
                                <div className="" style={{textAlign: 'left', marginRight: 'auto'}}>
                                    <h3>{x.job_title}</h3>
                                    <p><span>{x.company_name}</span> <i className="fa-solid fa-location-dot"></i> {x.job_locaiton}</p>
                                </div>
                                <div style={{alignItems: 'end'}}>
                                    <h5>{x.job_salary}</h5>
                                    <h4 style={{backgroundColor: x.job_status === 'Full Time' ? '#4CAF50' : (x.job_status === 'Part Time' ? '#FFC107' : (x.job_status === 'Freelance' ? '#F44336' : 'initial'))}}>{x.job_status}</h4>
                                </div>
                            </Link>
                        ))}

                        </div>

                        <Link to={'/jobs'}>Tüm İlanları Göster</Link>

                    </div>

                </div>

                <div className="site-details">

                    <img src="./img/home/little-bg.jpg" alt="" />

                    <div>
                        <div className="">
                            <h1>{post}</h1>
                            <p>İş İlanı</p>
                        </div>

                        <div className="">
                            <h1>{member}</h1>
                            <p>Kullanıcı</p>
                        </div>

                        <div className="">
                            <h1>{company}</h1>
                            <p>Şirket</p>
                        </div>
                    </div>

                </div>

                <div className="featured-companies">

                    <div className="container">
                        <h1>Öne Çıkan Şirketler</h1>
                        <p>En fazla ilanı bulunan şirketler.</p>
                        <div>
                            <CompanySliders />
                        </div>
                    </div>

                </div>

                <div className="customer-comments">

                    <img src="./img/home/customer-comment.jpg" alt="" />

                    <div className="container">

                        <CommentSliders />

                    </div>

                </div>

                <div className="our-blog">

                    <div style={scrollPosition > 2700 ? {opacity: '1'} : {}} className="container">

                        <h1>Blog</h1>
                        <p>Blog yazımızdan daha fazla ipucu ve püf noktası alın.</p>

                        <div>

                            <div>
                                <img src="./img/home/blog01.jpg" alt="" />
                                <h1>BT Profesyonelleri İçin En İyi 5 İş Görüşmesi Sorusu</h1>
                                <h3>25 Ocak 2024'te yayınlandı. - 3 Yorum</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum in veniam, ut molestias voluptatem!</p>
                                <Link>Devamını Oku <i className="fa-solid fa-angle-right"></i></Link>
                            </div>

                            <div>
                                <img src="./img/home/blog02.jpg" alt="" />
                                <h1>Seyahat Etmeyi Seviyorsanız Dikkat Etmeniz Gereken 7 Kariyer</h1>
                                <h3>22 Aralık 2023'te yayınlandı. - 11 Yorum</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum in veniam, ut molestias voluptatem!</p>
                                <Link>Devamını Oku <i className="fa-solid fa-angle-right"></i></Link>
                            </div>

                            <div>
                                <img src="./img/home/blog03.jpg" alt="" />
                                <h1>Mükemmel Adayın Kusurlu Bir Uyum Olduğu Ortaya Çıktığında</h1>
                                <h3>11 Şubat 2024'te yayınlandı. - 5 Yorum</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum in veniam, ut molestias voluptatem!</p>
                                <Link>Devamını Oku <i className="fa-solid fa-angle-right"></i></Link>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}