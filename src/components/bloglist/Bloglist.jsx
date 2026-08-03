import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const BASE_URL = import.meta.env.VITE_BASE_URL;


export const Bloglist = () => {
    const [state, setState] = useState([])
    const navigate = useNavigate()

    const gelAllBlogList = async () => {
        try {
            // const blogRes = await axios.get("url")
            const token = localStorage.getItem("authToken");
            const res = await axios.get(`${BASE_URL}/api/blog-list`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(res);
            if (res.status === 201 || res.data.success === true) {
                setState(res.data.blogsdata)
            }
        }
        catch (err) {
            console.log(err);

        }
    }

    const goToAddBlog = () => {
        navigate("/add-blog")

    }

    const deleteBlog = async (id) => {
        // alert(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axios.delete(`${BASE_URL}/api/blog-delete/` + id)
                // console.log(res);
                if (res.status === 201 || res.success === true) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    gelAllBlogList()
                }




            }
        });
    }

    useEffect(() => {
        gelAllBlogList()

    }, [])
    return (
        <div className="container-fluid mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">Blog List</h4>
                    <button className="btn btn-light btn-sm" onClick={goToAddBlog}>+ Add Blog</button>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered align-middle text-center">
                            <thead className="table-dark">
                                <tr>

                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Blog Title</th>
                                    <th>Blog Author</th>
                                    <th>Blog Description</th>
                                    <th>Published Date</th>

                                    <th width={220}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.map((item, index) =>
                                        <tr>

                                            <td>
                                                <img
                                                    src={`${BASE_URL}/uploads/${item.images}`}
                                                    className="img-thumbnail"
                                                    width={70}
                                                />
                                            </td>
                                            <td>{item.catename}</td>
                                            <td>{item.blogtitle}</td>
                                            <td>{item.blogauthor}</td>
                                            <td>{item.blogdescription.slice(0, 40) + ' ....'}</td>
                                            <td>{item.createdAt}</td>

                                            <td>
                                                {/* <button className="btn btn-info btn-sm">View</button> */}
                                                <button className="btn btn-warning btn-sm">Edit</button> &nbsp;
                                                <a className="btn btn-danger btn-sm" href='#' onClick={() => { deleteBlog(item._id) }}>Delete</a>
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}
