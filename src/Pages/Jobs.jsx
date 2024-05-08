import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

export default function Jobs() {

    const [jobsPage, setJobsPage] = useState(1);
    const [filteredJobs , setFilteredJobs] = useState(null);
    const {inputTitle, setInputTitle, inputLocation, setInputLocation, inputStatus, setInputStatus, setOpenMobileMenu, openMobileMenu} = useContext(DataContext);


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

    function handleFilter(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        const filtered = jobs.filter((job) => {
            return  job.job_title.toLowerCase().includes(formObj.title.toLowerCase()) &&
                    job.job_status.toLowerCase().includes(formObj.job_status.toLowerCase()) &&
                    job.job_location.toLowerCase().includes(formObj.location.toLowerCase());
        });
        setFilteredJobs(filtered.length > 0 ? filtered : null)
        setJobsPage(1);

    }

    function clearFilter(e) {
        e.preventDefault();
        setInputTitle(null);
        setJobsPage(1);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        setOpenMobileMenu(false);
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

                    <div className="jobs-container-left">

                        <div>

                            {filteredJobs !== null ? (
                                filteredJobs
                                .slice((jobsPage - 1) * 5, jobsPage * 5)
                                .map(x => (
                                    <Link key={x.job_id} to={'/job-details'} className="latest-jobs-item">
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
                                ))
                            ) : (
                                jobs
                                .slice((jobsPage - 1) * 5, jobsPage * 5)
                                .map(x => (
                                    <Link key={x.job_id} to={'/job-details'} className="latest-jobs-item">
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
                                ))
                            )}

                        </div>

                        <div className="compaines-container-left-navigation">
                            {filteredJobs ? 
                            <>
                                <button onClick={() => (jobsPage > 1 && setJobsPage(jobsPage - 1))} ><i className="fa-solid fa-angle-left"></i></button>
                                <button onClick={() => setJobsPage(1)} style={jobsPage === 1 ?{background: '#007BFF', color: '#fff'} : {}}>1</button>
                                {filteredJobs.length > 5 && <button onClick={() => setJobsPage(2)} style={jobsPage === 2 ?{background: '#007BFF', color: '#fff'} : {}}>2</button>}
                                {filteredJobs.length > 10 && <button onClick={() => setJobsPage(3)} style={jobsPage === 3 ?{background: '#007BFF', color: '#fff'} : {}}>3</button>}
                                {filteredJobs.length > 15 && <button onClick={() => setJobsPage(4)} style={jobsPage === 4 ?{background: '#007BFF', color: '#fff'} : {}}>4</button>}
                                {filteredJobs.length > 20 && <button onClick={() => setJobsPage(5)} style={jobsPage === 5 ?{background: '#007BFF', color: '#fff'} : {}}>5</button>}
                                {filteredJobs.length > 25 && <button onClick={() => setJobsPage(6)} style={jobsPage === 6 ?{background: '#007BFF', color: '#fff'} : {}}>6</button>}
                                <button onClick={() => (jobsPage < (filteredJobs.length / 5) && setJobsPage(jobsPage + 1))}><i className="fa-solid fa-angle-right"></i></button>
                            </>
                            :
                            <>
                                <button onClick={() => (jobsPage > 1 && setJobsPage(jobsPage - 1))} ><i className="fa-solid fa-angle-left"></i></button>
                                <button onClick={() => setJobsPage(1)} style={jobsPage === 1 ?{background: '#007BFF', color: '#fff'} : {}}>1</button>
                                <button onClick={() => setJobsPage(2)} style={jobsPage === 2 ?{background: '#007BFF', color: '#fff'} : {}}>2</button>
                                <button onClick={() => setJobsPage(3)} style={jobsPage === 3 ?{background: '#007BFF', color: '#fff'} : {}}>3</button>
                                <button onClick={() => setJobsPage(4)} style={jobsPage === 4 ?{background: '#007BFF', color: '#fff'} : {}}>4</button>
                                <button onClick={() => setJobsPage(5)} style={jobsPage === 5 ?{background: '#007BFF', color: '#fff'} : {}}>5</button>
                                <button onClick={() => setJobsPage(6)} style={jobsPage === 6 ?{background: '#007BFF', color: '#fff'} : {}}>6</button>
                                <button onClick={() => (jobsPage < 6 && setJobsPage(jobsPage + 1))}><i className="fa-solid fa-angle-right"></i></button>
                            </>
                        }
                        </div>

                    </div>

                    <div className="jobs-container-right">

                        <form onSubmit={handleFilter}>
                            <h1>İş Ara</h1>
                            <input name="title" type="text" placeholder="Anahtar kelime gir" defaultValue={inputTitle === null ? '' : inputTitle}/>
                            <div>
                                <h3>Konum</h3>
                                <input name="location" type="text" placeholder="Konum gir" defaultValue={inputLocation === null ? '' : inputLocation}/>
                            </div>
                            <div>
                                <h3>İş Tipi</h3>
                                <select name="job_status">
                                    <option value="">Hepsi</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Freelance">Freelance</option>
                                </select>
                            </div>
                            <button>Ara</button>
                        </form>

                        <button onClick={clearFilter}>Tümünü Göster</button>

                    </div>

                </div>

            </div>

        </div>
    )
}