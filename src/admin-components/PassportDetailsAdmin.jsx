import React from "react";
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from "../components/SideBarAdmin";
import { Alert } from "@mui/material";

const PassportDetailsAdmin = ({ inputs, setInputs }) => {
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  //console.log(inputs);

  let navigate = useNavigate();
  const id = localStorage.marine_form_id;
  const onHandleNext = async (e) => {
    e.preventDefault();
    console.log(id)
    fetch(
      `http://206.189.143.226:5000/admin/form/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    }
    ).then(res => {
      res.json().then((data) => {
        console.log(data.success);
        if (data.success) {
          alert("Form Updated Successfully")
        }
        else {
          alert("Form Update Failed")
        }
        navigate('/admin/edit/seamenbook')
      })
    })
  };

  return (
    <div className="d-flex ms-3 py-3 flex-row-reverse">
      <SidebarAdmin />
      <div style={{ width: "100%" }}>
        <div class="p-4 rounded-3 shadow">
          <div class="display form-heading container-90">
            <h4>PASSPORT DETAILS</h4>
          </div>
          <Alert variant="filled" severity="error">
            <strong>NOTE:</strong> Please Click on the Next Button to Save the Changes and Proceed to the Next Section 
          </Alert>
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
                    <th class="table-info">PASSPORT</th>
                    <td>
                      <input
                        value={inputs.passport_no}
                        name="passport_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.passport_place_of_issue}
                        name="passport_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.passport_date_of_issue}
                        name="passport_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.passport_date_of_expiry}
                        name="passport_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="table-info">US VISA (C1/D)</th>
                    <td>
                      <input
                        value={inputs.us_visa_no}
                        name="us_visa_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.us_visa_place_of_issue}
                        name="us_visa_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.us_visa_date_of_issue}
                        name="us_visa_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.us_visa_date_of_expiry}
                        name="us_visa_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="table-info">YELLOW FEVER</th>
                    <td>
                      <input
                        value={inputs.yellow_fever_no}
                        name="yellow_fever_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.yellow_fever_place_of_issue}
                        name="yellow_fever_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.yellow_fever_date_of_issue}
                        name="yellow_fever_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.yellow_fever_date_of_expiry}
                        name="yellow_fever_date_of_expiry"
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
              class="btn btn-primary btnPrevious3 my-3"
              onClick={(e) => {
                e.preventDefault();
                navigate('/admin/edit/dependents')
              }}
            >
              Previous
            </button>
            <button class="btn btn-primary btnNext3 my-3 " onClick={(e) => {
              onHandleNext(e);

            }}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassportDetailsAdmin;
