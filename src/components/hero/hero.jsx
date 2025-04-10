import './hero.css';
import { Images } from '../../assets/images';

function Hero() {
    return (
        <div className="hero-wrap">
            <div className="hero-container">
                <div className="hero-background">
                    <img src={Images.heroBackground} alt="polished floor" />
                </div>
                <div className="hero">
                    <div className="hero-top">
                        <div className="small-headline">VICTORY CONCRRETE POLISHED FLOORS</div>
                        <h1>Transforming Concrete Into Art With Over {new Date().getFullYear() - 2006} Years of Expertise</h1>
                        <p><span><span className="highlight">Residential & Light Commercial</span> | <span className="highlight">Fully Insured</span> <br /></span>Durable, low-maintenance, and beautifully finished concrete floors for homes and light commercial spaces in Lindale, TX and surrounding areas</p>
                        <div className="hero-btn">
                            <a id='hero-f-btn' className='hero-f-btn' href="#portfolio">View Portfolio</a>
                            <a id='hero-s-btn' className='hero-s-btn' href="#services">See Services</a>
                        </div>
                    </div>

                    <div className="hero-base">
                        <img src={Images.heroImg4} alt="chess floor design" />
                        <img src={Images.heroImg1} alt="outdoor stained floor" />
                        <img src={Images.heroImg2} alt="polished concrete floor" />
                        <img src={Images.heroImg3} alt="polished concrete floor" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;