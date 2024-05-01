import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Companies() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const companies = [
        {
            company_logo: './img/home/company01.png',
            company_name: 'Envato',
            company_location: 'Melbourne / Australia',
        },

        {
            company_logo: './img/home/company02.png',
            company_name: 'Astha',
            company_location: 'Dhaka / Bangladesh',
        },

        {
            company_logo: './img/home/company03.png',
            company_name: 'Github',
            company_location: 'San Francisco / USA',
        },

        {
            company_logo: './img/home/company04.png',
            company_name: 'Medicore',
            company_location: 'Los Angeles / USA',
        },

        {
            company_logo: './img/home/company05.png',
            company_name: 'Greensoul',
            company_location: 'Tokyo / Japan',
        },

        {
            company_logo: './img/home/company10.png',
            company_name: 'Bebsha',
            company_location: 'Coimbra / Portugal',
        },

        {
            company_logo: './img/home/company07.png',
            company_name: 'Buzco',
            company_location: 'Dubai / UAE',
        },

        {
            company_logo: './img/home/company12.png',
            company_name: 'Donna',
            company_location: 'Liverpool / UK',
        },

        {
            company_logo: './img/home/company11.png',
            company_name: 'Fnions',
            company_location: 'Madrid / Spain',
        },

        {
            company_logo: './img/home/company06.png',
            company_name: 'Generous',
            company_location: 'Osaka / Japan',
        },

        {
            company_logo: './img/home/company09.png',
            company_name: 'Hope',
            company_location: 'Ottawa / Canada',
        },

        {
            company_logo: './img/home/company08.png',
            company_name: 'Salina',
            company_location: 'Cambridge / UK',
        },
    ]
    

    return (
        <div className="outlet-page">

            <div className="companies-hero">

                <img src="./img/home/little-bg.jpg" alt="" />
                
                <div className="container">

                    <h1>Şirketler</h1>

                    <p><Link to={'/'}>Anasayfa</Link> / Şirketler</p>

                </div>

            </div>

            <div className="companies-container">

                <div className="container">

                    <div className="compaines-container-left">

                        <div>
                            {companies.map(x => (
                                <Link to={'/company-details'} className="compaines-item">
                                    <img src={x.company_logo} alt="" />
                                    <h1>{x.company_name}</h1>
                                    <h6>2 iş ilanı</h6>
                                    <p><i className="fa-regular fa-map"></i> {x.company_location}</p>
                                </Link>
                            ))}
                        </div>

                        {/* <div className="compaines-container-left-navigation">
                            <button><i className="fa-solid fa-angle-left"></i></button>
                            <button style={{background: '#007BFF', color: '#fff'}}>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button><i className="fa-solid fa-angle-right"></i></button>
                        </div> */}

                    </div>

                    <div className="compaines-container-right">

                        <div>

                            <form>
                                <h1>Şirket Ara</h1>
                                <input type="text" placeholder="Anahtar Kelime" />
                                <div>
                                    <h6>Kategori</h6>
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
                                    <h6>Konum</h6>
                                    <input type="text" placeholder="Konum" />
                                </div>

                                <button>Ara</button>

                            </form>

                        </div>

                        <div>
                            <Link to={'https://www.nesine.com'}><img src="./img/reklam/nesine.jpg" alt="" /></Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}