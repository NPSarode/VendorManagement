import React from 'react'
import edit from '../AssetStorage/edit.svg'
import view from '../AssetStorage/view.svg'
import { Link, useNavigate } from 'react-router-dom'

const AllVendors = (props) => {
    const navigate = useNavigate()

    const addVendor = () => {
        props.setTitle("Add Vender")
        navigate('/addupdate')
    }
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
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td><img src={edit}></img></td>
                        <td><img src={view}></img></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td><img src={edit}></img></td>
                        <td><img src={view}></img></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td><img src={edit}></img></td>
                        <td><img src={view}></img></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td><img src={edit}></img></td>
                        <td><img src={view}></img></td>
                    </tr>
                </tbody>
            </table>
            <button type="button" onClick={addVendor} class="btn btn-danger">Add Vendor+ </button>
        </div>
        </>
    )
}

export default AllVendors
