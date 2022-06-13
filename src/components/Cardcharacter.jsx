import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cardcharacter = ({ resident }) => {
    const [character, setCharacter] = useState()

    useEffect(() => {
        axios.get(resident)
        .then(res => setCharacter(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log(character)
    return (
        <article>
                <span className={`circle${character?.status}`}>{character?.status}</span >
            <img className='img_chara' src={character?.image} alt="" />
            <h2>{character?.name}</h2>
        
            <p>ORIGIN: {character?.origin.name} </p>
           <p>EPISODES:{character?.episode.length}</p> 
        </article>

    )
}

export default Cardcharacter