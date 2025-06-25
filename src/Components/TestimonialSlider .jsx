import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: 'Dr. Meena Suresh',
    role: 'Professor, Computer Science',
    image: 'https://ui-avatars.com/api/?name=Meena+Suresh&background=random&size=300',
    text: 'The Innovation Fest at Sacred Heart College was a brilliant convergence of young minds and technology leaders. It was inspiring to see students present such impactful ideas.'
  },
  {
    name: 'Arun Prakash',
    role: 'Alumnus & CTO, TechWave India',
    image: 'https://ui-avatars.com/api/?name=Arun+Prakash&background=random&size=300',
    text: 'Returning to SHC for the Platinum Jubilee and witnessing the fusion of tradition and innovation was truly moving. The event was flawlessly organized and full of potential.'
  },
  {
    name: 'Dr. Latha Menon',
    role: 'STEM Advocate & Chief Guest',
    image: 'https://ui-avatars.com/api/?name=Latha+Menon&background=random&size=300',
    text: 'Empowering Minds & Transforming Lives isn’t just a theme—it was the reality of the day. The SHC Summit was a platform for breakthroughs and collaboration.'
  }
];


const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  return (
    <div className="slider testimonial-slide">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-1"> {/* ← adds horizontal gap */}
            <div className="box1 mx-4 p-6 rounded bg-white" key={index}>
              <div className="testimonial-content position-relative">
                <i className="fa fa-quote-left position-absolute" aria-hidden="true"></i>
              <p class="my-6 position-relative w-md-75 ms-6">{item.text}</p>
              </div>
              <div className="testimonial-bio d-flex align-items-center">
                <img src={item.image} alt={item.name} className="bio-img me-5 rounded-circle float-start" width={60} />
                <div>
                  <p className="mb-1 fw-semibold black">{item.name}</p>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
