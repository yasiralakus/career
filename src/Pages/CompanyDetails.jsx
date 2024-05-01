import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CompanyDetails() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="outlet-page">

            <div className="jobs-hero">

                <img src="./img/home/little-bg.jpg" alt="" />

                <div className="container">

                    <h1>Envato</h1>

                    <p><Link to={'/'}>Anasayfa</Link> / <Link to={'/companies'}>Şirketler</Link> / Envato</p>

                </div>

            </div>

            <div className="company-details-container">

                <div className="container">

                    <div className="company-details-left">

                        <h1>Envato Hakkında</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae unde quasi alias maxime quos suscipit! Quas dicta quam sunt deserunt autem blanditiis soluta aperiam a quis vero alias asperiores minima debitis quo reprehenderit pariatur, eaque dignissimos similique cupiditate earum, molestiae dolorum. Rem, accusantium deserunt! Dolorem molestiae placeat odit quos.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a vero placeat natus ipsum quia nostrum, quod saepe nesciunt possimus.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id velit veniam totam ducimus ut suscipit soluta autem repudiandae praesentium. Aperiam alias qui eveniet dignissimos quasi dolor cumque at quaerat?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing ept. Tenetur, voluptas!</p>
                        <p>Tempore saepe cumque nemo, expedita quae vitae.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing ept. Tenetur, voluptas!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing ept. Accusantium, corporis atque.</p>
                        <p>Tempore saepe cumque nemo, expedita quae vitae.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing ept. Voluptate repellat vitae fuga placeat repudiandae a reprehenderit voluptates ipsum. Porro, accusantium..</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing ept. Tempore saepe cumque nemo, expedita quae vitae.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae unde quasi alias maxime quos suscipit! Quas dicta quam sunt deserunt autem blanditiis soluta aperiam a quis vero alias asperiores minima debitis quo reprehenderit pariatur, eaque dignissimos similique cupiditate earum, molestiae dolorum. Rem, accusantium deserunt! Dolorem molestiae placeat odit quos.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a vero placeat natus ipsum quia nostrum, quod saepe nesciunt possimus.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id velit veniam totam ducimus ut suscipit soluta autem repudiandae praesentium. Aperiam alias qui eveniet dignissimos quasi dolor cumque at quaerat?</p>

                    </div>

                    <div className="company-details-right">

                        <main>

                            <img src="./img/home/company01.png" alt="" />

                            <h3>Envato Genel Bakış</h3>

                            <p><span>Kategori:</span> Teknoloji , Yazılım</p>
                            <p><span>Kuruluş:</span> 2006</p>
                            <p><span>Çalışan Kadrosu:</span> 50 - 100</p>
                            <p><span>Konumu:</span> Georgia / USA</p>
                            <p><span>Website:</span> envato.com</p>

                        </main>

                        <footer>

                            <h3>Konum</h3>

                            <img src="./img/location.png" alt="" />

                        </footer>

                    </div>

                </div>


            </div>

        </div>
    )
}