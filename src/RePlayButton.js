import React from 'react'

const RePlayButton = () => 
    <button className='rePlayButton' onClick={() => window.location.replace('/')}><i>Restart Game - Save the world!</i> <span role="img" aria-label="saved person emoji">🥰</span></button>
export default RePlayButton