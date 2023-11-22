import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Form = (props) => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [data, setData] = useState({})
 
    const sendHandle = () => {
        props.setTitle("All Venders")
        props.setUsers([...props.users, data])
        navigate('/')
    }

    const changeHandle = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        console.log(id)
        if(id != -1) {
            props.users.map(function (ele) {
                console.log("ele.contact.slice(0,3)", ele.contact.slice(0,3))
                if(id == ele.contact.slice(0,3)) {
                    setData(ele);
                }
            })
        }
    },[])

    return (
        <div id='myForm'>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" value={data.name} onChange={changeHandle} name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contact</label>
                    <input type="number" value={data.contact} onChange={changeHandle} name='contact' className="form-control" id="exampleInputPassword1" placeholder="Enter contact" required/>
                </div>  
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Detail</label>
                    <input type="text" value={data.detail} onChange={changeHandle} name='detail' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter details" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Address</label>
                    <input type="text" value={data.address} onChange={changeHandle} name='address' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address" required/>
                </div>
                <div className='my-3'>
                    <button type="button" onClick={sendHandle} className="btn btn-danger">{props.isEdit?'Update':'Add'}</button>
                </div>
            </form>
        </div>
    )
}

export default Form
