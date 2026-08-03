import axios from "axios";
import React, { useEffect, useState } from "react";
import "./dashobard.css";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Dashboard = () => {
  const [cate, setCate] = useState([]);

  const [blogdata, setBlogdata] = useState([]);
  const getAllCate = async () => {
    try {
      const catRes = await axios.get("http://localhost:3004/api/categories");
      setCate(catRes.data.categories);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllBlogData = async () => {
    try {
      const blogRes = await axios.get("http://localhost:3004/api/blog");
      // console.log(blogRes);
      setBlogdata(blogRes.data.record);
    } catch (err) {
      console.log(err);
    }
  };

  const getDataByCategory = async (c_name) => {
    // alert(c_name)
    try {
      const cateRes = await axios.get(
        "http://localhost:3004/api/blog/" + c_name,
      );
      console.log(cateRes);
      setBlogdata(cateRes.data.cateresponse);
    } catch (err) {}
  };
  useEffect(() => {
    getAllCate();
    getAllBlogData();
  }, []);
  return (
    <div className="container-fluid" style={{ marginTop: "2%" }}>
      <div className="row">
        <div className="col-md-3">
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">
              Categoery Name
            </li>
            {cate.map((c_name, index) => (
              <li className="list-group-item" key={index}>
                <a
                  href="#"
                  onClick={() => {
                    getDataByCategory(c_name);
                  }}
                  style={{ textDecoration: "none" }}
                >
                  {c_name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-9">
          <div className="container-fluid">
            <div className="row">
              {blogdata.length > 0 ? (
                <>
                  {blogdata.map((item, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="card blog-card">
                        <div className="position-relative">
                          {/* <img
                            src={`${BASE_URL}/uploads/${item.images}`}
                            className="card-img-top"
                            alt="Blog Image"
                        /> */}
                          <img
                            src={item.images}
                            className="card-img-top"
                            alt="Blog Image"
                          />
                          <span className="category">{item.catename}</span>
                        </div>
                        <div className="card-body">
                          <div className="blog-info mb-2">
                            <i className="bi bi-person-fill" />{" "}
                            {item.blogauthor} &nbsp;&nbsp;
                            <i className="bi bi-calendar-event" />{" "}
                            {item.createdAt}
                          </div>
                          <h4 className="card-title">{item.blogtitle}</h4>
                          <p className="card-text text-secondary">
                            {item.blogdescription.slice(0, 120) + "..."}
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            {/* <a href="#" className="btn btn-primary btn-read">
                                                        Read More
                                                    </a> */}
                            <Link
                              className="btn btn-primary btn-read"
                              to={`/blog-detail/${item._id}`}
                            >
                              Read More....
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div className="alert alert-info">Blog Not Found</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
