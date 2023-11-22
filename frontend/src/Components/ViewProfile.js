import React from 'react'
import profile from '../AssetStorage/Profile.png'

const ViewProfile = () => {
  return (
    <div id='myProfile'>
        <div className='profileImage'>
            <img src={profile}></img>
        </div>
    </div>
  )
}

export default ViewProfile
