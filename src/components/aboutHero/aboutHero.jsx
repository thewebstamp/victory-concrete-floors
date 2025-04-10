import './aboutHero.css';
import { Images } from '../../assets/images.js';

function AboutHero() {
    return (
        <div className="about-hero">
            <div className='ah-top'>
                <div className='img-wrap'>
                    <img className='ah-img-1' src={Images.p5} alt='epoxy flooring' />
                    <img className='ah-img-2' src={Images.about_hero} alt='Matt of Victory Concrete Floors' />
                    <img className='ah-img-height' src={Images.p5} alt='epoxy flooring' />
                </div>
            </div>
            
            <div className='ah-base'>
                <div className='ah-headline'>ABOUT VICTORY CONCRETE FLOORS</div>
                <h2>We Provide the Best Concrete Floor Services Across Texas</h2>
                <p>Victory Concrete Floors is a trusted name in residential and light commercial concrete finishing. Led by concrete artisan Matt, with over 18 years of hands-on experience, we bring artistry and precision to every project. Whether it’s polishing an old slab, enhancing a high-traffic living space, or creating a sleek industrial floor, we prioritize quality, performance, and customer satisfaction.<br />We don't just offer services — we offer long-term value, expert advice, and flooring solutions that combine functionality with timeless appeal</p>
            </div>
        </div>
    )
}

export default AboutHero;