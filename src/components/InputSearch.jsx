import React from 'react'

export const InputSearch = ({ setSearchLocation }) => {


    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.firstChild.value)
    }


    return (
        <form onSubmit={searchLocation}>
            <input type="text" />
            <button className='button'>Search by number</button>
        </form>
    )
}
