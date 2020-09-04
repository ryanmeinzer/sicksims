import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStats } from './redux/actions'

class FakeGameContainer extends Component {

    // fetch stats upon stats page load
    componentDidMount() {
        this.props.dispatchedFetchStats()
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div className="HomePSAContainer">
                <div className="FakeGameContainer">
                    <div className='FakeInPublicContainer'>
                        <h4>In Public</h4>
                        <span className='fakeGameEmojis' role='img' aria-label='naive person emoji'>🥴</span>
                        <span className='fakeGameEmojis' role='img' aria-label='sick person emoji'>🤢</span>
                        <span className='fakeGameEmojis' role='img' aria-label='naive person emoji'>🥴</span>
                        <span className='fakeGameEmojis' role='img' aria-label='naive person emoji'>🥴</span>
                        <span className='FakeSafePersonEmoji' role='img' aria-label='safe person emoji'>😷</span>
                        <span className='fakeGameEmojis' role='img' aria-label='sick person emoji'>🤢</span>
                        <span className='fakeGameEmojis' role='img' aria-label='naive person emoji'>🥴</span>
                        <span className='FakeSafePersonEmoji' role='img' aria-label='safe person emoji'>😷</span>
                        <span className='fakeGameEmojis' role='img' aria-label='sick person emoji'>🤢</span>
                    </div>

                    <div className='FakeQuarantinedContainer'>
                        <h4>Quarantined</h4>
                        <span className='FakeQuarantinedPersonEmoji' role='img' aria-label='quarantined person emoji'>🤒</span><span className='FakeQuarantinedPersonCountdown' role='img' aria-label='quarantined person countdown'> ▽ 8 </span>
                    </div>
                </div>
                <div className="HomePSAOverlay">
                    <div className="HomePSAOverlayText">
                        <p>
                            <span className='PointUpEmoji' role='img' aria-label='point up emoji'>☝️</span> Start the Game Above <span className='PointUpEmoji' role='img' aria-label='point up emoji'>☝️</span>
                        </p>
                        <p>
                            Unfortunately, this is just a game to create awareness and public safety. COVID-19 has devastated our world.
                        </p>
                        <p>
                            In fact, in the last 24 hours there have been <b>{parseInt(this.props.mappedStats.NewConfirmed).toLocaleString()}</b> new cases and <b>{parseInt(this.props.mappedStats.NewDeaths).toLocaleString()}</b> new deaths of COVID-19.
                        </p>
                        <p align='center'>
                            <i>Please wear masks and stay home in the hopes to get better if you are not feeling well!</i>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mappedStats: state.stats
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchedFetchStats: () => dispatch(fetchStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(FakeGameContainer)