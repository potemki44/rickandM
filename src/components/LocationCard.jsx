import React from 'react'

export const LocationCard = ({ location }) => {
    console.log(location)
    return (
        <div className='locationCard'>
          
            <h2>{location?.name}</h2>
            <ul>
                <li><span className='locationCardTitles'>Type:</span>{location?.type}</li>
                <li><span className='locationCardTitles'>Dimension:</span>{location?.dimension}</li>
                <li><span className='locationCardTitles'>Population:</span>{location?.residents.length}</li>
            </ul>
        </div>


    )
}
