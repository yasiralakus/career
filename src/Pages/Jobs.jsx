import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Jobs() {

    const [jobsPage, setJobsPage] = useState(1);

    const jobs = [
        {
            job_title: 'Full Stack Developer',
            job_status: 'Full Time',
            job_locaiton: 'Georgia / USA',
            job_salary: '$5000 - $8000',
            company_name: 'Envato',
            company_logo: './img/home/company01.png',
            job_experience: '1 - 2 Yıl'
        },
        {
            job_title: 'Frontend Developer',
            job_status: 'Full Time',
            job_locaiton: 'Lisbon / Portugal',
            job_salary: '$4000 - $6000',
            company_name: 'Github',
            company_logo: './img/home/company03.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_title: 'UI & UX Designer',
            job_status: 'Part Time',
            job_locaiton: 'Tokyo / Japan',
            job_salary: '$3000 - $5000',
            company_name: 'Astha',
            company_logo: './img/home/company02.png',
            job_experience: '1 - 2 Yıl'
        },
        {
            job_title: 'Game Developer',
            job_status: 'Full Time',
            job_locaiton: 'Londra / UK',
            job_salary: '$8000 - $10000',
            company_name: 'Bebsha',
            company_logo: './img/home/company10.png',
            job_experience: '5 - 6 Yıl'
        },
        {
            job_title: 'Frontend Developer',
            job_status: 'Freelance',
            job_locaiton: 'Dubai / UAE',
            job_salary: '$4000 - $8000',
            company_name: 'Hope',
            company_logo: './img/home/company09.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_title: 'Backend Developer',
            job_status: 'Full Time',
            job_locaiton: 'Istanbul / Turkey',
            job_salary: '$3000 - $6000',
            company_name: 'Generous',
            company_logo: './img/home/company06.png',
            job_experience: '1 - 2 Yıl'
        },
        {
            job_title: 'Backend Developer',
            job_status: 'Full Time',
            job_locaiton: 'Osaka / Japan',
            job_salary: '$4000 - $8000',
            company_name: 'Salina',
            company_logo: './img/home/company08.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_title: 'Game Developer',
            job_status: 'Full Time',
            job_locaiton: 'Moscow / Russia',
            job_salary: '$5000 - $6000',
            company_name: 'Medicore',
            company_logo: './img/home/company04.png',
            job_experience: '1 - 2 Yıl'
        },
        {
            job_title: 'Mobile App Developer',
            job_status: 'Part Time',
            job_locaiton: 'Milano / Italy',
            job_salary: '$4000 - $8000',
            company_name: 'Greensoul',
            company_logo: './img/home/company05.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_title: 'Mobile App Developer',
            job_status: 'Freelance',
            job_locaiton: 'Roma / Italy',
            job_salary: '$2000 - $6000',
            company_name: 'Generous',
            company_logo: './img/home/company06.png',
            job_experience: '1 - 2 Yıl'
        },
        {
            job_title: 'React Developer',
            job_status: 'Full Time',
            job_locaiton: 'Milano / Italy',
            job_salary: '$4000 - $8000',
            company_name: 'Buzco',
            company_logo: './img/home/company07.png',
            job_experience: '3 - 4 Yıl'
        },
        {
            job_title: 'Data Analyst',
            job_status: 'Freelance',
            job_locaiton: 'Utah / USA',
            job_salary: '$6000 - $10000',
            company_name: 'Envato',
            company_logo: './img/home/company01.png',
            job_experience: '5 - 6 Yıl'
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
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

                        <div>
                            {jobsPage === 1 &&
                            jobs.slice(0,5).map(x => (
                                <Link to={'/job-details'} className="latest-jobs-item">
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

                            {jobsPage === 2 &&
                            jobs.slice(5,10).map(x => (
                                <Link to={'/job-details'} className="latest-jobs-item">
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

                            {jobsPage === 3 &&
                            jobs.slice(10,15).map(x => (
                                <Link to={'/job-details'} className="latest-jobs-item">
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

                        <div className="compaines-container-left-navigation">
                            <button onClick={() => (jobsPage > 1 && setJobsPage(jobsPage - 1))} ><i className="fa-solid fa-angle-left"></i></button>
                            <button onClick={() => setJobsPage(1)} style={jobsPage === 1 ?{background: '#007BFF', color: '#fff'} : {}}>1</button>
                            <button onClick={() => setJobsPage(2)} style={jobsPage === 2 ?{background: '#007BFF', color: '#fff'} : {}}>2</button>
                            <button onClick={() => setJobsPage(3)} style={jobsPage === 3 ?{background: '#007BFF', color: '#fff'} : {}}>3</button>
                            <button onClick={() => setJobsPage(4)} style={jobsPage === 4 ?{background: '#007BFF', color: '#fff'} : {}}>4</button>
                            <button onClick={() => setJobsPage(5)} style={jobsPage === 5 ?{background: '#007BFF', color: '#fff'} : {}}>5</button>
                            <button onClick={() => (jobsPage < 5 && setJobsPage(jobsPage + 1))}><i className="fa-solid fa-angle-right"></i></button>
                        </div>

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