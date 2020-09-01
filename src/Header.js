import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => 
<div>
    <div className='logo' align='center'>
        <img src="http://ryanmeinzer.com/s/SickSims-Logo.png" alt="SickSims Logo" className="logo" height="100" background-color="transparent"></img>
    </div>
    <h6>Click naive people 🥴 before they become sick 🤢 to make them safe 😷. <br></br> Click sick people 🤢 before they become terminal 😵 to quarantine them 🤒 for recovery.</h6>
    <p><Link to="/superheros"><button className='superherosButton'><i>See Top Superheros</i></button></Link>
    <button className='playButton' onClick={props.startGameButton}><i>Start Game - Save the world!</i> 🥰</button>
    <Link to="/score"><button className='scoreButton'><i>Save Your Score</i></button></Link></p>
</div>

export default Header