import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Addblog = () => {
  const [blog, setBlog] = useState({
    catename: "",
    blogtitle: "",
    blogauthor: "",
    blogdescription: "",
    images: "",
  });
  const [cate, setCate] = useState([]);

  const handler = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };
  const saveBlog = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("catename", blog.catename);
      formData.append("blogtitle", blog.blogtitle);
      formData.append("blogauthor", blog.blogauthor);
      formData.append("blogdescription", blog.blogdescription);
      if (blog.images) formData.append("images", blog.images); // field = images
      console.log(blog);

      // const res = await axios.post("http://localhost:3004/api/blog", formData)
      // console.log(res);
      const token = localStorage.getItem("authToken");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/blog`, // correct route
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // send JWT
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (res.status === 201 || res.data.success === true) {
        toast.success(res.data.msg);
        setBlog({
          catename: "",
          blogtitle: "",
          blogauthor: "",
          blogdescription: "",
          images: "",
        });
      }
    } catch (err) {
      console.log(err.response?.data || err.message);
      toast.error(err.response?.data?.msg || "Upload Failed");
    }
  };

  const getAllCategoery = async () => {
    try {
      const catRes = await axios.get(`${import.meta.env.VITE_API_URL}/api/categories`);
      // console.log(catRes);
      setCate(catRes.data.categories);
    } catch (err) {
      console.error(err);
    }
  };
  const uploadData = (e) => {
    console.log(e.target.files);

    setBlog({ ...blog, images: e.target.files[0] }); // <-- fixed setBlog
  };

  useEffect(() => {
    getAllCategoery();
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-header bg-primary text-white text-center py-4 rounded-top-4">
              <h2 className="mb-1 fw-bold">Add New Blog Post</h2>
              <p className="mb-0">Publish your latest article</p>
            </div>
            <div className="card-body p-5">
              <Toaster />
              <form onSubmit={saveBlog} encType="multipart/form-data">
                {/* Category */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Blog Category
                  </label>
                  <select
                    className="form-select form-select-lg"
                    name="catename"
                    value={blog.catename}
                    onChange={handler}
                  >
                    <option value="">Select Category</option>
                    {cate.map((c, index) => (
                      <option key={index} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Blog Title */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Blog Title</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Blog Title"
                    name="blogtitle"
                    onChange={handler}
                  />
                </div>
                {/* Author */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Author Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Author Name"
                    name="blogauthor"
                    onChange={handler}
                  />
                </div>
                {/* Image */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Featured Image
                  </label>
                  <input
                    type="file"
                    className="form-control form-control-lg"
                    onChange={uploadData}
                  />
                </div>
                {/* Description */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Blog Description
                  </label>
                  <textarea
                    className="form-control"
                    style={{ height: "120px" }}
                    placeholder="Write your blog here..."
                    defaultValue={""}
                    name="blogdescription"
                    onChange={handler}
                  />
                </div>
                {/* Buttons */}
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary btn-lg px-5">
                    Publish Blog
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
