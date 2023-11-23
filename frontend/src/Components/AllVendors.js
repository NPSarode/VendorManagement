import React, { useEffect } from 'react'
import edit from '../AssetStorage/edit.svg'
import view from '../AssetStorage/view.svg'
import delet from '../AssetStorage/delete.svg'
import { Link, useNavigate } from 'react-router-dom'

const AllVendors = (props) => {
    console.log(props.users)
    const navigate = useNavigate()

    const addVendor = () => {
        props.setIsEdit(false)
        navigate('/addupdate/'+-1)
    }

    // Deleting Vendor
    const deleteHandle = (code) => {
        props.setUsers(
            props.users.filter((ele) =>{
                if(ele.code !== code) {
                    return ele
                }
            })
        )
    }
    useEffect(()=>{
        props.setTitle("All Venders")
    },[])

    return (
        <>
        <div id='allVendorsDetail'>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Details</th>
                        <th scope="col">Address</th>
                        <th scope="col">Code</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(function(ele, index){
                       return <>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{ele.name}</td>
                            <td>{ele.contact}</td>
                            <td>{ele.detail}</td>
                            <td>{ele.address}</td>
                            <td>{ele.code}</td>
                            <td onClick={()=>{props.setIsEdit(true); props.setTitle('Edit Vendor')}}><Link to={'/addupdate/'+ele.code}><img src={edit}></img></Link></td>
                            <td onClick={()=>{deleteHandle(ele.code)}}><img src={delet}></img></td>
                            <td onClick={()=>{props.setTitle('Profile')}}><Link to={'/view/'+ele.code}><img src={view}></img></Link></td>
                        </tr>
                       </> 
                    })}
                    
                </tbody>
            </table>
            <button  type="button" onClick={addVendor} className="btn btn-danger">Add Vendor+ </button>
        </div>
        </>
    )
}

export default AllVendors
