import './testimonial.css';
import { Images } from '../../assets/images';
import { useRef, useEffect } from 'react';

function Testimonial() {
    const testimonial = [
        {
            name: 'ADONIS GUTTER',
            address: 'Mineola, TX',
            review: "Did a wonderful job on a commercial duplex project.  Good communication. On time and on budget. Their professionalism really stood out from start to finish"
        },
        {
            name: 'NICOLE CASTLEBERRY',
            address: 'Mineola, TX',
            review: 'Matt and his team just finished the floors at a new build duplex we just competed. We had several bids but Matt came in under budget and seemed to have the most knowledge. We especially liked that he was local. The end product turned out better than we could have imagined. They were on time and did a phenomenal job. Highly recommend!'
        },
        {
            name: 'CHRIS C',
            address: 'Mineola, TX',
            review: 'Thank you to Victory Concrete Stained/Polished Floors for their beautiful work at our Duplex. I am super satisfied with what they  have done and cannot recommend them enough'
        }
    ];

    const testimonialB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= testimonialB.current.getBoundingClientRect().top) {
                testimonialB.current.classList.add("slide-up");
            } else {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="testimonial-comp">
            <div className="t-top">
                <div className="t-screen"></div>
                <img src={Images.testimonial} alt="" />
            </div>

            <div className="t-base" ref={testimonialB}>
                <div className="t-headline">TESTIMONIALS</div>
                <h2>What Our Customers Say About Us</h2>
                <div className="testimonial-wrap">
                    {testimonial.map((review, i) => (
                        <div className="t-reviews" key={i}>
                            <div className="review">
                                <div className="big-circle"></div>
                                <div className="small-circle"></div>
                                <p>{review.review}</p>
                            </div>
                            <p className='customer' href='#'>{review.name}</p>
                            <p className='t-address'>{review.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="base-rev">
                <a className='facebook-review' href="https://web.facebook.com/profile.php?id=61552523458556&sk=reviews" target='_blank'><img src={Images.facebookReviews} alt="" /></a>
            </div>
        </div>
    )
}

export default Testimonial;