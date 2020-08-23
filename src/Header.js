import React from 'react'

const Header = props => <div><div className='logo' align='center'><img src="http://ryanmeinzer.com/s/SickSims-Logo.png" alt="SickSims Logo" class="logo" height="100" background-color="transparent"></img></div><h6>Click naive people 🥴 before they get sick 🤢 to make them safe 😷. <br></br> Click sick people 🤢   before they die ⚰️ to quarantine them 🤒 for recovery.</h6><p><button onClick={props.startGameButton}><i>Start Game - Save the world!</i> 🥰</button></p></div>

export default Header