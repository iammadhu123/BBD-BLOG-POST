import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import toast, { Toaster } from "react-hot-toast";

export const Blogdetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comment, setComment] = useState({
    username: "",
    commnettext: "",
  });
  const [commentdata, setCommentdata] = useState([]);

  const getDataById = async () => {
    // alert(c_name)
    try {
      const cateRes = await axios.get(`${BASE_URL}/api/cate-blog/${id}`);
      console.log(cateRes);
      setData(cateRes.data.cateresponse);
    } catch (err) {
      console.log(err);
    }
  };
  const getAllCommentsData = async () => {
    try {
      const commentRes = await axios.get(`${BASE_URL}/api/comment/` + id);
      console.log(commentRes);
      setCommentdata(commentRes.data.record);
    } catch (err) {
      console.log(err);
    }
  };

  const handler = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };
  const postComment = async (e) => {
    try {
      e.preventDefault();
      console.log(comment);
      const res = await axios.post(`${BASE_URL}/api/comment/` + id, comment);
      console.log(res);
      if (res.data.success === true || res.status === 201) {
        toast.success(res.data.msg);
      }
      getAllCommentsData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.scroll(1, 1);
    getDataById();
    getAllCommentsData();
  }, []);
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "2%" }}>
        <div className="row">
          <div className="col-md-1">
            <Toaster />
          </div>
          <div className="col-md-6">
            <div>
              {/* <img src={`${BASE_URL}/uploads/${data?.images}`} className='blog_details_imges' alt="" /> */}
              <img
                src={data?.images}
                className="blog_details_imges"
                alt="Blog Image"
              />
            </div>
            <p
              style={{
                textAlign: "justify",
                marginTop: "2%",
                fontSize: "20px",
              }}
            >
              {data?.blogdescription}
            </p>
            <p style={{ marginTop: "2%", fontSize: "20px" }}>
              <b>Author : </b>
              {data?.blogauthor}{" "}
              <span style={{ float: "right" }}>
                {" "}
                <b>Published date : {data?.createdAt}</b>
              </span>
            </p>

            <div className="container-fluid my-5">
              <div className="row">
                <div className="card shadow border-0">
                  <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Leave a Comment</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={postComment}>
                      {/* Name */}
                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your name"
                          name="username"
                          onChange={handler}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Comment
                        </label>
                        <textarea
                          className="form-control"
                          rows={5}
                          style={{ height: "150px" }}
                          placeholder="Write your comment here..."
                          defaultValue={""}
                          name="commnettext"
                          onChange={handler}
                        />
                      </div>
                      {/* Buttons */}
                      <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-primary px-4">
                          Post Comment
                        </button>
                        <button type="reset" className="btn btn-secondary px-4">
                          Reset
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid py-5">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <h3 className="mb-4 text-center">Comments</h3>
                  {commentdata.map((comment, index) => (
                    <div className="card shadow-sm border-0 rounded-4 mb-3">
                      <div className="card-body">
                        <div className="d-flex align-items-start">
                          {/* Comment Details */}
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h6
                                  className="mb-0 fw-bold"
                                  style={{ textTransform: "capitalize" }}
                                >
                                  {comment.username}
                                </h6>
                                <small className="text-muted">
                                  {comment.createdAt}
                                </small>
                              </div>
                              {/* <button className="btn btn-sm btn-outline-primary">
                                                                    Reply
                                                                </button> */}
                            </div>
                            <p className="mt-3 mb-0">{comment.commenttext}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5"></div>
        </div>
      </div>
    </>
  );
};
