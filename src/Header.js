import React from 'react'

const Header = props => <div><div className='logo' align='center'><img src="http://ryanmeinzer.com/s/SickSims-Logo.png" alt="SickSims Logo" class="logo" height="100" background-color="transparent"></img></div><h6>Click naive people 🥴 to make them safe 😷 before they get sick 🤢. <br></br> Click sick people 🤢 to quarantine them 🤒 for recovery back to naive 🥴.</h6><p><button onClick={props.startGameButton}><i>Start Game - Save the world!</i> 🥰</button></p></div>

export default Header