import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

function SongList(props){
    return(
        <div className="ui relaxed divided list">           
                {props.songs.map(song=>{
                    return(
                        <div className='item' key={song.title}>
                            <div className='content'>
                                {song.title}
                                <button 
                                className='ui primary right floated button'
                                onClick={()=>props.selectSong(song)}
                                >select</button>
                            </div>
                            <div className='content'>{song.duration}</div>       
                        </div>
                    )
                })}
        </div>        
    )
}

const mapStateToProps = state =>{
    console.log(state)
    return {songs: state.songs}
}

export default connect(mapStateToProps,{selectSong})(SongList)