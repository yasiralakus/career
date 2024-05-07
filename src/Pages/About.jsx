import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function About() {

    const [post,setPost] = useState(0);
    const [member,setMembers] = useState(0);
    const [company,setCompany] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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

            <div className="about-hero">

                <img src="./img/home/little-bg.jpg" alt="" />
                
                <div className="container">

                    <h1>Hakkımızda</h1>

                    <p><Link to={'/'}>Anasayfa</Link> / Hakkımızda</p>

                </div>

            </div>

            <div className="about-details">

                <div className="container">

                    <div>
                        <h1>Hakkımızda</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptate consectetur provident sint nobis, exercitationem sequi, fuga ullam ratione architecto ex nesciunt enim. Officiis accusamus a natus vitae corrupti excepturi delectus repellendus deleniti exercitationem adipisci id ad aspernatur, deserunt, culpa et. Doloremque tenetur hic, omnis ut voluptate neque illum enim.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li>Doloremque tenetur hic, omnis ut voluptate neque.</li>
                            <li>Luga ullam ratione architecto ex nesciunt enim.</li>
                            <li>Reprehenderit voluptate consectetur provident sint nobis.</li>
                        </ul>
                    </div>

                    <img src="./img/about/details.jpg" alt="" />

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

            <div className="about-our-team">

                <div className="container">

                    <h1>Ekibimiz</h1>

                    <p>Ekibimiz her zaman verimli çalışmayı amaçlayan profesyonel üyelerden oluşmaktadır.</p>

                    <div>

                        <div>
                            <img src="./img/about/team01.jpg" alt="" />
                            <div>
                                <h1>Harry Kane</h1>
                                <p>FOUNDER</p>
                                <div>
                                    <Link><i class="fa-brands fa-instagram"></i></Link>
                                    <Link><i class="fa-brands fa-facebook-f"></i></Link>
                                    <Link><i class="fa-brands fa-linkedin-in"></i></Link>
                                    <Link><i class="fa-brands fa-twitter"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="./img/about/team02.jpg" alt="" />
                            <div>
                                <h1>Jameson Bau</h1>
                                <p>PROJECT MANAGER</p>
                                <div>
                                    <Link><i class="fa-brands fa-instagram"></i></Link>
                                    <Link><i class="fa-brands fa-facebook-f"></i></Link>
                                    <Link><i class="fa-brands fa-linkedin-in"></i></Link>
                                    <Link><i class="fa-brands fa-twitter"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="./img/about/team03.jpg" alt="" />
                            <div>
                                <h1>Irene Simon</h1>
                                <p>DESIGNER</p>
                                <div>
                                    <Link><i class="fa-brands fa-instagram"></i></Link>
                                    <Link><i class="fa-brands fa-facebook-f"></i></Link>
                                    <Link><i class="fa-brands fa-linkedin-in"></i></Link>
                                    <Link><i class="fa-brands fa-twitter"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="./img/about/team04.jpg" alt="" />
                            <div>
                                <h1>Chris Walker</h1>
                                <p>BACKEND DEVELOPER</p>
                                <div>
                                    <Link><i class="fa-brands fa-instagram"></i></Link>
                                    <Link><i class="fa-brands fa-facebook-f"></i></Link>
                                    <Link><i class="fa-brands fa-linkedin-in"></i></Link>
                                    <Link><i class="fa-brands fa-twitter"></i></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            

        </div>
    )
}