import React from "react";
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from "../components/SideBarAdmin";
import { Alert } from "@mui/material";

const SeamenBookAdmin = ({ inputs, setInputs }) => {
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  //console.log(inputs);
  let navigate = useNavigate();


  const id = localStorage.getItem("marine_form_id");
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
        navigate('/admin/edit/academicQualifications?q={}')
      })
    })
  };

  return (
    <div className="d-flex ms-3 py-3 flex-row-reverse">
      <SidebarAdmin />
      <div style={{ width: "100%" }}>
        <div class=" p-4 rounded-3 shadow">
          <div class="container-90 display form-heading">
            <h4>CONTINUOUS DISCHARGE CERTIFICATE / SEAMEN BOOK</h4>
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
                navigate('/admin/edit/passport')
              }}
            >
              Previous
            </button>
            <button class="btn btn-primary btnNext4 my-3 " onClick={(e) => {
              // e.preventDefault();
              // navigate('/admin/edit/academicQualifications?q={}');
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

export default SeamenBookAdmin;
