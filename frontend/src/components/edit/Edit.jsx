import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'




export const Edit = () => {
    const [state, setState] = useState({
        f_name: '',
        l_name: '',
        email_id: '',
        mobile_number: '',
        message: ''

    })
    const { id } = useParams()

    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3004/contact/" + id)
            .then((res) => {
                // console.log(res);
                setState(res.data)

            })

    }, [])

    const updateFormData = (e) => {
        e.preventDefault()
        // console.log(state);
        axios.put("http://localhost:3004/contact/" + id, state)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    navigate("/contact-list")
                }

            })


    }

    const handler = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })

    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="my_title">
                            Update Data
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form action="" onSubmit={updateFormData}>
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First name"
                                        name='f_name'
                                        onChange={handler}
                                        value={state.f_name}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last name"
                                        name='l_name'
                                        onChange={handler}
                                        value={state.l_name}
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "2%" }}>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email Id"
                                        name='email_id'
                                        onChange={handler}
                                        value={state.email_id}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Mobile Number"
                                        name='mobile_number'
                                        onChange={handler}
                                        value={state.mobile_number}
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "2%" }}>
                                <div className="col">
                                    <textarea name='message'
                                        onChange={handler} value={state.message} placeholder='message' className='form-control' style={{ height: "90px" }} id=""></textarea>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "2%" }}>
                                <div className="col">
                                    <input type="submit" value="Update" className='btn btn-primary' />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}
