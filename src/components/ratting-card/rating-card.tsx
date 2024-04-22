import { useState } from 'react';
import styles from './rating-card.module.css';
import SubmitedCard from '../submited/submited-card';
import { handleSetRating } from '../../functions/handleSetRating';
import { handleSetSubmitted } from '../../functions/handleSetSubmitted';


export default function RatingCard() {
    const [rating, setRating] = useState<number>();
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleGetBack = () => {
        setIsSubmitted(false);
    };

    if (isSubmitted) {
        return <SubmitedCard rating={rating} handleGetBack={handleGetBack} />;
    }

    return (
        <form onSubmit={(e) => handleSetSubmitted(e, setIsSubmitted)} className={styles.card}>
            <div>
                <img className={styles.star} src="/icon-star.svg" alt="Logo Star" />
            </div>

            <div className={styles.text}>
                <h1 className={styles.title}>How did we do? </h1>

                <p className={styles.description}>
                    Please let us know how we did with your support request.
                    All feedback is appreciated to help us improve our offering!
                </p>
            </div>

            <div className={styles.buttonGroup}>
                {[1, 2, 3, 4, 5].map((rate) => (
                    <button
                        key={rate}
                        type="button"
                        onClick={() => handleSetRating(rate, setRating)}
                        className={styles.ratingButton}
                    >
                        {rate}
                    </button>
                ))}
            </div>

            <button type="submit" className={styles.submitButton}>
                Submit
            </button>
        </form>
    );
}