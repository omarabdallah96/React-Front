
import React from "react";
import { Switch, Route ,Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Create_Admin from "../Pages/Admin_Panel/Manage_Admin/Create_Admin";
import List_Admin from "../Pages/Admin_Panel/Manage_Admin/List_Admin";
import Edit_Admin from "../Pages/Admin_Panel/Manage_Admin/Edit_Admin";
import Edit_Student from "../Pages/Admin_Panel/Manage_Student/Edit_Student";
import List_Student from "../Pages/Admin_Panel/Manage_Student/List_Student";
import "./Sidebar.css";



import Create_Student from "../Pages/Admin_Panel/Manage_Student/Create_Student";



export default function Routes() {
  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");
  let searchBtn = document.querySelector(".bx-search");

  btn.onclick = function() {
    sidebar.classList.toggle("active");
  }
  searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
  }
 

  return (


    <div>
            <div className="sidebar">
              <div className="logo_content">
                <div className="logo">
                  <i className="bx bxl-c-plus-plus" />
                  <div className="logo_name">CodingLab</div>
                </div>
                <i className="bx bx-menu" id="btn" />
              </div>
              <ul className="nav_list">
                <li>
                  <i className="bx bx-search" />
                  <input type="text" placeholder="Search..." />
                  <span className="tooltip">Search</span>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-grid-alt" />
                    <span className="links_name">Dashboard</span>
                  </a>
                  <span className="tooltip">Dashboard</span>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-user" />
                    <span className="links_name">User</span>
                  </a>
                  <span className="tooltip">User</span>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-chat" />
                    <span className="links_name">Messages</span>
                  </a>
                  <span className="tooltip">Messages</span>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-pie-chart-alt-2" />
                    <span className="links_name">Analytics</span>
                  </a>
                  <span className="tooltip">Analytics</span>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-folder" />
                    <span className="links_name">File Manager</span>
                  </a>
                  <span className="tooltip">Files</span>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-cart-alt" />
                    <span className="links_name">Order</span>
                  </a>
                  <span className="tooltip">Order</span>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-heart" />
                    <span className="links_name">Saved</span>
                  </a>
                  <span className="tooltip">Saved</span>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-cog" />
                    <span className="links_name">Setting</span>
                  </a>
                  <span className="tooltip">Setting</span>
                </li>
              </ul>
              <div className="profile_content">
                <div className="profile">
                  <div className="profile_details">
                    <img src="profile.jpg" alt="" />
                    <div className="name_job">
                      <div className="name">Prem Shahi</div>
                      <div className="job">Web Designer</div>
                    </div>
                  </div>
                  <i className="bx bx-log-out" id="log_out" />
                </div>
              </div>
            </div>
            <div className="home_content">
            <Switch>
          <Route exact path="/admin/create" component={Create_Admin} />
          <Route exact path="/admin" component={List_Admin} />
          <Route exact path="/admin/edit/:id" component={Edit_Admin} />
          <Route exact path="/student" component={List_Student} />
          <Route exact path="/student/create" component={Create_Student} />


          <Route exact path="/student/edit/:id" component={Edit_Student} />

        </Switch>
     
            </div>
          </div>
         
 
      
  );
}
