import React from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";

const ReasonOfApplication = ({ inputs, setInputs }) => {
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();
  //console.log(inputs);
  return (
    <div className="d-flex ms-3 py-3 flex-row-reverse">
      <Sidebar/>
      <div style={{ width: "100%" }}>
        <div class="rounded-5 shadow p-4 ">
          <div class="container-90 display form-heading ">
            <h4>REASON FOR APPLICATION </h4>
          </div>
          <table class="table table-bordered table-hover " id="tab_logic ">
            <tbody>
              <tr>
                <td>
                  <label>
                    State why you wish to leave your present employment
                  </label>
                </td>
                <td>
                  <input
                    value={inputs.leave_your_present_employment}
                    name="leave_your_present_employment"
                    onChange={(e) => onChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    You may add here anything further you wish to in support of
                    your application
                  </label>
                </td>
                <td>
                  <input
                    value={inputs.anything_further_support}
                    name="anything_further_support"
                    onChange={(e) => onChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    May we approach your present employer for a reference? If
                    yes give contact details.
                  </label>
                </td>
                <td>
                <select
                    value={inputs.may_approach_employer}
                    name="may_approach_employer"
                    onChange={(e) => onChange(e)}
                  >
                    <option value="No" selected="selected">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                  <br />
                  <input
                    value={inputs.employer_contact_details}
                    name="employer_contact_details"
                    onChange={(e) => onChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    What notice do you require to attend an interview?
                  </label>
                </td>
                <td>
                  <input
                    value={inputs.notice_to_attend_interview}
                    name="notice_to_attend_interview"
                    onChange={(e) => onChange(e)}
                  />
                </td>
              </tr>
              <tr id="addr1"></tr>
            </tbody>
          </table>
          <hr />
          <div class="d-flex justify-content-between">
            <button class="btn btn-primary btnPrevious14" onClick={(e) => {
              e.preventDefault();
              navigate('/additionalinformation');
            }}>
              Previous
            </button>
            <button class="btn btn-primary btnNext14" onClick={(e) => {
              e.preventDefault();
              navigate('/seaexperience');
            }}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonOfApplication;
