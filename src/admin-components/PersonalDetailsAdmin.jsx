import React from "react";
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from "../components/SideBarAdmin";
import { Alert } from "@mui/material";

const PersonalDetailsAdmin = ({ inputs, setInputs }) => {
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
        navigate('/admin/edit/additionalinformation')
      })
    })
  };

  return (
    <div className="d-flex ms-3 py-3 flex-row-reverse">
      <SidebarAdmin />
      <div style={{ width: "100%" }}>
        <div class="rounded-3 shadow p-4">
          <div class="container-90 display form-heading">
            <h4>PERSONAL DETAILS</h4>
          </div>
          <Alert variant="filled" severity="error">
            <strong>NOTE:</strong> Please Click on the Next Button to Save the Changes and Proceed to the Next Section 
          </Alert>
          <div class="d-flex row">
            <div class="col-md-3">
              <label for="">Height: </label>
              <input
                value={inputs.height}
                name="height"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div class="col-md-3">
              <label for="">Weight: </label>{" "}
              <input
                value={inputs.weight}
                name="weight"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div class="col-md-3">
              <label for="">BMI: </label>{" "}
              <input
                value={inputs.BMI}
                name="BMI"
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div class="d-flex row my-3">
            <div class="col-md-3">
              <label for="">Color of eyes: </label>{" "}
              <input
                value={inputs.color_of_eyes}
                name="color_of_eyes"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div class="col-md-3">
              <label for="">Color of Hair: </label>{" "}
              <input
                value={inputs.color_of_hair}
                name="color_of_hair"
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div class="d-flex row  my-3" style={{ alignItems: "flex-end" }}>
            <div class="col-md-3 ">
              <label>Any major illness / Surgery: </label>
              <select
                value={inputs.any_major_surgery}
                name="any_major_surgery"
                onChange={(e) => onChange(e)}
              >
                <option value="No" selected="selected">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div class="col-md-3 ">
              <label>If “YES”, kindly provide details separately: </label>
              <input
                value={inputs.details_surgery}
                name="details_surgery"
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div class="d-flex row my-3">
            <div class="col-md-3 ">
              <label for="customer">
                <h6>Have any defect in hearing:</h6>
              </label>{" "}
              <select
                value={inputs.defect_in_hearing}
                name="defect_in_hearing"
                onChange={(e) => onChange(e)}
              >
                <option value="No" selected="selected">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div class="col-md-3 ">
              <label for="customer">
                <h6>Have any defect in vision:</h6>
              </label>{" "}
              <select
                value={inputs.defect_in_vision}
                name="defect_in_vision"
                onChange={(e) => onChange(e)}
              >
                <option value="No" selected="selected">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="customer">
                <h6>Have any defect in speech:</h6>
              </label>{" "}
              <select
                value={inputs.defect_in_speech}
                name="defect_in_speech"
                onChange={(e) => onChange(e)}
              >
                <option value="No" selected="selected">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>
          <div class="d-flex row my-3" style={{ alignItems: "flex-end" }}>
            <div class="col-md-4">
              <label for="customer ">
                If your health is affected by any particular climate?
              </label>
              <div>
                <select
                  value={inputs.health_affected_by_climate}
                  name="health_affected_by_climate"
                  onChange={(e) => onChange(e)}
                >
                  <option value="No" selected="selected">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>
            <br />
            <div class="col-md-8">
              <label>Please State : </label>{" "}
              <input
                value={inputs.health_affected_by_climate_reason}
                name="health_affected_by_climate_reason"
                onChange={(e) => onChange(e)}
              />
            </div>

          </div>
          <div class="d-flex row ">
            <div>
              <label>LAST DRAWN WAGES</label>
              <input
                value={inputs.last_drawn_wages}
                name="last_drawn_wages"
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between ">
            <button class="btn btn-primary btnPrevious10  " onClick={(e) => {
              e.preventDefault();
              navigate('/admin/edit/howyouknowus')
            }}>
              Previous
            </button>
            <button class="btn btn-primary btnNext10 " onClick={(e) => {
              // e.preventDefault();
              onHandleNext(e)
            }}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsAdmin;
