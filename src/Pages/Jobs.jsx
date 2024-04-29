import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../App";

export default function Jobs() {

    const [jobsData, setJobsData] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        async function fetchData() {

            let { data: jobs, error } = await supabase
                .from('jobs')
                .select('*')
                setJobsData(jobs ? jobs : null)
        }
        fetchData()
    }, [])

    return (
        <div className="outlet-page">

            <div className="jobs-hero">

                <img src="./img/home/little-bg.jpg" alt="" />
                
                <div className="container">

                    <h1>İlanlar</h1>

                    <p><Link to={'/'}>Anasayfa</Link> / İlanlar</p>

                </div>

            </div>

            <div className="jobs-container">

                <div className="container">

                    {/* <div className="jobs-container-left">

                            <Link className="latest-jobs-item">

                                <img src="./img/home/company01.png" alt="" />

                                <div className="" style={{textAlign: 'left', marginRight: 'auto'}}>
                                    <h3>Full Stack Backend Developer</h3>
                                    <p><span>Envato</span> <i className="fa-solid fa-location-dot"></i> 2023 Willshire Glen, GA-30009</p>
                                </div>

                                <div>
                                    <h5>$5000 - $8000</h5>
                                    <h4 style={{backgroundColor: '#4caf50'}}>Full Time</h4>
                                </div>

                            </Link>

                            <Link className="latest-jobs-item">

                                <img src="./img/home/company02.png" alt="" />

                                <div className="" style={{textAlign: 'left', marginRight: 'auto'}}>
                                    <h3>Product UI & UX Expert</h3>
                                    <p><span>Astha</span> <i className="fa-solid fa-location-dot"></i> 2023 Willshire Glen, GA-30009</p>
                                </div>

                                <div>
                                    <h5>$7000 - $13000</h5>
                                    <h4 style={{backgroundColor: '#ffc107'}}>Part Time</h4>
                                </div>

                            </Link>

                            <Link className="latest-jobs-item">

                                <img src="./img/home/company03.png" alt="" />

                                <div className="" style={{textAlign: 'left', marginRight: 'auto'}}>
                                    <h3>Full Stack Backend Developer</h3>
                                    <p><span>Github</span> <i className="fa-solid fa-location-dot"></i> 2023 Willshire Glen, GA-30009</p>
                                </div>

                                <div>
                                    <h5>$5000 - $8000</h5>
                                    <h4 style={{backgroundColor: '#f44336'}}>Freelance</h4>
                                </div>

                            </Link>

                            <Link className="latest-jobs-item">

                                <img src="./img/home/company04.png" alt="" />

                                <div className="" style={{textAlign: 'left', marginRight: 'auto'}}>
                                    <h3>Product UI & UX Expert</h3>
                                    <p><span>Medicore</span> <i className="fa-solid fa-location-dot"></i> 2023 Willshire Glen, GA-30009</p>
                                </div>

                                <div>
                                    <h5>$7000 - $13000</h5>
                                    <h4 style={{backgroundColor: '#4caf50'}}>Full Time</h4>
                                </div>

                            </Link>

                            <Link className="latest-jobs-item">

                                <img src="./img/home/company05.png" alt="" />

                                <div className="" style={{textAlign: 'left', marginRight: 'auto'}}>
                                    <h3>Full Stack Backend Developer</h3>
                                    <p><span>GreenSoul</span> <i className="fa-solid fa-location-dot"></i> 2023 Willshire Glen, GA-30009</p>
                                </div>

                                <div>
                                    <h5>$5000 - $8000</h5>
                                    <h4 style={{backgroundColor: '#4caf50'}}>Full Time</h4>
                                </div>

                            </Link>

                            <Link className="latest-jobs-item">

                                <img src="./img/home/company01.png" alt="" />

                                <div className="" style={{textAlign: 'left', marginRight: 'auto'}}>
                                    <h3>Full Stack Backend Developer</h3>
                                    <p><span>Envato</span> <i className="fa-solid fa-location-dot"></i> 2023 Willshire Glen, GA-30009</p>
                                </div>

                                <div>
                                    <h5>$5000 - $8000</h5>
                                    <h4 style={{backgroundColor: '#4caf50'}}>Full Time</h4>
                                </div>

                            </Link>

                            <Link className="latest-jobs-item">

                                <img src="./img/home/company02.png" alt="" />

                                <div className="" style={{textAlign: 'left', marginRight: 'auto'}}>
                                    <h3>Product UI & UX Expert</h3>
                                    <p><span>Astha</span> <i className="fa-solid fa-location-dot"></i> 2023 Willshire Glen, GA-30009</p>
                                </div>

                                <div>
                                    <h5>$7000 - $13000</h5>
                                    <h4 style={{backgroundColor: '#ffc107'}}>Part Time</h4>
                                </div>

                            </Link>

                            <Link className="latest-jobs-item">

                                <img src="./img/home/company03.png" alt="" />

                                <div className="" style={{textAlign: 'left', marginRight: 'auto'}}>
                                    <h3>Full Stack Backend Developer</h3>
                                    <p><span>Github</span> <i className="fa-solid fa-location-dot"></i> 2023 Willshire Glen, GA-30009</p>
                                </div>

                                <div>
                                    <h5>$5000 - $8000</h5>
                                    <h4 style={{backgroundColor: '#f44336'}}>Freelance</h4>
                                </div>

                            </Link>

                            <Link className="latest-jobs-item">

                                <img src="./img/home/company04.png" alt="" />

                                <div className="" style={{textAlign: 'left', marginRight: 'auto'}}>
                                    <h3>Product UI & UX Expert</h3>
                                    <p><span>Medicore</span> <i className="fa-solid fa-location-dot"></i> 2023 Willshire Glen, GA-30009</p>
                                </div>

                                <div>
                                    <h5>$7000 - $13000</h5>
                                    <h4 style={{backgroundColor: '#4caf50'}}>Full Time</h4>
                                </div>

                            </Link>

                            <Link className="latest-jobs-item">

                                <img src="./img/home/company05.png" alt="" />

                                <div className="" style={{textAlign: 'left', marginRight: 'auto'}}>
                                    <h3>Full Stack Backend Developer</h3>
                                    <p><span>GreenSoul</span> <i className="fa-solid fa-location-dot"></i> 2023 Willshire Glen, GA-30009</p>
                                </div>

                                <div>
                                    <h5>$5000 - $8000</h5>
                                    <h4 style={{backgroundColor: '#4caf50'}}>Full Time</h4>
                                </div>

                            </Link>

                    </div> */}

                    <div className="jobs-container-left">

                        {
                            jobsData ? jobsData.map(x => (
                                <Link key={x.job_id} className="latest-jobs-item">
                                    <img src={x.company_logo} alt="" />
                                    <div className="" style={{textAlign: 'left', marginRight: 'auto'}}>
                                        <h3>{x.job_title}</h3>
                                        <p><span>{x.company_name}</span> <i className="fa-solid fa-location-dot"></i> {x.job_location}</p>
                                    </div>
                                    <div style={{alignItems: 'end'}}>
                                        <h5>{x.job_salary}</h5>
                                        <h4 style={{backgroundColor: x.job_status === 'Full Time' ? '#4CAF50' : (x.job_status === 'Part Time' ? '#FFC107' : (x.job_status === 'Freelance' ? '#F44336' : 'initial'))}}>{x.job_status}</h4>
                                    </div>
                                </Link>
                            )) :
                            <div className="loading-bg">
                                <div className="loading"></div>
                            </div>
                        }

                    </div>

                    <div className="jobs-container-right">

                        <form>
                            <h1>İş Ara</h1>
                            <input type="text" placeholder="Anahtar kelime gir" />
                            <div>
                                <h3>Kategori</h3>
                                <select name="">
                                    <option value="">Hepsi</option>
                                    <option value="">Web Designer</option>
                                    <option value="">Web Developer</option>
                                    <option value="">Graphic Designer</option>
                                    <option value="">App Developer</option>
                                    <option value="">UI & IX Designer</option>
                                </select>
                            </div>
                            <div>
                                <h3>Konum</h3>
                                <input type="text" placeholder="Konum gir" />
                            </div>
                            <div>
                                <h3>İş Tipi</h3>
                                <select name="">
                                    <option value="">Hepsi</option>
                                    <option value="">Full Time</option>
                                    <option value="">Part Time</option>
                                    <option value="">Freelance</option>
                                    <option value="">Intership</option>
                                    <option value="">Temporary</option>
                                </select>
                            </div>
                            <div>
                                <h3>Tecrübe</h3>
                                <select name="">
                                    <option value="">Hepsi</option>
                                    <option value="">1-2 Yıl</option>
                                    <option value="">2-3 Yıl</option>
                                    <option value="">3-4 Yıl</option>
                                    <option value="">4-5 Yıl</option>
                                    <option value="">5+ Yıl</option>
                                </select>
                            </div>
                            <div>
                                <h3>İlan Tarihi</h3>
                                <select name="">
                                    <option value="">Hepsi</option>
                                    <option value="">Son Saat</option>
                                    <option value="">24 Saat İçinde</option>
                                    <option value="">1 Hafta İçinde</option>
                                    <option value="">2 Hafta İçinde</option>
                                    <option value="">1 Ay içinde</option>
                                </select>
                            </div>
                            <button>Ara</button>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}