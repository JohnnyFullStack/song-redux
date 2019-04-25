import React from 'react';
import SongList from './SongList'
import SongDetails from './SongDetails.js'

function App() {
  return (
    <div className='ui two column grid'>
        <div className='column'>
          <div className='ui segment'>
            <SongList />
          </div>
        </div>
          <div className="column">
            <div className="ui segment">
                <SongDetails />
            </div>
          </div>
    </div>
  )
}

export default App;
