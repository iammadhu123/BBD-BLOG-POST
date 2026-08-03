import React, { useState } from 'react'
import "./contact.css"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';



export const Contact = () => {
    const [data, setData] = useState({
        f_name: '',
        l_name: '',
        email_id: '',
        mobile_number: '',
        message: ''

    })
    const [message, setMessage] = useState(false)

    const handler = (event) => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
        const { name, value } = event.target;  // ? detsructing
        // console.log(name + " " + value);

        setData({ ...data, [name]: value })
    }

    const saveFormData = (e) => {
        e.preventDefault()
        console.log(data);   // Full Stack Developer ( Data send to backend )
        axios.post("http://localhost:3004/contact", data)
            .then((res) => {
                // console.log(res);
                if (res.status === 201) {
                    // setMessage("Request send succesfully !")
                    toast.success("Request send succesfully !")
                }

            })

    }
    return (
        <div className="container" style={{ marginTop: "1%" }}>
            <div className="row">
                <div className="col-md-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.511767716616!2d81.05652807531335!3d26.88724876118471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be20980ffbb15%3A0x33192d2892e02600!2sBBD%20University%20H-Block!5e0!3m2!1sen!2sin!4v1783917097370!5m2!1sen!2sin" style={{ border: "0", width: "100%", height: "300px" }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>
            <div className="row" style={{ marginTop: "5%" }}>
                <Toaster />
                <div className="col-md-4">
                    <img src="gallery/con.jpg" alt="" className='my_img' />
                </div>
                <div className="col-md-8">
                    <div className="my_title">Get in touch</div>
                    {/* {
                        message ? (
                            <div className='alert alert-success'>{message}</div>
                        ) : ("")
                    } */}
                    <form action="" onSubmit={saveFormData}>
                        <div className="row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    name='f_name'
                                    onChange={handler}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                    name='l_name'
                                    onChange={handler}
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
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Mobile Number"
                                    name='mobile_number'
                                    onChange={handler}
                                />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "2%" }}>
                            <div className="col">
                                <textarea name='message'
                                    onChange={handler} placeholder='message' className='form-control' style={{ height: "90px" }} id=""></textarea>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "2%" }}>
                            <div className="col">
                                <input type="submit" value="Send Message" className='btn btn-primary' />
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}
