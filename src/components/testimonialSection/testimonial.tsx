import React, { useState } from 'react';
import styles from './testimonials.module.scss';
import { StarFill } from 'react-bootstrap-icons';
import leftArrow from "@/assets/icons/rightArrow.svg"
import rightArrow from "@/assets/icons/leftArrow.svg";
import quoteIcon from "@/assets/icons/quoteIcon.png"
import person1 from "@/assets/person1.jpg"
import person2 from "@/assets/person2.jpg"
import person3 from "@/assets/person3.jpg"

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className={styles.starRating}>
    {Array.from({ length: 5 }, (_, i) => (
      <StarFill key={i} className={i < rating ? styles.filled : ''} />
    ))}
  </div>
);

interface Testimonial {
  text: string;
  author: string;
  agent: string;
  rating: number;
  avatarUrl: string;
}

const testimonialsData: Testimonial[] = [
  {
    text: "She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier!",
    author: "Barbara D. Smith",
    agent: "Jodi J. Appleby",
    rating: 4,
    avatarUrl: person1,
  },
  {
    text: "Amazing experience, very professional and kind.",
    author: "John Doe",
    agent: "Sarah K. Johnson",
    rating: 5,
    avatarUrl: person2,
  },
  {
    text: "Quick and smooth process. Highly recommended!",
    author: "Alice M.",
    agent: "Michael R. Brown",
    rating: 5,
    avatarUrl: person3,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonialsData[currentIndex];

  return (
    <section className={styles.testimonialsSection}>
      {/* left side */}
      <div className={styles.contentSide}>
        <div className={styles.content}>
            <p className={styles.subtitle}>TESTIMONIALS</p>
        <h2 className={styles.title}>Look What Our Customers Say!</h2>
        <p className={styles.description}>
          Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
        </p>
        <div className={styles.navigation}>
          <button onClick={prevTestimonial} className={styles.navArrow} aria-label="Previous">
            <img src={rightArrow} alt="leftArrow" />
          </button> 
          <button onClick={nextTestimonial} className={styles.navArrow} aria-label="Next">
            <img src={leftArrow} alt="rightArrow" />
          </button>
        </div>
        </div>
      </div>

      {/* right side */}
      <div className={styles.cardSide}>
        <div className={styles.testimonialCard}>
          <img className={styles.quoteIcon} src={quoteIcon} alt="quoteIcon" />
          <div className={styles.testimonialText}>
            
            I highly recommend {testimonial.agent}. {testimonial.text}
          
          </div>
          <hr className={styles.hr} />
          <div className={styles.authorInfo}>
            <div className={styles.authorContainer}>
            <img src={testimonial.avatarUrl} alt={testimonial.author} className={styles.authorAvatar} />
            <span className={styles.authorName}>{testimonial.author}</span>
            </div>
            <StarRating rating={testimonial.rating} />
          </div>

          {/* Vertical Bars */}
          <div className={styles.verticalBars}>
            {testimonialsData.map((_, i) => (
              <div
                key={i}
                className={`${styles.verticalDecoration} ${i === currentIndex ? styles.active : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
