import React from 'react'
import Slider from "react-slick";
import './Review.css'
const Review = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
    <div className="review-heading">
    <span></span>
    <h3></h3>
    </div>
    <div>
    <div className="review-heading">
    <span>Customers Say</span>
    <h3>REVIEW</h3>
    <Slider {...settings}>
    <div>
    <div className='review-card'>
        <div className='review-card-image'>
        <img src="https://preview.colorlib.com/theme/pato/images/avatar-04.jpg.webp" width='110px' height='110px' alt="" />
        </div>
        <div className='review-card-desc'>
        <p>
        “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
        </div>
        <div className='review-card-rate'>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div className='review-card-person'>
        Marie Simmons ˗ New York</div>
      </div>
  </div>
  <div>
  <div className='review-card'>
  <div className='review-card-image'>
  <img src="https://preview.colorlib.com/theme/pato/images/avatar-04.jpg.webp" width='110px' height='110px' alt="" />
  </div>
  <div className='review-card-desc'>
  <p>
  “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
  </div>
  <div className='review-card-rate'>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  </div>
  <div className='review-card-person'>
  Marie Simmons ˗ New York</div>
</div>
  </div>
  <div>
  <div className='review-card'>
  <div className='review-card-image'>
  <img src="https://preview.colorlib.com/theme/pato/images/avatar-04.jpg.webp" width='110px' height='110px' alt="" />
  </div>
  <div className='review-card-desc'>
  <p>
  “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
  </div>
  <div className='review-card-rate'>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  </div>
  <div className='review-card-person'>
  Marie Simmons ˗ New York</div>
</div>
  </div>
  <div>
  <div className='review-card'>
  <div className='review-card-image'>
  <img src="https://preview.colorlib.com/theme/pato/images/avatar-04.jpg.webp" width='110px' height='110px' alt="" />
  </div>
  <div className='review-card-desc'>
  <p>
  “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
  </div>
  <div className='review-card-rate'>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  </div>
  <div className='review-card-person'>
  Marie Simmons ˗ New York</div>
</div>
  </div>
  <div>
  <div className='review-card'>
  <div className='review-card-image'>
  <img src="https://preview.colorlib.com/theme/pato/images/avatar-04.jpg.webp" width='110px' height='110px' alt="" />
  </div>
  <div className='review-card-desc'>
  <p>
  “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
  </div>
  <div className='review-card-rate'>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  </div>
  <div className='review-card-person'>
  Marie Simmons ˗ New York</div>
</div>
  </div>
  <div>
  <div className='review-card'>
  <div className='review-card-image'>
  <img src="https://preview.colorlib.com/theme/pato/images/avatar-04.jpg.webp" width='110px' height='110px' alt="" />
  </div>
  <div className='review-card-desc'>
  <p>
  “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
  </div>
  <div className='review-card-rate'>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  </div>
  <div className='review-card-person'>
  Marie Simmons ˗ New York</div>
</div>
  </div>
    </Slider>
    </div>
    </div>
    </div>
  )
}

export default Review
