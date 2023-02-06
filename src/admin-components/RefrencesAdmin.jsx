import React from "react";
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from "../components/SideBarAdmin";
import { Alert } from "@mui/material";

const RefrencesAdmin = ({ inputs, setInputs }) => {
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
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
        navigate('/admin/edit/howyouknowus');
      })
    })
  };


  return (
    <div className="d-flex ms-3 py-3 flex-row-reverse">
      <SidebarAdmin />
      <div style={{ width: "100%" }}>
        <div class="rounded-3 shadow p-4">
          <div class="container-90 display form-heading">
            <h4>REFERENCES</h4>
          </div>
          <Alert variant="filled" severity="error">
            <strong>NOTE:</strong> Please Click on the Next Button to Save the Changes and Proceed to the Next Section 
          </Alert>
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
                  navigate('/admin/edit/stcwandothercertificates')
                }}
              >
                Previous
              </button>
              <button class="btn btn-primary btnNext8 my-3 " onClick={(e) => {
                // e.preventDefault();
                // navigate('/admin/edit/howyouknowus');
                onHandleNext(e);
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

export default RefrencesAdmin;
