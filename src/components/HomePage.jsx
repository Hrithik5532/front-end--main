import React from 'react'
import ProfileDetails from '../sub-components/ProfileDetails'
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    let navigate = useNavigate();
  return (
    // <div>
    //     <form className="top-sticky" action="{% url 'form_post'%}"  method="POST" >
    //         <div className="d-flex ms-3 py-3 flex-row-reverse">
    //             <div className="aside-tabs">
    //                 <div className="nav flex-column nav-pills m-3 aside-tabs-scrolled" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    //                     <button className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true" onclick={navigate('/profiledetails')}>Profile Details</button>
    //                     <button className="nav-link" id="dependents-tab" data-bs-toggle="pill" data-bs-target="#dependents" type="button" role="tab" aria-controls="dependents" aria-selected="false" onclick="topFunction()">Next of kin /
    //                         Dependents</button>
    //                     <button className="nav-link" id="passport-tab" data-bs-toggle="pill" data-bs-target="#passport" type="button" role="tab" aria-controls="passport" aria-selected="false" onclick="topFunction()">Passport details</button>
    //                     <button className="nav-link" id="seamen-tab" data-bs-toggle="pill" data-bs-target="#seamen" type="button" role="tab" aria-controls="seamen" aria-selected="false" onclick="topFunction()">Continuous Discharge Certificate / Seamen
    //                         Book</button>
    //                     <button className="nav-link" id="academic-tab" data-bs-toggle="pill" data-bs-target="#academic" type="button" role="tab" aria-controls="academic" aria-selected="false" onclick="topFunction()">Academic
    //                         qualifications</button>
    //                     <button className="nav-link" id="licence-tab" data-bs-toggle="pill" data-bs-target="#licence" type="button" role="tab" aria-controls="licence" aria-selected="false" onclick="topFunction()">Licene / certificate of competency</button>
    //                     <button className="nav-link" id="stcw-tab" data-bs-toggle="pill" data-bs-target="#stcw" type="button" role="tab" aria-controls="stcw" aria-selected="false" onclick="topFunction()">STCW and other
    //                         certificate</button>
    //                     <button className="nav-link" id="reference-tab" data-bs-toggle="pill" data-bs-target="#reference" type="button" role="tab" aria-controls="reference" aria-selected="false" onclick="topFunction()">References</button>
    //                     <button className="nav-link" id="how-tab" data-bs-toggle="pill" data-bs-target="#how" type="button" role="tab" aria-controls="how" aria-selected="false" onclick="topFunction()">How did you come to
    //                         know about us?</button>
    //                     <button className="nav-link" id="personal-tab" data-bs-toggle="pill" data-bs-target="#personal" type="button" role="tab" aria-controls="personal" aria-selected="false" onclick="topFunction()">Personal details</button>
    //                     <button className="nav-link" id="additional-tab" data-bs-toggle="pill" data-bs-target="#additional" type="button" role="tab" aria-controls="additional" aria-selected="false" onclick="topFunction()">Additional
    //                         Information</button>
    //                     <button className="nav-link" id="reason-tab" data-bs-toggle="pill" data-bs-target="#reason" type="button" role="tab" aria-controls="reason" aria-selected="false" onclick="topFunction()">Reason for Application</button>
    //                     <button className="nav-link" id="sea-tab" data-bs-toggle="pill" data-bs-target="#sea" type="button" role="tab" aria-controls="sea" aria-selected="false" onclick="topFunction()">SEA
    //                         EXPERIENCE:<small>(Most recent at
    //                             Top)Special Experience:</small></button>
    //                     <button className="nav-link" id="shore-tab" data-bs-toggle="pill" data-bs-target="#shore" type="button" role="tab" aria-controls="shore" aria-selected="false" onclick="topFunction()">On-Shore
    //                         Service</button>
    //                     <button className="nav-link" id="declaration-tab" data-bs-toggle="pill" data-bs-target="#declaration" type="button" role="tab" aria-controls="declaration" aria-selected="false" onclick="topFunction()">Declaration</button>
    //                 </div>
    //             </div>
                
    //             {/* Components Import Starts */}
    //                 <ProfileDetails/>
    //             {/* Components Import Ends */}
    //         </div>
    //     </form>
    // </div>
    <>
    </>
  )
}

export default HomePage