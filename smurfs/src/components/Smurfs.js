import React from 'react'
import { connect } from "react-redux";

import Smurf from './Smurf'

function Smurfs({ smurfs }) {

    const smurfList = smurfs.map(item => <Smurf key={item.id} />)

    return (
        <div>
            {smurfList.length > 0 ? smurfList : <h2>Loading...</h2>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(Smurfs)