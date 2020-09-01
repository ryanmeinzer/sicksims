import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => 
<div>
    <div className='logo' align='center'>
        <img src="http://ryanmeinzer.com/s/SickSims-Logo.png" alt="SickSims Logo" className="logo" height="100" background-color="transparent"></img>
    </div>
        <h6>Click naive people <span role="img" aria-label="naive person emoji">🥴</span> before they become sick <span role="img" aria-label="sick person emoji">🤢</span> to make them safe <span role="img" aria-label="safe person emoji">😷</span>. <br></br> Click sick people <span role="img" aria-label="sick person emoji">🤢</span> before they become terminal <span role="img" aria-label="terminal person emoji">😵</span> to quarantine them <span role="img" aria-label="quarantined person emoji">🤒</span> for recovery.</h6>
    <p><Link to="/superheros"><button className='superherosButton'><i>See Top Superheros</i></button></Link>
            <button className='playButton' onClick={props.startGameButton}><i>Start Game - Save the world!</i> <span role="img" aria-label="saved person emoji">🥰</span></button>
    <Link to="/score"><button className='scoreButton'><i>Save Your Score</i></button></Link></p>
</div>

export default Header