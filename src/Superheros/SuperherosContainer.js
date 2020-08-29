import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSuperheros } from '../redux/actions'
import Superheros from './Superheros.js'
import SuperheroInput from './SuperheroInput.js'

class SuperherosContainer extends Component {

    // fetch superheros upon app load
    componentDidMount() {
        this.props.dispatchedFetchSuperheros()
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    // handle fetch of superheros upon app load with loading message if still loading
    handleLoading = () => {
        // console.log(this.props.loading)
        if (this.props.loading) {
            return <div>Loading...</div>
        } else {
            return <Superheros mappedSuperheros={this.props.mappedSuperheros} />
        }
    }

    render() {
        return (
            <div className="SuperherosContainer">
                <h4>Top Superheros:</h4>
                {this.handleLoading()}
            </div>
        )
    }
}

// can't just use destructured people anymore with superheros fetch
// const mapStateToProps = ({ people }) => ({ people })
const mapStateToProps = state => {
    return {
        mappedSuperheros: state.superheros,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchedFetchSuperheros: () => dispatch(fetchSuperheros())
})

export default connect(mapStateToProps, mapDispatchToProps)(SuperherosContainer)