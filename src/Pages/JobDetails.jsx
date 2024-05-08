import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

export default function JobDetails() {

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

                    <h1>Full Stack Developer</h1>

                    <p><Link to={'/'}>Anasayfa</Link> / <Link to={'/jobs'}>İlanlar</Link> / Full Stack Developer</p>

                </div>

            </div>

            <div className="job-details-container">

                <div className="container">

                    <div className="job-details-left">

                        <header>

                            <img src="./img/home/company01.png" alt="" />
                            <div style={{marginRight: 'auto', marginLeft: '30px'}}>
                                <h3>Full Stack Developer</h3>
                                <p><span>Envato</span> <i className="fa-solid fa-location-dot"></i> Georgia / USA</p>
                            </div>

                            <div>
                                <h6>$5000 - $8000</h6>
                                <h5>Full Time</h5>
                            </div>

                        </header>

                        <main>

                            <h4>İş Tanımı</h4>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae unde quasi alias maxime quos suscipit! Quas dicta quam sunt deserunt autem blanditiis soluta aperiam a quis vero alias asperiores minima debitis quo reprehenderit pariatur, eaque dignissimos similique cupiditate earum, molestiae dolorum. Rem, accusantium deserunt! Dolorem molestiae placeat odit quos.</p>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a vero placeat natus ipsum quia nostrum, quod saepe nesciunt possimus.</p>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id velit veniam totam ducimus ut suscipit soluta autem repudiandae praesentium. Aperiam alias qui eveniet dignissimos quasi dolor cumque at quaerat?</p>

                            <h4>Sorumluluklar</h4>

                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptas!</li>
                                <li>Tempore saepe cumque nemo, expedita quae vitae.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptas!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, corporis atque.</li>
                                <li>Tempore saepe cumque nemo, expedita quae vitae.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellat vitae fuga placeat repudiandae a reprehenderit voluptates ipsum. Porro, accusantium..</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore saepe cumque nemo, expedita quae vitae.</li>
                            </ul>

                            <h4>Eğitim + Tecrübe</h4>

                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptas!</li>
                                <li>Tempore saepe cumque nemo, expedita quae vitae.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptas!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, corporis atque.</li>
                                <li>Tempore saepe cumque nemo, expedita quae vitae.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellat vitae fuga placeat repudiandae a reprehenderit voluptates ipsum. Porro, accusantium..</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore saepe cumque nemo, expedita quae vitae.</li>
                            </ul>

                            <h4>Haklar</h4>

                            <ul>
                                <li>Medical insurance</li>
                                <li>Dental insurance</li>
                                <li>Vision insurance</li>
                                <li>Supplemental benefits (Short Term Disability, Cancer & Accident).</li>
                                <li>Employer-sponsored Basic Life & AD&D Insurance</li>
                                <li>Employer-sponsored Long Term Disability</li>
                                <li>Employer-sponsored Value Adds – Fresh Beanies</li>
                                <li>401(k)with matching</li>
                            </ul>

                        </main>

                    </div>

                    <div className="job-details-right">

                        <header>

                            <button><i class="fa-regular fa-heart"></i> Kaydet</button>

                            <button>Başvur</button>

                        </header>

                        <main>

                            <h3>Genel Bakış</h3>

                            <p><span>Yayınlanma Tarihi:</span> 12 Haziran 2024</p>
                            <p><span>İş Tipi:</span> Full Time</p>
                            <p><span>Deneyim:</span> 2 - 3 Yıl</p>
                            <p><span>İş Konumu:</span> Georgia / USA</p>
                            <p><span>Maaş:</span> $5000 - $8000</p>
                            <p><span>Son Başvuru Tarihi:</span> 12 Temmuz 2024</p>

                        </main>

                        <footer>

                            <h3>İş Konumu</h3>

                            <img src="./img/location.png" alt="" />

                        </footer>

                    </div>

                </div>


            </div>

        </div>
    )
}