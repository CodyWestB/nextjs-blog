import React from 'react';
import Layout from '../../components/yugioh/layout'
import Gameboard from '../../components/yugioh/duel'
import getCardIds from '../../lib/decks'

export async function getStaticProps() {
    const allCardIds = await getCardIds();
    console.log(`Cody, allCardData: ${allCardIds}`)
    return {
      props: {
        allCardIds,
      },
    };
}

export function Ids({ids}) {
    return JSON.stringify(ids)
}

export default function Game({ allCardIds }) {
    return (
        <Layout>
            <Ids ids={allCardIds} />
            <div>
                <Gameboard>

                </Gameboard>
            </div>
        </Layout>
    );
}
