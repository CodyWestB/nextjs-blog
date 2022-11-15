export class Player<Card> {
    playerName: string;
    lifePoints: number;
    deck: Card[];
    hand: Card[];
    hasCurrentTurn: boolean;

    constructor(
        playerName: string,
        lifePoints: number = 8000,
        deck: Card[],
        hand: Card[],
        hasCurrentTurn: boolean = false
    ) {
        this.playerName = playerName;
        this.lifePoints = lifePoints;
        this.deck = deck;
        this.hand = hand;
        this.hasCurrentTurn = hasCurrentTurn;
    }
}