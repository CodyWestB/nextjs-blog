import fs from 'fs';
import path from 'path';

const cardsDirectory = path.join(process.cwd(), 'decks/card_images');

const getCardIds = () => {
    // Get file names under /decks/card_images
    const fileNames = fs.readdirSync(cardsDirectory);

    const allCardIds: string[] = fileNames.map((fileName) => {
        // Remove ".jpeg" from file name to get id
        const id = fileName.replace(/\.jpg$/, '');
        
        return id;
    });

    return allCardIds;
}

export default getCardIds;