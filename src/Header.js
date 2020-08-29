import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => <div><div className='logo' align='center'><img src="http://ryanmeinzer.com/s/SickSims-Logo.png" alt="SickSims Logo" class="logo" height="100" background-color="transparent"></img></div><h6>Click naive people 🥴 before they get sick 🤢 to make them safe 😷. <br></br> Click sick people 🤢   before they die ⚰️ to quarantine them 🤒 for recovery.</h6><p><Link to="/superheros"><button className='superherosButton'><i>See Top Superheros</i></button></Link><Link to="/play"><button className='playButton'><i>Start Game - Save the world!</i> 🥰</button></Link><Link to="/score"><button className='scoreButton'><i>Save Your Score</i></button></Link></p></div>

export default Header