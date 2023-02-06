import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const NextofKeens = ({ inputs, setInputs }) => {
  const [a, setA] = useState(1);
  const [curArr, setCurrArr] = useState([]);
  const [formInputs, setFormInputs] = useState({
    name: "",
    // relation: "",
    ppno: 0,
    dob: "",
  });
  const [arr, setArr] = useState([0]);

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onFormChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };
  //console.log(formInputs);

  const sendData = async () => {
    const response = await fetch("206.189.143.226:5000/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const parseRes = await response.json();
    //console.log(parseRes);
  };
  const incrementArr = () => {
    setArr([...arr, a]);
    setA(a + 1);
    setCurrArr([...curArr, formInputs]);
    setInputs({ ...inputs, kin_array: [...curArr, formInputs] });
    setFormInputs({
      name: "",
      relation: "",
      ppno: "",
      dob: "",
    });
  };
  const decrementArr = () => {
    var temp = arr;

    if (temp.length > 0) {
      setArr(temp.splice(0, temp.length - 1));
    }
  };
  //console.log(inputs);

  let navigate = useNavigate();
  return (
    <div className="d-flex ms-3 py-3 flex-row-reverse">
      <Sidebar />
      <div style={{ width: "100%" }}>
        <form class="rounded-3 shadow">
          <div class="display form-heading">
            <h4 class="p-4 pb-0"> NEXT OF KIN / DEPENDENTS </h4>{" "}
          </div>
          <div>
            <div class="form-row">
              <div class="container-90">
                <div class="row">
                  {/* <div class="form-group col-md-3 input-padding">
                                                                <label for="inputname">Address </label>
                                                                <input 
                                                                  value={inputs.add_nkd}
                                                                  onChange={(e) => onChange(e)}
                                                                  name="add_nkd"
                                                                />
                                                              </div> */}{" "}
                </div>{" "}
                <div class="row">
                  <div class="form-group col-md-3 input-padding">
                    <label for="inputname"> Name </label>{" "}
                    <input
                      value={inputs.name_of_kin}
                      onChange={(e) => onChange(e)}
                      name="name_of_kin"
                    />
                  </div>{" "}
                  <div class="form-group col-md-3 input-padding">
                    <label for="inputname"> Relation </label>{" "}
                    <input
                      value={inputs.relation}
                      onChange={(e) => onChange(e)}
                      name="relation"
                    />
                  </div>{" "}
                  <div class="form-group col-md-3 input-padding">
                    <label for="inputname"> Address </label>{" "}
                    <input
                      value={inputs.add_nkd}
                      onChange={(e) => onChange(e)}
                      name="add_nkd"
                    />
                  </div>{" "}
                  <div class="form-group col-md-3 input-padding">
                    <label for="inputname"> No of childrens </label>{" "}
                    <input
                      value={inputs.no_of_child}
                      onChange={(e) => onChange(e)}
                      name="no_of_child"
                    />
                  </div>{" "}
                </div>
                <div class="mt-4">
                  <table
                    class="table table-bordered table-hover "
                    id="tab_logic"
                  >
                    <thead>
                      <tr class="table-info">
                        {" "}
                        {/* <th class="text-center">Sr.no</th> */}{" "}
                        <th class="text-center"> Name </th>{" "}
                        <th class="text-center"> Relationship </th>{" "}
                        <th class="text-center"> Date of Birth </th>{" "}
                        <th class="text-center"> PP No. / Other Id </th>{" "}
                      </tr>{" "}
                    </thead>
                    <tbody>
                      <tr id="addr0" class="">
                        {" "}
                        {/* <td>1</td> */}{" "}
                        <td>
                          <input
                            type="text"
                            name="name"
                            value={formInputs.name}
                            onChange={(e) => onFormChange(e)}
                            placeholder="Name"
                            class="form-control"
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="text"
                            name="relation"
                            value={formInputs.relation}
                            onChange={(e) => onFormChange(e)}
                            placeholder="Relationship"
                            class="form-control"
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="date"
                            name="dob"
                            value={formInputs.dob}
                            onChange={(e) => onFormChange(e)}
                            class="form-control"
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="text"
                            name="ppno"
                            value={formInputs.ppno}
                            onChange={(e) => onFormChange(e)}
                            placeholder="PP No."
                            class="form-control"
                          />
                        </td>{" "}
                      </tr>{" "}
                      <tr id="addr1"> </tr>{" "}
                    </tbody>{" "}
                  </table>{" "}
                </div>{" "}
                <div class="d-flex justify-content-center my-4">
                  {" "}
                  {/* <a id="delete_row" class="pull-left btn btn-primary" onClick={decrementArr}>
                                                                                                                                                                    Delete Row
                                                                                                                                                                  </a> */}{" "}
                  <button
                    id="add_row"
                    disabled={formInputs.name === ""}
                    class="btn btn-primary pull-right"
                    onClick={incrementArr}
                  >
                    Submit{" "}
                  </button>{" "}
                </div>{" "}
                <hr />
                <div>
                  <div class="row align-items-center">
                    <div class="col"> Name </div>{" "}
                    <div class="col"> Relation </div>{" "}
                    <div class="col"> DOB </div>{" "}
                    <div class="col"> PP number </div>{" "}
                    <div class="col"> Delete ? </div>{" "}
                  </div>{" "}
                  <hr />{" "}
                  {curArr.map((ele, key) => {
                    return (
                      <div key={key} class="row align-items-center mt-2">
                        <div class="col"> {ele.name} </div>{" "}
                        <div class="col"> {ele.relation} </div>{" "}
                        <div class="col"> {ele.dob} </div>{" "}
                        <div class="col"> {ele.ppno} </div>{" "}
                        <button
                          className="col btn btn-primary"
                          id={ele}
                          onClick={(e) => {
                            e.preventDefault();
                            setInputs({
                              ...inputs,
                              kin_array: curArr.filter((ok) => {
                                return ele.ppno !== ok.ppno;
                              }),
                            });
                            setCurrArr(
                              curArr.filter((ok) => {
                                return ele.ppno !== ok.ppno;
                              })
                            );
                          }}
                        >
                          Delete{" "}
                        </button>{" "}
                      </div>
                    );
                  })}{" "}
                </div>
                <div class="d-flex justify-content-between">
                  <button
                    class="btn btn-primary btnPrevious2 my-3"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/");
                    }}
                  >
                    Previous{" "}
                  </button>{" "}
                  <button
                    class="btn btn-primary btnNext2 my-3 "
                    onClick={(e) => {
                      e.preventDefault();
                      // setInputs({ ...inputs, kin_array: [...curArr] });
                      navigate("/passport");
                      console.log(inputs);
                    }}
                  >
                    Next{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </form>
        <br />
        <div class="container-90"> </div>{" "}
      </div>{" "}
    </div>
  );
};

export default NextofKeens;
