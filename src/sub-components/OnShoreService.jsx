import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";

const OnShoreService = ({ inputs, setInputs }) => {
  const [a, setA] = useState(1);
  const [curArr, setCurrArr] = useState([]);
  const [formInputs, setFormInputs] = useState({
    Employer: "",
    Title: "",
    Workshop: "",
    major_machines: "",
    personel_supervised: "",
    size_tonnage: "",
    from: "",
    to: "",
    any_useful_info: "",
  });
  const [arr, setArr] = useState([0]);

  const onFormChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };
  //console.log(formInputs);

  const incrementArr = () => {
    setArr([...arr, a]);
    setA(a + 1);
    setCurrArr([...curArr, formInputs]);
    setInputs({ ...inputs, on_shore: [...curArr, formInputs] });
    setFormInputs({
      Employer: "",
      Title: "",
      Workshop: "",
      major_machines: "",
      personel_supervised: "",
      size_tonnage: "",
      from: "",
      to: "",
      any_useful_info: "",
    });
  };
  let navigate = useNavigate();
  return (
    <div className="d-flex ms-3 py-3 flex-row-reverse">
      <Sidebar/>
      <div style={{ width: "100%" }}>
        <div class="rounded-5 shadow p-4">
          <div class="container-90 display form-heading">
            <h4>ON-SHORE SERVICES</h4>
          </div>
          <div class="row clearfix">
            <div class="sea-tab column table-responsive-lg">
              <table class="table table-bordered table-hover" id="tab_logic5">
                <thead>
                  <tr class="table-info">
                    <th class="text-center">Sr. No.</th>
                    <th class="text-center">Employer</th>
                    <th class="text-center">Title</th>
                    <th class="text-center">Workshop/ Shipyard</th>
                    <th class="text-center">
                      Name of Major Machines You Worked with
                    </th>
                    <th class="text-center">
                      No of Personnel Supervised by you
                    </th>
                    <th class="text-center">
                      Size & tonnage of Vessel Repaired
                    </th>
                    <th class="text-center">Period (From)</th>
                    <th class="text-center">Period (To)</th>
                    <th class="text-center">Any other useful information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="adder0">
                    <td>1</td>
                    <td>
                      <input
                        type="text"
                        name="Employer"
                        value={formInputs.Employer}
                        onChange={(e) => onFormChange(e)}
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Title"
                        value={formInputs.Title}
                        onChange={(e) => onFormChange(e)}
                        class="form-control"
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        name="Workshop"
                        value={formInputs.Workshop}
                        onChange={(e) => onFormChange(e)}
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="major_machines"
                        value={formInputs.major_machines}
                        onChange={(e) => onFormChange(e)}
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="personel_supervised"
                        value={formInputs.personel_supervised}
                        onChange={(e) => onFormChange(e)}
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="size_tonnage"
                        value={formInputs.size_tonnage}
                        onChange={(e) => onFormChange(e)}
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="from"
                        value={formInputs.from}
                        onChange={(e) => onFormChange(e)}
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="to"
                        value={formInputs.to}
                        onChange={(e) => onFormChange(e)}
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="any_useful_info"
                        value={formInputs.any_useful_info}
                        onChange={(e) => onFormChange(e)}
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr id="adder1"></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="mt-3">
            <div class="d-flex justify-content-center my-4">
              {/* <a id="delete_row5" class="pull-left btn btn-primary">
                Delete Row
              </a> */}
              <button
                disabled = {!formInputs.Employer || !formInputs.Title || !formInputs.Workshop || !formInputs.any_useful_info || !formInputs.from || !formInputs.major_machines || !formInputs.personel_supervised || !formInputs.size_tonnage || !formInputs.to}
                id="add_row"
                class="btn btn-primary pull-right"
                onClick={incrementArr}
              >
                Submit
              </button>
            </div>
            <hr />
            <div>
              <div class="row align-items-center">
                <div class="col">Employer</div>
                <div class="col">Title</div>
                <div class="col">Workshop/ Shipyard</div>
                <div class="col">Name of Major Machines You Worked with</div>
                <div class="col">No of Personnel Supervised by you</div>
                <div class="col">Size & tonnage of Vessel Repaired</div>
                <div class="col">Period (From)</div>
                <div class="col">Period (To)</div>
                <div class="col">Any other useful information</div>
                <div class="col">Delete</div>
              </div>
              <hr />
              {curArr.map((ele, key, index) => {
                return (
                  <div key={key} class="row align-items-center mt-2">
                    <div class="col">{ele.Employer}</div>
                    <div class="col">{ele.Title}</div>
                    <div class="col">{ele.Workshop}</div>
                    <div class="col">{ele.major_machines}</div>
                    <div class="col">{ele.personel_supervised}</div>
                    <div class="col">{ele.size_tonnage}</div>
                    <div class="col">{ele.from}</div>
                    <div class="col">{ele.to}</div>
                    <div class="col">{ele.any_useful_info}</div>
                    <button
                      className="col btn btn-primary"
                      id={ele}
                      onClick={(e) => {
                        e.preventDefault();
                        setInputs({
                          ...inputs,
                          on_shore: curArr.filter((ok) => {
                            return ele.from !== ok.from;
                          }),
                        });
                        setCurrArr(
                          curArr.filter((ok) => {
                            return ele.from !== ok.from;
                          })
                        );
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
            <div class="d-flex justify-content-between">
              <button class="btn btn-primary btnPrevious16" onClick={(e) => {
                e.preventDefault();
                navigate('/seaexperence');
              }}>Previous</button>
              <button
                class="btn btn-primary btnNext16"
                onClick={(e) => {
                  e.preventDefault();
                  // //console.log("i was here", curArr);
                  // setInputs({ ...inputs, on_shore: [...curArr] });
                  // sendData();
                  navigate('/declaration')
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnShoreService;
