import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number; // por exemplo, 3.5
  totalStars?: number; // padrão é 5
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {Array.from({ length: totalStars }).map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} fill="#FFD700" strokeWidth={0} />;
        } else if (i === fullStars && hasHalfStar) {
          return <StarHalf key={i} fill="#FFD700" strokeWidth={0} />;
        }
        return <Star key={i} color="#CCC" />;
      })}
    </div>
  );
};
