import styles from './cardSlot.module.css';
import duelStyles from './duel.module.css'

export default function CardSlotcardSlot() {
    return (
        <div className={`${duelStyles.col} ${styles.card_outer_box}`}>
            <div className={styles.card_box}></div>
        </div>
    );
}