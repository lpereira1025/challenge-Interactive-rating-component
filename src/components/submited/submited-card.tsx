import styles from './submited-card.module.css';

interface SubmitedCardProps {
    rating: number | undefined;
    handleGetBack: () => void;
}

export default function SubmitedCard({ rating, handleGetBack }: SubmitedCardProps) {
    return (
        <div className={styles.secondCard}>
            <div>
                <img src="/illustration-thank-you.svg" alt="Logo Cellphone"/>
            </div>
            <div className={styles.pill}>
                <p>You selected {rating} out of 5</p>
            </div>

            <div className={styles.textCenter}>
                <h1 className={styles.title}>Thank you !</h1>
                <p className={styles.description}>
                    We appreciated you talking the time to give a rating. If you need more
                    support, don't hesitate to get in touch
                </p>

                <button 
                    className={styles.backButton}
                    onClick={handleGetBack} 
                >
                    Back
                </button>
            </div>
        </div>
    );
}
