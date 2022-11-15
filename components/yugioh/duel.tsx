/*
TODO:
OPEN API Details -> https://ygoprodeck.com/api-guide/
IMPORTANT API LIMITING:
    - No more than 20 requests per second

Duel
    - Cards

Player
    - Life points
    - Deck (size)
    - Hand (size)
    - Fusion Deck (size)

Deck
    - storage of cards

Board
    - Card slot
        - Monster
        - Magic/Trap
        - Field
        - Graveyard
        - Fusion deck
        - Deck
        - Hand
    - Card Attributes

API Endpoints:
GET (card data)
    -> https://db.ygoprodeck.com/api/v7/cardinfo.php?tcgplayer_data&id=46986414&cache_check
    -> https://db.ygoprodeck.com/api/v7/cardinfo.php?tcgplayer_data&id={card.id}&cache_check

GET (image)
    -> https://images.ygoprodeck.com/images/cards/46986414.jpg
    -> https://images.ygoprodeck.com/images/cards/{card.id}.jpg

    -> All of our cloud URLs will either be
        - https://images.ygoprodeck.com/images/cards_small/
            - You pass the ID of the card to retrieve the image.
            - Ex: https://images.ygoprodeck.com/images/cards/27551.jpg
                - JSON response as both image_url and image_url_small and are within the card_images array.
*/



import CardSlot from './cardSlot';
import styles from './duel.module.css';

// export function generateCardRow() {
//     for (let i = 0; i < 4; i++) {
//     }
// }

export default function Gameboard() {
    return (
        <div className={`${styles.margins}`}>
            <div className={styles.flexGridCards}>
                <CardSlot key="personalDeckSlot"></CardSlot>
                <CardSlot key="opponentMagicTrapSlot5"></CardSlot>
                <CardSlot key="opponentMagicTrapSlot3"></CardSlot>
                <CardSlot key="opponentMagicTrapSlot1"></CardSlot>
                <CardSlot key="opponentMagicTrapSlot2"></CardSlot>
                <CardSlot key="opponentMagicTrapSlot4"></CardSlot>
                <CardSlot key="opponentFusionDeckSlot"></CardSlot>
            </div>
            <div className={styles.flexGridCards}>
                <CardSlot key="opponentDiscardSlot"></CardSlot>
                <CardSlot key="opponentMonsterSlot5"></CardSlot>
                <CardSlot key="opponentMonsterSlot3"></CardSlot>
                <CardSlot key="opponentMonsterSlot1"></CardSlot>
                <CardSlot key="opponentMonsterSlot2"></CardSlot>
                <CardSlot key="opponentMonsterSlot4"></CardSlot>
                <CardSlot key="opponentFieldSlot"></CardSlot>
            </div>
            <br />
            <div className={styles.flexGridCards}>
                <CardSlot key="personalFieldSlot"></CardSlot>
                <CardSlot key="personalMonsterSlot4"></CardSlot>
                <CardSlot key="personalMonsterSlot2"></CardSlot>
                <CardSlot key="personalMonsterSlot1"></CardSlot>
                <CardSlot key="personalMonsterSlot3"></CardSlot>
                <CardSlot key="personalMonsterSlot5"></CardSlot>
                <CardSlot key="personalDiscardSlot"></CardSlot>
            </div>
            <div className={styles.flexGridCards}>
                <CardSlot key="personalFusionDeckSlot"></CardSlot>
                <CardSlot key="personalMagicTrapSlot4"></CardSlot>
                <CardSlot key="personalMagicTrapSlot2"></CardSlot>
                <CardSlot key="personalMagicTrapSlot1"></CardSlot>
                <CardSlot key="personalMagicTrapSlot3"></CardSlot>
                <CardSlot key="personalMagicTrapSlot5"></CardSlot>
                <CardSlot key="personalDeckSlot"></CardSlot>
            </div>            
        </div>
    );
}
