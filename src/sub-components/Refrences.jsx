import React from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";

const Refrences = ({ inputs, setInputs }) => {
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();

  return (
    <div className="d-flex ms-3 py-3 flex-row-reverse">
      <Sidebar/>
      <div style={{ width: "100%" }}>
        <div class="rounded-3 shadow p-4">
          <div class="container-90 display form-heading">
            <h4>REFERENCES</h4>
          </div>
          <div class="row clearfix">
            <div class="col-md-12 column">
              <table class="table table-bordered table-hover" id="tab_logic2">
                <thead>
                  <tr class="table-info">
                    <th class="text-center">Sr.no</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Company/Designation</th>

                    <th class="text-center">Telephone/Contact NO.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="adding0">
                    <td>1</td>
                    <td>
                      <input
                        type="text"
                        value={inputs.reference_name_1}
                        name="reference_name_1"
                        onChange={(e) => onChange(e)}
                        placeholder="Name"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={inputs.reference_company_1}
                        name="reference_company_1"
                        onChange={(e) => onChange(e)}
                        placeholder="Company or Designation"
                        class="form-control"
                      />
                    </td>

                    <td>
                      <input
                        type="number"
                        value={inputs.reference_telephone_1}
                        name="reference_telephone_1"
                        onChange={(e) => onChange(e)}
                        placeholder="Contact NO."
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr id="adding1">
                    <td>2</td>
                    <td>
                      <input
                        type="text"
                        value={inputs.reference_name_2}
                        name="reference_name_2"
                        onChange={(e) => onChange(e)}
                        placeholder="Name"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={inputs.refernce_company_2}
                        name="refernce_company_2"
                        onChange={(e) => onChange(e)}
                        placeholder="Company or Designation"
                        class="form-control"
                      />
                    </td>

                    <td>
                      <input
                        type="number"
                        value={inputs.reference_telephone_2}
                        name="reference_telephone_2"
                        onChange={(e) => onChange(e)}
                        placeholder="Contact NO."
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-between">
              <button
                class="btn btn-primary btnPrevious8 my-3"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/stcwandothercertificates')
                }}
              >
                Previous
              </button>
              <button class="btn btn-primary btnNext8 my-3 " onClick={(e) => {
                e.preventDefault();
                navigate('/howyouknowus');
              }}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refrences;
