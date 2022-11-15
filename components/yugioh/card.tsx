import { MonsterCardRace, SpellCardType, TrapCardType } from './enums'

interface ICard<T> {
    id: number;
    name: string;
    race: string;
    archetype: string;
    type: T;
    description: string;
    image: any;
}

/*
Monster Cards

id - ID or Passcode of the card.
name - Name of the card.
type* - The type of card you are viewing (Normal Monster, Effect Monster, Synchro Monster, etc).
desc - Card description/effect.
atk - The ATK value of the card.
def - The DEF value of the card.
level - The Level/RANK of the card.
race - The card race which is officially called type (Spellcaster, Warrior, Insect, etc).
attribute - The attribute of the card.
*/
export class MonsterCard implements ICard<MonsterCardRace> {
    id: number;
    name: string;
    race: string;
    archetype: string;
    type: MonsterCardRace;
    description: string;
    image: any;
    attribute: string;
    level?: number;
    atk: number;
    def: number;

    constructor(
        id: number,
        name: string,
        race: string,
        type: MonsterCardRace,
        description: string,
        image: any,
        level?: number,
    ) {
        this.id = id;
        this.name = name;
        this.race = race;
        this.type = type;
        this.description = description;
        this.image = image;
        this.level = level;
    }
}

/*
Spell Cards

id - ID or Passcode of the card.
name - Name of the card.
type* - The type of card you are viewing (Spell Card or Trap Card).
desc - Card description/effect.
race - The card race which is officially called type for Spell/Trap Cards (Field, Equip, Counter, etc).
*/
export class SpellCard implements ICard<SpellCardType> {
    id: number;
    name: string;
    race: string;
    archetype: string;
    type: SpellCardType;
    description: string;
    image: any;

    constructor(
        id: number,
        name: string,
        race: string,
        type: SpellCardType,
        description: string,
        image: any,
    ) {
        this.id = id;
        this.name = name;
        this.race = race;
        this.type = type;
        this.description = description;
        this.image = image;
    }
}

/*
Trap Cards

id - ID or Passcode of the card.
name - Name of the card.
type* - The type of card you are viewing (Spell Card or Trap Card).
desc - Card description/effect.
race - The card race which is officially called type for Spell/Trap Cards (Field, Equip, Counter, etc).
*/
export class TrapCard implements ICard<TrapCardType> {
    id: number;
    name: string;
    race: string;
    archetype: string;
    type: TrapCardType;
    description: string;
    image: any;

    constructor(
        id: number,
        name: string,
        race: string,
        type: TrapCardType,
        description: string,
        image: any,
    ) {
        this.id = id;
        this.name = name;
        this.race = race;
        this.type = type;
        this.description = description;
        this.image = image;
    }
}


// export type Card = MonsterCard | SpellCard | TrapCard;