'use client'
import Star from './svg/Star';

const Rating = (props) => {
  const starCount = props.stars;
  const stars = [];

  for (let i = 0; i < starCount; i++) {
    stars.push(<Star key={i} />);
  }

  return (
    <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-1">
        {stars}
        </div>
        <p className='font-light'>{props.reviews} Reviews</p>
    
    </div>
  );
};

export default Rating;