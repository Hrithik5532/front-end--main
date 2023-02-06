import React from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";

const SeamenBook = ({ inputs, setInputs }) => {
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  //console.log(inputs);
  let navigate = useNavigate();
  return (
    <div className="d-flex ms-3 py-3 flex-row-reverse">
      <Sidebar/>
      <div style={{ width: "100%" }}>
        <div class=" p-4 rounded-3 shadow">
          <div class="container-90 display form-heading">
            <h4>CONTINUOUS DISCHARGE CERTIFICATE / SEAMEN BOOK</h4>
          </div>
          <div class="row clearfix">
            <div class="col-md-12 column table-responsive-lg">
              <table class="table table-bordered table-hover" id="tab_logic">
                <thead>
                  <tr class="table-info">
                    <th class="text-center"></th>
                    <th class="text-center">Number</th>
                    <th class="text-center">Place of Issue</th>
                    <th class="text-center">Date of Issue</th>
                    <th class="text-center">Date of Expiry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="table-info">INDIAN</th>
                    <td>
                      <input
                        value={inputs.indian_certificate_no}
                        name="indian_certificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.indian_place_of_issue}
                        name="indian_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.indian_date_of_issue}
                        name="indian_date_of_issue"
                        onChange={(e) => onChange(e)}
                        type="date"
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.indian_date_of_expiry}
                        name="indian_date_of_expiry"
                        onChange={(e) => onChange(e)}
                        type="date"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th class="table-info">PANAMA</th>
                    <td>
                      <input
                        value={inputs.panama_certificate_no}
                        name="panama_certificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.panama_place_of_issue}
                        name="panama_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.panama_date_of_issue}
                        name="panama_date_of_issue"
                        onChange={(e) => onChange(e)}
                        type="date"
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.panama_date_of_expiry}
                        name="panama_date_of_expiry"
                        onChange={(e) => onChange(e)}
                        type="date"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="table-info">OTHERS</th>
                    <td>
                      <input
                        value={inputs.others_certificate_no}
                        name="others_certificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.others_place_of_issue}
                        name="others_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.others_date_of_issue}
                        name="others_date_of_issue"
                        onChange={(e) => onChange(e)}
                        type="date"
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.others_date_of_expiry}
                        name="others_date_of_expiry"
                        onChange={(e) => onChange(e)}
                        type="date"
                      />
                    </td>
                  </tr>
                  <tr id="addr1"></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <button
              class="btn btn-primary btnPrevious4 my-3"
              onClick={(e) => {
                e.preventDefault();
                navigate('/passport')
              }}
            >
              Previous
            </button>
            <button class="btn btn-primary btnNext4 my-3 " onClick={(e) => {
              e.preventDefault();
              navigate('/academicQualifications');
            }}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeamenBook;
