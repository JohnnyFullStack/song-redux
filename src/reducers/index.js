import { combineReducers } from 'redux'

const songReducer = ()=>{
    return [
        {title:'hello',duration:'4:05'},
        {title:'hello1',duration:'3:05'},
        {title:'hello2',duration:'2:05'}, 
    ]
}

const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong
}

export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongReducer
})