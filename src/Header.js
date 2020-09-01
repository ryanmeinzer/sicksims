import React from 'react'
import { Link } from 'react-router-dom'
import logo from './SickSims-Logo.png'

const Header = props => 
<div>
    <div className='logo' align='center'>
        <img src={logo} alt="SickSims Logo" className="logo" background-color="transparent"></img>
    </div>
        <h6>Click naive people <span role="img" aria-label="naive person emoji">🥴</span> to make them safe <span role="img" aria-label="safe person emoji">😷</span> before they become sick <span role="img" aria-label="sick person emoji">🤢</span>. <br></br> Drag sick people <span role="img" aria-label="sick person emoji">🤢</span> into quarantine for recovery <span role="img" aria-label="quarantined person emoji">🤒</span> before they become terminal <span role="img" aria-label="terminal person emoji">😵</span>.</h6>
    <p><Link to="/superheros"><button className='superherosButton'><i>See Top Superheros</i></button></Link>
            <button className='playButton' onClick={props.startGameButton}><i>Start Game - Save the world!</i> <span role="img" aria-label="saved person emoji">🥰</span></button>
    <Link to="/score"><button className='scoreButton'><i>Save Your Score</i></button></Link></p>
</div>

export default Header