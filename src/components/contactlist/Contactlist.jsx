import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'



export const Contactlist = () => {

    const [record, setRecord] = useState([])
    // const [color, setColor] = useState("Red")
    // const [course, setCourse] = useState("Python")

    const getAllData = () => {
        axios.get("http://localhost:3004/contact")
            .then((res) => {
                // console.log(res);
                console.log(res.data);
                setRecord(res.data)
            })
    }
    useEffect(() => {

        // console.log("use Effcet");
        getAllData()

    }, [])


    // const colorChnage = () => {
    //     setColor("Blue")
    // }

    // const chnagecOurse = () => {
    //     setCourse("javasCript")
    // }

    const deleteData = (id) => {
        // alert(id)
        // axios.delete("http://localhost:3004/contact/" + id)
        //     .then((response) => {
        //         console.log(response);
        //         if (response.status === 200) {
        //             getAllData()
        //         }

        //     })
        Swal.fire({
            title: "Are you sure want to delete this is " + id + " ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("http://localhost:3004/contact/" + id)
                    .then((response) => {
                        console.log(response);
                        if (response.status === 200) {
                            getAllData()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }


                    })

            }


        });
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <br />
                    <Link to="/contact-us" className='btn btn-success'>Add Contact</Link>
                    <br />
                    <div className="my_title">
                        Contact List
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>LAST Name</th>
                                <th>Email Id</th>
                                <th>Mobile Number</th>
                                <th>Message</th>
                                <th>Acctions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                record.map((item, index) =>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.f_name}</td>
                                        <td>{item.l_name}</td>
                                        <td>{item.email_id}</td>
                                        <td>{item.mobile_number}</td>
                                        <td>{item.message}</td>
                                        <td>
                                            {/* <input type="submit" value="Edit" className='btn btn-primary' />&nbsp; */}
                                            <Link to={`/edit/${item.id}`} className='btn btn-success'>Edit</Link>&nbsp;&nbsp;
                                            {/* <input type="submit" value="Delete" className='btn btn-danger' /> */}
                                            <a href="#" className='btn btn-danger' onClick={() => { deleteData(item.id) }}>Delete</a>
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>

    )
}
