import React from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";

const CertificateOfCompetancy = ({ inputs, setInputs }) => {
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();

  return (
    <div  className="d-flex ms-3 py-3 flex-row-reverse">
      <Sidebar/ >
      <div style={{ width: "100%" }}>
        <div class="p-4 rounded-3 shadow">
          <div class="container-90 display form-heading">
            <h4>LICENCE / CERTIFICATES OF COMPETENCY</h4>
          </div>
          <div class="row clearfix">
            <div class="col-md-12 column table-responsive-lg">
              <table class="table table-bordered table-hover" id="tab_logic">
                <thead>
                  <tr class="table-info">
                    <th class="text-center">Issuing Authority</th>
                    <th class="text-center">Grade</th>
                    <th class="text-center">Number</th>
                    <th class="text-center">Date of issue</th>
                    <th class="text-center">Date of Expiry</th>
                    <th class="text-center">Date Revalidation</th>
                    <th class="text-center">STCW 2010</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <th>INDIAN</th>
                    <td>
                      <input
                        value={inputs.indian_grade}
                        name="indian_grade"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.indian_number}
                        name="indian_number"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.indian_liscence_date_of_issue}
                        name="indian_liscence_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.indian_lisence_date_of_expiry}
                        name="indian_lisence_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.indain_lisence_date_revalidation}
                        name="indain_lisence_date_revalidation"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.indian_stcw}
                        name="indian_stcw"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr> */}
                  <tr>
                    <th>INDIAN</th>
                    <td>
                      <input
                        value={inputs.uk_grade}
                        name="uk_grade"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.uk_number}
                        name="uk_number"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.uk_liscence_date_of_issue}
                        name="uk_liscence_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.uk_lisence_date_of_expiry}
                        name="uk_lisence_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.uk_lisence_date_revalidation}
                        name="uk_lisence_date_revalidation"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.uk_stcw}
                        name="uk_stcw"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th>UK</th>
                    <td>
                      <input
                        value={inputs.aus_grade}
                        name="aus_grade"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.aus_number}
                        name="aus_number"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        type="date"
                        value={inputs.aus_liscence_date_of_issue}
                        name="aus_liscence_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        type="date"
                        value={inputs.aus_lisence_date_of_expiry}
                        name="aus_lisence_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        type="date"
                        value={inputs.aus_lisence_date_revalidation}
                        name="aus_lisence_date_revalidation"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        value={inputs.aus_stcw}
                        name="aus_stcw"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>SINGAPORE</th>
                    <td>
                      <input
                        value={inputs.singapore_grade}
                        name="singapore_grade"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.singapore_number}
                        name="singapore_number"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.singapore_liscence_date_of_issue}
                        name="singapore_liscence_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.singapore_lisence_date_of_expiry}
                        name="singapore_lisence_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.singapore_lisence_date_revalidation}
                        name="singapore_lisence_date_revalidation"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.singapore_stcw}
                        name="singapore_stcw"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  {/* <tr>
                    <th>PANAMA</th>
                    <td>
                      <input
                        value={inputs.panama_grade}
                        name="panama_grade"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        value={inputs.panama_number}
                        name="panama_number"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        type="date"
                        value={inputs.panama_liscence_date_of_issue}
                        name="panama_liscence_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        type="date"
                        value={inputs.panama_lisence_date_of_expiry}
                        name="panama_lisence_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        type="date"
                        value={inputs.panama_lisence_date_revalidation}
                        name="panama_lisence_date_revalidation"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        value={inputs.panama_stcw}
                        name="panama_stcw"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr> */}
                  <tr>
                    <th>OTHERS</th>
                    <td>
                      <input
                        value={inputs.others_grade}
                        name="others_grade"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        value={inputs.others_number}
                        name="others_number"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        type="date"
                        value={inputs.others_liscence_date_of_issue}
                        name="others_liscence_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        type="date"
                        value={inputs.others_lisence_date_of_expiry}
                        name="others_lisence_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        type="date"
                        value={inputs.others_lisence_date_revalidation}
                        name="others_lisence_date_revalidation"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        value={inputs.others_stcw}
                        name="others_stcw"
                        onChange={(e) => onChange(e)}
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
              class="btn btn-primary btnPrevious6 my-3"
              onClick={(e) => {
                e.preventDefault();
                navigate('/academicQualifications');
              }}
            >
              Previous
            </button>
            <button class="btn btn-primary btnNext6 my-3 " 
              onClick={(e) => {
                e.preventDefault();
                navigate('/stcwandothercertificates');
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateOfCompetancy;
