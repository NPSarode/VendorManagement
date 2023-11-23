import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewProfile = (props) => {
  const { id } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    props.setTitle('Vendor Profile')

    props.users.forEach((ele) => {
      if (id === ele.code) {
        setData(ele)
      }
    })
  }, [])
  return (
    <div id='myProfile'>
      <div className='details'>
        {/* <div className='profileImage'>
          <img src={profile}></img>
        </div> */}
        <div className='profileDetails'>
          <div>Code : {data.code} </div>
          <div>Name : {data.name} </div>
          <div>Contact : {data.contact} </div>
          <div>Address : {data.address} </div>
          <div>Details : {data.detail} </div>
        </div>
        <div className='my-3' style={{"marginLeft":"30px"}}>
          <Link to={'/addupdate/'+data.code}><button type="button" className="btn btn-danger">Update Vendor</button></Link>
        </div>
      </div>

        <div className='performance'></div>
    </div>
  )
}

export default ViewProfile
