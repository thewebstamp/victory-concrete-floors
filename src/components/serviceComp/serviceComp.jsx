import './serviceComp.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';

function ServiceComp() {
    const navigate = useNavigate();
    const [ourServices, setOurServices] = useState([
        {
            title: 'Polished Concrete',
            description: 'Durable, glossy finish with low maintenance needs',
            image: Images.polish,
            url: 'polished floor'
        },
        {
            title: 'Stained Concrete',
            description: 'Add vibrant color and unique character indoors',
            image: Images.stained,
            url: 'stained floor'
        },
        {
            title: 'Epoxy Coatings',
            description: 'Strong, chemical-resistant surface for heavy-duty use',
            image: Images.epoxy,
            url: 'epoxy floor'
        },
        {
            title: 'Floor Restoration',
            description: 'Revive old concrete with clean, smooth finish',
            image: Images.restoration,
            url: 'floor restoration'
        },
        {
            title: 'Outdoor Surfaces',
            description: 'Upgrade patios, walkways, and pool areas',
            image: Images.outdoor,
            url: 'curb appeal'
        },
        {
            title: 'Custom Projects',
            description: 'Counters, graphics, overlays, and specialty finishes',
            image: Images.custom,
            url: 'custom flooring'
        }
    ]);

    function scrollLeft() {
        const sItems = document.querySelectorAll('.items');
        setOurServices((o) => {
            o.push(o[0]);
            o.shift();
            return [...o];
        });
        sItems.forEach((item) => {
            item.classList.add("s-slide-left");
            setTimeout(() => {
                item.classList.remove("s-slide-left");
            }, 400);
        })
    }

    function scrollRight() {
        const sItems = document.querySelectorAll('.items');
        setOurServices((o) => {
            o.unshift(o[o.length-1]);
            o.pop();
            return [...o];
        });
        sItems.forEach((item) => {
            item.classList.add("s-slide-right");
            setTimeout(() => {
                item.classList.remove("s-slide-right");
            }, 400);
        })
    };

        const serviceT = useRef();
        const serviceB = useRef();
    
        function slideUp() {
            if (window.location.pathname == "/") {
                if (window.innerHeight * 0.9 >= serviceT.current.getBoundingClientRect().top) {
                    serviceT.current.classList.add("slide-up");
                } else {
                    serviceT.current.classList.remove("slide-up");
                }
    
                if (window.innerHeight * 0.9 >= serviceB.current.getBoundingClientRect().top) {
                    serviceB.current.classList.add("slide-up");
                } else {
                    serviceB.current.classList.remove("slide-up");
                }
            }
        }
    
        useEffect(() => {
            window.addEventListener("scroll", slideUp);
    
            return () => {
                if (window.location.pathname == "/") {
                    serviceT.current.classList.remove("slide-up");
                    serviceB.current.classList.remove("slide-up");
                }
            }
        }, []);

    return (
        <div className="service-comp" id='services'>
            <div className="s-up" ref={serviceT}>
                <div className="s-heading">
                    <div className="s-headline">🛠️ OUR SERVICES</div>
                    <h2>Premium Concrete Flooring Solutions Built to Last</h2>
                </div>
                <div className="s-text">
                    <p>Whether you're upgrading a home, refreshing a shop floor, or adding curb appeal to your property — we bring expert craftsmanship and long-lasting results. <span>WE&nbsp; OFFER&nbsp; THE&nbsp; FOLLOWING&nbsp; RANGE&nbsp; OF&nbsp; SERVICES:</span></p>
                    <a href="#" onClick={()=>{navigate("/contact")}}>Contact Us</a>
                </div>
            </div>

            <div className="s-base-wrap" ref={serviceB}>
                <div className="s-base">
                    <div className="top">
                        <div className="s-top-case">
                            {ourServices.map((item, i) => (
                                <div key={i} className="items">
                                    <div className="item-card">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <img src={item.image} alt={item.url} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="control">
                        <FontAwesomeIcon id='s-control-l' icon={faArrowLeft} onClick={scrollRight} />
                        <FontAwesomeIcon id='s-control-r' icon={faArrowRight} onClick={scrollLeft} />
                    </div>
                </div>
                <a href="#" onClick={()=>{navigate("/contact")}}>Contact Us</a>
            </div>
        </div>
    )
}

export default ServiceComp;