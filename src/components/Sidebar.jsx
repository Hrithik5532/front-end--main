import React from 'react';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
        <div>
                    <form className="top-sticky"  >
                        <div className="d-flex  flex-row-reverse">
                            <div className="aside-tabs">
                                <div className="nav flex-column nav-pills m-3 aside-tabs-scrolled" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <NavLink to={'/'} className="newbtn nav-link">Profile Details</NavLink>
                                    <NavLink to={'/dependents'} className="newbtn nav-link">Next of kin /
                                        Dependents</NavLink>
                                    <NavLink to={'/passport'} className="newbtn nav-link">Passport details</NavLink>
                                    <NavLink to={'/seamenbook'} className="newbtn nav-link">Continuous Discharge Certificate / Seamen
                                        Book</NavLink>
                                    <NavLink to={'/academicQualifications'} className="newbtn nav-link">Academic
                                        qualifications</NavLink>
                                    <NavLink to={'/certificateofcompetency'} className="newbtn nav-link">Licene / certificate of competency</NavLink>
                                    <NavLink to={'/stcwandothercertificates'} className="newbtn nav-link">STCW and other
                                        certificate</NavLink>
                                    <NavLink to={'/refrences'} className="newbtn nav-link">References</NavLink>
                                    <NavLink to={'/howyouknowus'} className="newbtn nav-link">How did you come to
                                        know about us?</NavLink>
                                    <NavLink to={'/personaldetails'} className="newbtn nav-link">Personal details</NavLink>
                                    <NavLink to={'/additionalinformation'} className="newbtn nav-link">Additional
                                        Information</NavLink>
                                    <NavLink to={'/reasonofapplication'} className="newbtn nav-link">Reason for Application</NavLink>
                                    <NavLink to={'/seaexperience'} className="newbtn nav-link">SEA
                                        EXPERIENCE:<small>(Most recent at
                                            Top)Special Experience:</small></NavLink>
                                    <NavLink to={'/onshoreservice'} className="newbtn nav-link">On-Shore
                                        Service</NavLink>
                                    <NavLink to={'/declaration'} className="newbtn nav-link">Declaration</NavLink>
                                </div>
                            </div>


                            

                        </div>
                    </form>
                </div>
    </div>
  )
}

export default Sidebar