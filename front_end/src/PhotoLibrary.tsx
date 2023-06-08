import React from 'react';
import Library from './components/Delete';
function PhotoLibrary() {

  return (
    <div>
        <h1>PhotoLibrary</h1>
        <Library id={0} setUpdateName={function (value: React.SetStateAction<boolean>): void {
        throw new Error('Function not implemented.');
      } }/>
    </div>
  )
}

export default PhotoLibrary;