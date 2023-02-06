import React from "react";

import { NavLink } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <div>
      <div>
        <form className="top-sticky">
          <div className="d-flex ms-3 flex-row-reverse">
            <div className="aside-tabs">
              <div
                className="nav flex-column nav-pills m-3 aside-tabs-scrolled"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <NavLink to={`/admin/edit/profile/${localStorage.getItem("marine_form_id")}`} className="newbtn nav-link">Profile Details</NavLink>
                <NavLink to={"/admin/edit/dependents"} className="newbtn nav-link">
                  Next of kin / Dependents
                </NavLink>
                <NavLink to={"/admin/edit/passport"} className="newbtn nav-link">Passport details</NavLink>
                <NavLink to={"/admin/edit/seamenbook"} className="newbtn nav-link">
                  Continuous Discharge Certificate / Seamen Book
                </NavLink>
                <NavLink to={"/admin/edit/academicQualifications"} className="newbtn nav-link">
                  Academic qualifications
                </NavLink>
                <NavLink to={"/admin/edit/certificateofcompetency"} className="newbtn nav-link">
                  Licene / certificate of competency
                </NavLink>
                <NavLink to={"/admin/edit/stcwandothercertificates"} className="newbtn nav-link">
                  STCW and other certificate
                </NavLink>
                <NavLink to={"/admin/edit/refrences"} className="newbtn nav-link">References</NavLink>
                <NavLink to={"/admin/edit/howyouknowus"} className="newbtn nav-link">
                  How did you come to know about us?
                </NavLink>
                <NavLink to={"/admin/edit/personaldetails"} className="newbtn nav-link">
                  Personal details
                </NavLink>
                <NavLink to={"/admin/edit/additionalinformation"} className="newbtn nav-link">
                  Additional Information
                </NavLink>
                <NavLink to={"/admin/edit/reasonofapplication"} className="newbtn nav-link">
                  Reason for Application
                </NavLink>
                <NavLink to={"/admin/edit/seaexperience"} className="newbtn nav-link">
                  SEA EXPERIENCE:
                  <small>(Most recent at Top)Special Experience:</small>
                </NavLink>
                <NavLink to={"/admin/edit/onshoreservice"} className="newbtn nav-link">
                  On-Shore Service
                </NavLink>
                <NavLink to={"/admin/edit/declaration"} className="newbtn nav-link">Declaration</NavLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SidebarAdmin;
