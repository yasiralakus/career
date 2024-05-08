import { Link, useNavigate } from "react-router-dom";
import CompanySliders from "../Components/CompanySliders";
import CommentSliders from "../Components/CommentSliders";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const {inputTitle, setInputTitle, inputLocation, setInputLocation, inputStatus, setInputStatus} = useContext(DataContext);

    const jobs = [
        {
            job_id: 1,
            job_title: 'Full Stack Developer',
            job_status: 'Full Time',
            job_location: 'Georgia / USA',
            job_salary: '$5000 - $8000',
            company_name: 'Envato',
            company_logo: './img/home/company01.png',
            job_experience: '1 - 2 Yıl'
        },
        {
            job_id: 2,
            job_title: 'Frontend Developer',
            job_status: 'Full Time',
            job_location: 'Lisbon / Portugal',
            job_salary: '$4000 - $6000',
            company_name: 'Github',
            company_logo: './img/home/company03.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_id: 3,
            job_title: 'UI & UX Designer',
            job_status: 'Part Time',
            job_location: 'Tokyo / Japan',
            job_salary: '$3000 - $5000',
            company_name: 'Astha',
            company_logo: './img/home/company02.png',
            job_experience: '1 - 2 Yıl'
        },
        {
            job_id: 4,
            job_title: 'Game Developer',
            job_status: 'Full Time',
            job_location: 'Londra / UK',
            job_salary: '$8000 - $10000',
            company_name: 'Bebsha',
            company_logo: './img/home/company10.png',
            job_experience: '5 - 6 Yıl'
        },
        {
            job_id: 5,
            job_title: 'Frontend Developer',
            job_status: 'Freelance',
            job_location: 'Dubai / UAE',
            job_salary: '$4000 - $8000',
            company_name: 'Hope',
            company_logo: './img/home/company09.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_id: 6,
            job_title: 'Backend Developer',
            job_status: 'Full Time',
            job_location: 'Istanbul / Turkey',
            job_salary: '$3000 - $6000',
            company_name: 'Generous',
            company_logo: './img/home/company06.png',
            job_experience: '1 - 2 Yıl'
        },
        {
            job_id: 7,
            job_title: 'Backend Developer',
            job_status: 'Full Time',
            job_location: 'Osaka / Japan',
            job_salary: '$4000 - $8000',
            company_name: 'Salina',
            company_logo: './img/home/company08.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_id: 8,
            job_title: 'Game Developer',
            job_status: 'Full Time',
            job_location: 'Moscow / Russia',
            job_salary: '$5000 - $6000',
            company_name: 'Medicore',
            company_logo: './img/home/company04.png',
            job_experience: '1 - 2 Yıl'
        },
        {
            job_id: 9,
            job_title: 'Mobile App Developer',
            job_status: 'Part Time',
            job_location: 'Milano / Italy',
            job_salary: '$4000 - $8000',
            company_name: 'Greensoul',
            company_logo: './img/home/company05.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_id: 10,
            job_title: 'Mobile App Developer',
            job_status: 'Freelance',
            job_location: 'Roma / Italy',
            job_salary: '$2000 - $6000',
            company_name: 'Generous',
            company_logo: './img/home/company06.png',
            job_experience: '1 - 2 Yıl'
        },
        {
            job_id: 11,
            job_title: 'React Developer',
            job_status: 'Full Time',
            job_location: 'Milano / Italy',
            job_salary: '$4000 - $8000',
            company_name: 'Buzco',
            company_logo: './img/home/company07.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_id: 12,
            job_title: 'Data Analyst',
            job_status: 'Freelance',
            job_location: 'Utah / USA',
            job_salary: '$6000 - $10000',
            company_name: 'Envato',
            company_logo: './img/home/company01.png',
            job_experience: '5 - 6 Yıl'
        },
        {
            job_id: 13,
            job_title: 'React Developer',
            job_status: 'Part Time',
            job_location: 'Baku / Azerbaijan',
            job_salary: '$3000 - $6000',
            company_name: 'Medicore',
            company_logo: './img/home/company04.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_id: 14,
            job_title: 'Full Stack Developer',
            job_status: 'Full Time',
            job_location: 'Sydney / Australia',
            job_salary: '$4000 - $7000',
            company_name: 'Envato',
            company_logo: './img/home/company01.png',
            job_experience: '2 - 3 Yıl'
        },
        {
            job_id: 15,
            job_title: 'UI/UX Designer',
            job_status: 'Freelance',
            job_location: 'Paris / France',
            job_salary: '$3500 - $5500',
            company_name: 'Astha',
            company_logo: './img/home/company02.png',
            job_experience: '1 - 2 Yıl'
        },
        {
            job_id: 16,
            job_title: 'Backend Developer',
            job_status: 'Full Time',
            job_location: 'New York / USA',
            job_salary: '$5000 - $8000',
            company_name: 'Github',
            company_logo: './img/home/company03.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_id: 17,
            job_title: 'Game Developer',
            job_status: 'Full Time',
            job_location: 'London / UK',
            job_salary: '$6000 - $10000',
            company_name: 'Bebsha',
            company_logo: './img/home/company10.png',
            job_experience: '5 - 6 Yıl'
        },
        {
            job_id: 18,
            job_title: 'Frontend Developer',
            job_status: 'Freelance',
            job_location: 'Dubai / UAE',
            job_salary: '$4000 - $8000',
            company_name: 'Hope',
            company_logo: './img/home/company09.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_id: 19,
            job_title: 'Data Analyst',
            job_status: 'Freelance',
            job_location: 'California / USA',
            job_salary: '$5500 - $9000',
            company_name: 'Byte',
            company_logo: './img/home/company05.png',
            job_experience: '2 - 3 Yıl'
        },
        {
            job_id: 20,
            job_title: 'Mobile App Developer',
            job_status: 'Full Time',
            job_location: 'Berlin / Germany',
            job_salary: '$4500 - $7500',
            company_name: 'Generous',
            company_logo: './img/home/company06.png',
            job_experience: '4 - 5 Yıl'
        },
        {
            job_id: 21,
            job_title: 'AI Engineer',
            job_status: 'Part Time',
            job_location: 'Tokyo / Japan',
            job_salary: '$3500 - $6000',
            company_name: 'Cloud Nine',
            company_logo: './img/home/company07.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_id: 22,
            job_title: 'Software Engineer',
            job_status: 'Full Time',
            job_location: 'Moscow / Russia',
            job_salary: '$5000 - $9000',
            company_name: 'Hydra',
            company_logo: './img/home/company08.png',
            job_experience: '4 - 5 Yıl'
        },
        {
            job_id: 23,
            job_title: 'Web Developer',
            job_status: 'Part Time',
            job_location: 'Rome / Italy',
            job_salary: '$4000 - $7000',
            company_name: 'Astro',
            company_logo: './img/home/company09.png',
            job_experience: '2 - 3 Yıl'
        },
        {
            job_id: 24,
            job_title: 'Frontend Developer',
            job_status: 'Freelance',
            job_location: 'Seoul / South Korea',
            job_salary: '$3500 - $6000',
            company_name: 'Infinity',
            company_logo: './img/home/company10.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_id: 25,
            job_title: 'UI/UX Designer',
            job_status: 'Full Time',
            job_location: 'Cape Town / South Africa',
            job_salary: '$4500 - $8000',
            company_name: 'Jupiter',
            company_logo: './img/home/company11.png',
            job_experience: '4 - 5 Yıl'
        },
        {
            job_id: 26,
            job_title: 'Game Developer',
            job_status: 'Full Time',
            job_location: 'Vancouver / Canada',
            job_salary: '$5500 - $10000',
            company_name: 'Neptune',
            company_logo: './img/home/company12.png',
            job_experience: '5 - 6 Yıl'
        },
        {
            job_id: 27,
            job_title: 'Backend Developer',
            job_status: 'Part Time',
            job_location: 'Bangkok / Thailand',
            job_salary: '$4000 - $7000',
            company_name: 'Pluto',
            company_logo: './img/home/company03.png',
            job_experience: '2 - 3 Yıl'
        },
        {
            job_id: 28,
            job_title: 'Software Engineer',
            job_status: 'Freelance',
            job_location: 'Sydney / Australia',
            job_salary: '$4500 - $8000',
            company_name: 'Saturn',
            company_logo: './img/home/company04.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_id: 29,
            job_title: 'AI Engineer',
            job_status: 'Full Time',
            job_location: 'San Francisco / USA',
            job_salary: '$6000 - $11000',
            company_name: 'Uranus',
            company_logo: './img/home/company05.png',
            job_experience: '5 - 6 Yıl'
        },
        {
            job_id: 30,
            job_title: 'Mobile App Developer',
            job_status: 'Part Time',
            job_location: 'Shanghai / China',
            job_salary: '$3500 - $6500',
            company_name: 'Venus',
            company_logo: './img/home/company12.png',
            job_experience: '3 - 4 Yıl'
        },
    ]

    const navigate = useNavigate();
    const [post,setPost] = useState(0);
    const [member,setMembers] = useState(0);
    const [company,setCompany] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    function handleSearch(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        console.log(formObj)

        setInputTitle(formObj.title === '' ? null : formObj.title);
        setInputLocation(formObj.location === '' ? null : formObj.location);
        setInputStatus(formObj.job_status === '' ? null : formObj.job_status);
        navigate('/jobs')

    }

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
          if (post < 354) {
            setPost(post + 1);
          } else {
            clearInterval(interval);
          }
        }, 10);
    
        return () => clearInterval(interval);
      }, [post]);

      useEffect(() => {
        const interval = setInterval(() => {
          if (member < 541) {
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

                        <form onSubmit={handleSearch}>
                            <input name="title" type="text" placeholder="Örn: Frontend Developer"/>
                            <input name="location" type="text" placeholder="Konum"/>
                            <select required name="job_status">
                                <option value="" selected disabled>İş Tipi</option>
                                <option value="">Hepsi</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Freelance">Freelance</option>
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
                            <Link to={'/job-details'} key={x.job_id} className="latest-jobs-item">
                                <img src={x.company_logo} alt="" />
                                <div className="" style={{textAlign: 'left', marginRight: 'auto'}}>
                                    <h3>{x.job_title}</h3>
                                    <div>
                                        <p>{x.company_name}</p>
                                        <h6><i className="fa-solid fa-location-dot"></i> {x.job_location}</h6>
                                    </div>
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

                    <div className="container">

                        <h1>Blog</h1>
                        <p>Blog yazımızdan daha fazla ipucu ve püf noktası alın.</p>

                        <div>

                            <div>
                                <img src="./img/home/blog01.jpg" alt="" />
                                <h1>BT Profesyonelleri İçin En İyi 5 İş Görüşmesi Sorusu</h1>
                                <h3>25 Ocak 2024'te yayınlandı. - 3 Yorum</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum in veniam, ut molestias voluptatem!</p>
                                <Link to={'/'}>Devamını Oku <i className="fa-solid fa-angle-right"></i></Link>
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