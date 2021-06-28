import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Style.css"

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';



function Edit_student() {
  const [student, setstudent] = useState([]);

  const { id } = useParams();
  const id_student = id;

  const get_student = async () => {
    try {
      const data = await axios.get(
        `http://localhost:8000/api/student/${id_student}`
      );
      setstudent(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    get_student();
  }, []);

  return (
   
    <div className="container">
    <div className="main-body">
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
              {/* <img src={`http://localhost:8000/storage/uploads/${student.photo}`} /> */}

                <img src={`http://localhost:8000/storage/uploads/${student.photo}`}  alt="Admin" className="rounded-circle p-1 bg-primary" width={110} />
                <div className="mt-3">
                  <h4>{student.fname} {student.lname}</h4>
                  <p className="text-secondary mb-1">Full Stack Developer</p>
                  <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                 
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Fisrt name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input type="text" className="form-control" defaultValue={student.fname} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input type="text" className="form-control" defaultValue={student.middlename} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input type="text" className="form-control" defaultValue="(239) 816-9029" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Mobile</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input type="text" className="form-control" defaultValue="(320) 380-4539" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input type="text" className="form-control" defaultValue="Bay Area, San Francisco, CA" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3" />
                <div className="col-sm-9 text-secondary">
                  <input type="button" className="btn btn-primary px-4" defaultValue="Save Changes" />
                </div>
              </div>
            </div>
          </div>
     
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Edit_student;
