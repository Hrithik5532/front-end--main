import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const SeaExperience = ({ inputs, setInputs }) => {
  const [a, setA] = useState(1);
  const [curArr, setCurrArr] = useState([]);
  const [formInputs, setFormInputs] = useState({
    Employer: "",
    RPSL: "",
    vessel_name: "",
    steam_motor: "",
    DWT: "",
    RANK: "",
    engine_model: "",
    BHP: "",
    manned_unmanned_engine_room: "",
    from: "",
    to: "",
    total: "",
  });
  const [arr, setArr] = useState([0]);

  const onFormChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };
  // //console.log(formInputs);
  const sendData = async () => {
    const response = await fetch("http://206.189.143.226:5000/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const parseRes = await response.json();
    //console.log(parseRes);
  };
  const incrementArr = (e) => {
    e.preventDefault();
    setArr([...arr, a]);
    setA(a + 1);
    setCurrArr([...curArr, formInputs]);
    setInputs({ ...inputs, special_experience: [...curArr, formInputs] });
    setFormInputs({
      Employer: "",
      RPSL: "",
      vessel_name: "",
      steam_motor: "",
      DWT: "",
      RANK: "",
      engine_model: "",
      BHP: "",
      manned_unmanned_engine_room: "",
      from: "",
      to: "",
      total: "",
    });
  };
  let navigate = useNavigate();
  return (
    <div className="d-flex ms-3 py-3 flex-row-reverse">
      <Sidebar />
      <div style={{ width: "100%" }}>
        <div class="rounded-5 shadow p-4 ">
          <div class="container-90 display form-heading ">
            <h4> SEA EXPERIENCE: (Most recent at Top) Special Experience </h4>{" "}
          </div>{" "}
          <div class="row clearfix ">
            <div class="sea-tab column">
              <table class="table table-bordered table-hover " id="tab_logic4 ">
                <thead>
                  <tr class="table-info ">
                    <th class="text-center "> Employer </th>{" "}
                    <th class="text-center "> RPSL Agent </th>{" "}
                    <th class="text-center "> Vessel NAME </th>{" "}
                    <th class="text-center "> Type </th>{" "}
                    <th class="text-center "> Steam / Motor </th>{" "}
                    <th class="text-center "> DWT / GRT </th>{" "}
                    <th class="text-center "> RANK </th>{" "}
                    <th class="text-center "> Engine MODEL </th>{" "}
                    <th class="text-center "> BHP </th>{" "}
                    <th class="text-center ">
                      {" "}
                      Manned or Unmanned Engine Room{" "}
                    </th>{" "}
                    <th class="text-center "> FROM </th>{" "}
                    <th class="text-center "> TO </th>{" "}
                    <th class="text-center "> TOTAL </th>{" "}
                  </tr>{" "}
                </thead>{" "}
                <tbody>
                  <tr id="addy0">
                    <td>
                      <input
                        type="text "
                        name="Employer"
                        value={formInputs.Employer}
                        onChange={(e) => onFormChange(e)}
                        placeholder="Enter employer "
                        class="form-control "
                      />
                    </td>{" "}
                    <td>
                      <input
                        type="text "
                        name="RPSL"
                        value={formInputs.RPSL}
                        onChange={(e) => onFormChange(e)}
                        class="form-control "
                      />
                    </td>{" "}
                    <td>
                      <input
                        type="text "
                        name="vessel_name"
                        value={formInputs.vessel_name}
                        onChange={(e) => onFormChange(e)}
                        class="form-control "
                      />
                    </td>{" "}
                    <td>
                      <input
                        type="text "
                        name="vessel_type"
                        value={formInputs.vessel_type}
                        onChange={(e) => onFormChange(e)}
                        class="form-control "
                      />
                    </td>{" "}
                    <td>
                      <select
                        class="form-control "
                        name="steam_motor"
                        id=" "
                        value={formInputs.steam_motor}
                        onChange={(e) => onFormChange(e)}
                      >
                        <option value=" "> </option>{" "}
                        <option value="steam "> Steam </option>{" "}
                        <option value="motor "> Motor </option>{" "}
                      </select>{" "}
                    </td>
                    <td>
                      <input
                        type="number "
                        name="DWT"
                        class="form-control "
                        value={formInputs.DWT}
                        onChange={(e) => onFormChange(e)}
                      />{" "}
                    </td>{" "}
                    <td>
                      <select
                        class="form-control"
                        name="RANK"
                        id=" "
                        value={formInputs.RANK}
                        onChange={(e) => onFormChange(e)}
                      >
                        <option value=" "> </option>{" "}
                        <option value="Cadet/Trainee"> Cadet / Trainee </option>{" "}
                        <option value="Second Office"> Second Office </option>{" "}
                        <option value="Third Office"> Third Office </option>{" "}
                        <option value="Chief Officer"> Chief Officer </option>{" "}
                        <option value="Master"> Master </option>{" "}
                        <option value="Second Engineer">
                          {" "}
                          Second Engineer{" "}
                        </option>{" "}
                        <option value="Third Engineer">
                          {" "}
                          Third Engineer{" "}
                        </option>{" "}
                        <option value="Fourth Engineer">
                          {" "}
                          Fourth Engineer{" "}
                        </option>{" "}
                        <option value="Chief Engineer">
                          {" "}
                          Chief Engineer{" "}
                        </option>{" "}
                      </select>{" "}
                    </td>{" "}
                    <td>
                      <input
                        type="text "
                        name="engine_model"
                        class="form-control "
                        value={formInputs.engine_model}
                        onChange={(e) => onFormChange(e)}
                      />{" "}
                    </td>{" "}
                    <td>
                      <input
                        type="text "
                        name="BHP"
                        class="form-control "
                        value={formInputs.BHP}
                        onChange={(e) => onFormChange(e)}
                      />{" "}
                    </td>{" "}
                    <td>
                      <select
                        name="manned_unmanned_engine_room"
                        class="form-control "
                        value={formInputs.manned_unmanned_engine_room}
                        onChange={(e) => onFormChange(e)}
                      >
                        <option value="--- " default>
                          -- -
                        </option>{" "}
                        <option value="Manned "> Manned </option>{" "}
                        <option value="Unmanned "> Unmanned </option>{" "}
                      </select>{" "}
                    </td>{" "}
                    <td>
                      <input
                        type="date"
                        name="from"
                        class="form-control "
                        value={formInputs.from}
                        onChange={(e) => onFormChange(e)}
                      />{" "}
                    </td>{" "}
                    <td>
                      <input
                        type="date"
                        name="to"
                        pattern=" "
                        class="form-control "
                        value={formInputs.to}
                        onChange={(e) => onFormChange(e)}
                      />{" "}
                    </td>{" "}
                    <td>
                      <input
                        type="number "
                        name="total"
                        class="form-control "
                        value={formInputs.total}
                        onChange={(e) => onFormChange(e)}
                      />{" "}
                    </td>{" "}
                  </tr>{" "}
                  <tr id="addy1"> </tr>{" "}
                </tbody>{" "}
              </table>{" "}
            </div>{" "}
          </div>{" "}
          <div class="mt-3">
            <div class="d-flex justify-content-center my-4">
              {" "}
              {/* <a id="delete_row4" class="pull-left btn btn-primary">
                                                                                                                                                                                                                                                                        Delete Row
                                                                                                                                                                                                                                                                      </a> */}{" "}
              <button
                id="add_row"
                class="btn btn-primary pull-right"
                onClick={(e) => incrementArr(e)}
              >
                Submit{" "}
              </button>{" "}
            </div>{" "}
            <hr />
            <div>
              <div class="row align-items-center">
                <div class="col"> Employer </div>{" "}
                <div class="col"> RPSL Agent </div>{" "}
                <div class="col"> Vessel NAME </div>{" "}
                <div class="col"> Type </div>{" "}
                <div class="col"> Steam / Motor </div>{" "}
                <div class="col"> DWT / GRT </div> <div class="col"> RANK </div>{" "}
                <div class="col"> Engine MODEL </div>{" "}
                <div class="col"> BHP </div>{" "}
                <div class="col"> Manned or Unmanned Engine Room </div>{" "}
                <div class="col"> FROM </div> <div class="col"> TO </div>{" "}
                <div class="col"> TOTAL </div> <div class="col"> Delete ? </div>{" "}
              </div>{" "}
              <hr />{" "}
              {curArr.map((ele, key) => {
                return (
                  <div key={key} class="row align-items-center mt-2">
                    <div class="col"> {ele.Employer} </div>{" "}
                    <div class="col"> {ele.RPSL} </div>{" "}
                    <div class="col"> {ele.vessel_name} </div>{" "}
                    <div class="col"> {ele.vessel_type} </div>{" "}
                    <div class="col"> {ele.steam_motor} </div>{" "}
                    <div class="col"> {ele.DWT} </div>{" "}
                    <div class="col"> {ele.RANK} </div>{" "}
                    <div class="col"> {ele.engine_model} </div>{" "}
                    <div class="col"> {ele.BHP} </div>{" "}
                    <div class="col"> {ele.manned_unmanned_engine_room} </div>{" "}
                    <div class="col"> {ele.from} </div>{" "}
                    <div class="col"> {ele.to} </div>{" "}
                    <div class="col"> {ele.total} </div>{" "}
                    <button
                      className="col btn btn-primary"
                      id={ele}
                      onClick={(e) => {
                        e.preventDefault();
                        setInputs({
                          ...inputs,
                          special_experience: curArr.filter((ok) => {
                            return ele.total !== ok.total;
                          }),
                        });
                        setCurrArr(
                          curArr.filter((ok) => {
                            return ele.total !== ok.total;
                          })
                        );
                      }}
                    >
                      Delete{" "}
                    </button>{" "}
                  </div>
                );
              })}{" "}
            </div>{" "}
            <div class="d-flex justify-content-between">
              <button
                class="btn btn-primary btnPrevious15"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/reasonofapplication");
                }}
              >
                Previous{" "}
              </button>{" "}
              <button
                class="btn btn-primary btnNext15"
                onClick={(e) => {
                  e.preventDefault();
                  // //console.log("i was here", curArr);
                  // setInputs({ ...inputs, special_experience: curArr });
                  // sendData();
                  navigate("/onshoreservice");
                }}
              >
                Next{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default SeaExperience;
