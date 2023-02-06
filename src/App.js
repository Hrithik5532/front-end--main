
import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import ProfileDetails from "./sub-components/ProfileDetails";
import NextofKeens from "./sub-components/NextofKeens";
import PassportDetails from "./sub-components/PassportDetails";
import SeamenBook from "./sub-components/SeamenBook";
import AcademicQualifications from "./sub-components/AcademicQualifications";
import CertificateOfCompetancy from "./sub-components/CertificateOfCompetancy";
import StcwOtherCertificates from "./sub-components/StcwOtherCertificates";
import Refrences from "./sub-components/Refrences";
import HowKnowUs from "./sub-components/HowKnowUs";
import PersonalDetails from "./sub-components/PersonalDetails";
import AdditionalDetails from "./sub-components/AdditionalDetails";
import ReasonOfApplication from "./sub-components/ReasonOfApplication";
import SeaExperience from "./sub-components/SeaExperience";
import OnShoreService from "./sub-components/OnShoreService";
import Declaration from "./sub-components/Declaration";
import Admin from "./components/Admin";
import EditPage from "./components/EditPage";
import ProfileDetailsAdmin from "./admin-components/ProfileDetailsAdmin";
import NextOfKinsAdmin from "./admin-components/NextOfKinsAdmin";
import PassportDetailsAdmin from "./admin-components/PassportDetailsAdmin";
import SeamenBookAdmin from "./admin-components/SeamenBookAdmin";
import AcademicQualificationsAdmin from "./admin-components/AcademicQualificationsAdmin";
import CertificateOfCompetancyAdmin from "./admin-components/CertificateOfCompetancyAdmin";
import StcwOtherCertificatesAdmin from "./admin-components/StcwOtherCertificatesAdmin";
import RefrencesAdmin from "./admin-components/RefrencesAdmin";
import HowKnowUsAdmin from "./admin-components/HowKnowUsAdmin";
import PersonalDetailsAdmin from "./admin-components/PersonalDetailsAdmin";
import AdditionalDetailsAdmin from "./admin-components/AdditionalDetailsAdmin";
import ReasonOfApplicationAdmin from "./admin-components/ReasonOfApplicationAdmin";
import SeaExperienceAdmin from "./admin-components/SeaExperienceAdmin";
import OnShoreServiceAdmin from "./admin-components/OnShoreServiceAdmin";
import DeclarationAdmin from "./admin-components/DeclarationAdmin";
function App() {

    const [inputs, setInputs] = useState({
        rank_applied: "",
        present_rank: "",
        first_name: "",
        last_name: "",
        middle_name:"",
        kin_array: [],
        on_shore: [],
        special_experience: [],
        company_presentation: "No",
        marine_club: "No",
        marine_magzine: "No",
        newspaper_advertisement: "No",
        told_by_seagoing_friend: "No",
        direct_mail: "No",
        others_advert: "No",
        nationality: "India",
        smoker: "No",
        maritial_status: "Single",
        ever_bonded: "No",
        crime_convicted: "No",
        ship_accident: "No",
        certificate_suspended: "No",
        may_approach_employer: "No",
        health_affected_by_climate: "No",
        defect_in_speech: "No",
        defect_in_vision:"No",
        defect_in_hearing: "No",
        any_major_surgery: "No",
        applied_before: "No"
    });
    const [inputs1, setInputs1] = useState({
        kin_array: [],
        on_shore: [],
        special_experience: [],
        company_presentation: "No",
        marine_club: "No",
        marine_magzine: "No",
        newspaper_advertisement: "No",
        told_by_seagoing_friend: "No",
        direct_mail: "No",
        others_advert: "No",
        nationality: "India",
        smoker: "No",
        maritial_status: "Single",
        ever_bonded: "No",
        crime_convicted: "No",
        ship_accident: "No",
        certificate_suspended: "No",
        may_approach_employer: "No",
        health_affected_by_climate: "No",
        defect_in_speech: "No",
        defect_in_vision: "No",
        defect_in_hearing: "No",
        any_major_surgery: "No",
        applied_before: "No"
          
    });
    return (
        <Router>
            <div className="App">
                <Navbar />
                
                    


                            <Routes>
                                <Route exact path="/" element={<ProfileDetails setInputs={setInputs} inputs={inputs} />} />
                                <Route exact path="/dependents" element={<NextofKeens setInputs={setInputs} inputs={inputs} />} />
                                <Route exact path="/passport" element={<PassportDetails setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/seamenbook" element={<SeamenBook setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/academicQualifications" element={<AcademicQualifications setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/certificateofcompetency" element={<CertificateOfCompetancy setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/stcwandothercertificates" element={<StcwOtherCertificates setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/refrences" element={<Refrences setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/howyouknowus" element={<HowKnowUs setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/personaldetails" element={<PersonalDetails setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/additionalinformation" element={<AdditionalDetails setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/reasonofapplication" element={<ReasonOfApplication setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/seaexperience" element={<SeaExperience setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/onshoreservice" element={<OnShoreService setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/declaration" element={<Declaration setInputs={setInputs} inputs={inputs}/>} />
                                {/* admin starts */}
                                <Route exact path="/admin/edit" element={<EditPage setInputs={setInputs1} inputs={inputs1}/>} />
                                <Route exact path="/admin" element={<Admin setInputs={setInputs1} inputs={inputs1}/>}/>
                                <Route exact path="/admin/edit/profile" element={<ProfileDetailsAdmin setInputs={setInputs1} inputs={inputs1} />} />
                                <Route exact path="/admin/edit/profile/:id" element={<ProfileDetailsAdmin setInputs={setInputs1} inputs={inputs1} />} />

                                <Route exact path="/admin/edit/dependents" element={<NextOfKinsAdmin  setInputs={setInputs1} inputs={inputs1}/>} />
                                <Route exact path="/admin/edit/passport" element={<PassportDetailsAdmin setInputs={setInputs1} inputs={inputs1}/>} />
                                <Route exact path="/admin/edit/seamenbook" element={<SeamenBookAdmin setInputs={setInputs1} inputs={inputs1} />} />
                                <Route exact path="/admin/edit/academicQualifications" element={<AcademicQualificationsAdmin setInputs={setInputs1} inputs={inputs1}/>} />
                                <Route exact path="/admin/edit/certificateofcompetency" element={<CertificateOfCompetancyAdmin setInputs={setInputs1} inputs={inputs1}/>} />
                                <Route exact path="/admin/edit/stcwandothercertificates" element={<StcwOtherCertificatesAdmin setInputs={setInputs1} inputs={inputs1}/>} />
                                <Route exact path="/admin/edit/refrences" element={<RefrencesAdmin setInputs={setInputs1} inputs={inputs1}/>} />
                                <Route exact path="/admin/edit/howyouknowus" element={<HowKnowUsAdmin setInputs={setInputs1} inputs={inputs1}/>}  />
                                <Route exact path="/admin/edit/personaldetails" element={<PersonalDetailsAdmin setInputs={setInputs1} inputs={inputs1}/>} />
                                <Route exact path="/admin/edit/additionalinformation" element={<AdditionalDetailsAdmin setInputs={setInputs1} inputs={inputs1}/>} />
                                <Route exact path="/admin/edit/reasonofapplication" element={<ReasonOfApplicationAdmin setInputs={setInputs1} inputs={inputs1}/>} />
                                <Route exact path="/admin/edit/seaexperience" element={<SeaExperienceAdmin setInputs={setInputs1} inputs={inputs1}/>} />
                                <Route exact path="/admin/edit/onshoreservice" element={<OnShoreServiceAdmin setInputs={setInputs1} inputs={inputs1}/>} />
                                <Route exact path="/admin/edit/declaration/:id" element={<DeclarationAdmin setInputs={setInputs1} inputs={inputs1}/>} />
                                <Route exact path="/admin/edit/declaration/:id" element={<DeclarationAdmin setInputs={setInputs1} inputs={inputs1}/>} />
                            </Routes>


            </div>
        </Router>
    );
}

export default App;
