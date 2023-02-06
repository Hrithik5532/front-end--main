import React from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";

const AcademicQualifications = ({ inputs, setInputs }) => {
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();
  return (
    <div className="d-flex ms-3 py-3 flex-row-reverse">
      <Sidebar/>
      <div style={{width:"100%"}}>
        <div class="p-4 rounded-3 shadow">
          <div class="container-90 display form-heading">
            <h4>ACADEMIC QUALIFICATIONS</h4>
          </div>
          <div class="row clearfix">
            <div class="col-md-12 column table-responsive-lg">
              <table class="table table-bordered table-hover" id="tab_logic">
                <thead>
                  <tr class="table-info">
                    <th class="text-center"></th>
                    <th class="text-center">Name Of Institute/ City</th>
                    <th class="text-center">Grade/Degree</th>
                    <th class="text-center">From (Year)</th>
                    <th class="text-center">To (Year)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>ELEMENTATY</th>
                    <td>
                      <input
                        value={inputs.elementary_name_of_institution}
                        name="elementary_name_of_institution"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.elementary_degree}
                        name="elementary_degree"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.elementary_from}
                        name="elementary_from"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.elementary_to}
                        name="elementary_to"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>SECONDARY</th>
                    <td>
                      <input
                        value={inputs.secondary_name_of_institution}
                        name="secondary_name_of_institution"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.secondary_degree}
                        name="secondary_degree"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.secondary_from}
                        name="secondary_from"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.secondary_to}
                        name="secondary_to"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>UNIVERSITY</th>
                    <td>
                      <input
                        value={inputs.university_name_of_institution}
                        name="university_name_of_institution"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.university_degree}
                        name="university_degree"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.university_from}
                        name="university_from"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.university_to}
                        name="university_to"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>PROFESSIONAL QUALIFICATION</th>
                    <td>
                      <input
                        value={inputs.professional_name_of_institution}
                        name="professional_name_of_institution"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.professional_degree}
                        name="professional_degree"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.professional_from}
                        name="professional_from"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.professional_to}
                        name="professional_to"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addr1"></tr>
                </tbody>
              </table>

              <label for="">Additional Skills</label>
              <input
                value={inputs.additional_skills}
                name="additional_skills"
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <button
              class="btn btn-primary btnPrevious5 my-3"
              onClick={(e) => {
                e.preventDefault();
                navigate('/seamenbook');
              }}
            >
              Previous
            </button>
            <button class="btn btn-primary btnNext5 my-3 " onClick={(e) => {
              e.preventDefault();
              navigate('/certificateofcompetency')
            }}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicQualifications;
