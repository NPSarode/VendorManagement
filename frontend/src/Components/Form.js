import React from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
    const navigate = useNavigate();
 
    const sendHandle = () => {
        props.setTitle("All Venders")
        navigate('/')
    }
    return (
        <div id='myForm'>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contact</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter contact" />
                </div>  
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Detail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter details" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address" />
                </div>
                <div className='my-3'>
                    <button type="button" onClick={sendHandle} className="btn btn-danger">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form
