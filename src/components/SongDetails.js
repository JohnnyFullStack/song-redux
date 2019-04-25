import React from 'react'
import { connect } from 'react-redux'

function SongDetails(props){
    if (!props.selectedSong){
        return <div>Please select a song</div>
    }
    return(
        <div>
            <h1>{props.selectedSong.title}</h1>
            <div>{props.selectedSong.duration}</div>
        </div>
    )
}

const mapStateToProps = state =>{
    return(
        {selectedSong:state.selectedSong}
    )
}

export default connect(mapStateToProps)(SongDetails)