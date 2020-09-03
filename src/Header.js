import React from 'react'
import logo from './SickSims-Logo.png'

const Header = () => 
<div>
    <div className='logo' align='center'>
        <img src={logo} alt="SickSims Logo" className="logo" background-color="transparent"></img>
    </div>
    <div className='gameDirections'>

        <h6 className='desktop-only'><span className='emphasizedText'>Click</span> naive people<span role="img" aria-label="naive person emoji">🥴</span> to make them safe <span role="img" aria-label="safe person emoji">😷</span> before they become sick <span role="img" aria-label="sick person emoji">🤢</span> <br></br> <span className='emphasizedText'>Drag & Drop</span> sick people <span role="img" aria-label="sick person emoji">🤢</span> into quarantine for recovery <span role="img" aria-label="quarantined person emoji">🤒</span> before they become terminal <span role="img" aria-label="terminal person emoji">😵</span></h6>

        <h6 className='mobile-only'><span className='emphasizedText'>Click</span> naive people<span role="img" aria-label="naive person emoji">🥴</span> to make them safe <span role="img" aria-label="safe person emoji">😷</span> before they become sick <span role="img" aria-label="sick person emoji">🤢</span>. <br></br> <span className='emphasizedText'>Click</span> sick people <span role="img" aria-label="sick person emoji">🤢</span> to quarantine them for recovery <span role="img" aria-label="quarantined person emoji">🤒</span> before they become terminal <span role="img" aria-label="terminal person emoji">😵</span>.</h6>

    </div>
</div>

export default Header