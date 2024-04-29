import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../App";

export default function Companies() {

    const [companyData, setCompanyData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    useEffect(() => {
        async function fetchData() {

            let { data: companies, error } = await supabase
            .from('companies')
            .select('*')
            setCompanyData(companies ? companies : null)
        }
        fetchData()
    }, [])
    
    console.log(companyData)

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

                        <div style={{position: 'relative'}}>
                            {
                                companyData ? companyData.map(x => (

                                    <Link key={x.company_id} className="compaines-item">
                                        <img src={x.company_logo} alt="" />
                                        <h1>{x.company_name}</h1>
                                        <h6>2 iş ilanı</h6>
                                        <p><i className="fa-regular fa-map"></i> {x.company_location}</p>
                                    </Link>
                                )) :
                                <div className="loading-bg" style={{position: 'absolute', inset: '0'}}>
                                    <div style={{marginTop: '50px'}} className="loading"></div>
                                </div>
                                
                            }
                        </div>

                        {companyData &&
                            <div className="compaines-container-left-navigation">
                                <button><i className="fa-solid fa-angle-left"></i></button>
                                <button style={{background: '#007BFF', color: '#fff'}}>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                                <button><i className="fa-solid fa-angle-right"></i></button>
                            </div>
                        }

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