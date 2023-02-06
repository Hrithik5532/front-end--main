import React from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";

const StcwOtherCertificates = ({ inputs, setInputs }) => {
  let navigate = useNavigate();
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <div className="d-flex ms-3 py-3 flex-row-reverse">
      <Sidebar />
      <div style={{ width: "100%" }}>
        <div class="rounded-5 shadow p-3">
          <div class="container-100">
            <div class="display form-heading">
              <h4>STCW AND OTHER CERTIFICATES</h4>
            </div>
            <div class="column table-responsive-lg">
              <table
                class="table table-bordered table-hover border-rounded w-100"
                id="tab_logic"
              >
                <thead>
                  <tr class="table-info">
                    <th class="text-center">STCW Courses</th>
                    <th class="text-center">Certificate No</th>
                    <th class="text-center">Date of issue</th>
                    <th class="text-center">Date of Expiry</th>
                    <th class="text-center">Place of Issue</th>
                    <th class="text-center">Issuing Authority/INSTITUTE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="addx0">
                    <th>AFF (Fire Fighting)</th>
                    <td>
                      <input
                        value={inputs.aff_cerificate_no}
                        name="aff_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.aff_date_of_issue}
                        name="aff_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.aff_date_of_expiry}
                        name="aff_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.aff_place_of_issue}
                        name="aff_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.aff_issuing_authority}
                        name="aff_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>

                  <script></script>

                  <tr id="addx1">
                    <th>FP&FF</th>
                    <td>
                      <input
                        value={inputs.fpff_cerificate_no}
                        name="fpff_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.fpff_date_of_issue}
                        name="fpff_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.fpff_date_of_expiry}
                        name="fpff_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.fpff_place_of_issue}
                        name="fpff_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.fpff_issuing_authority}
                        name="fpff_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx2">
                    <th>EFA</th>
                    <td>
                      <input
                        value={inputs.efa_cerificate_no}
                        name="efa_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.efa_date_of_issue}
                        name="efa_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.efa_date_of_expiry}
                        name="efa_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.efa_place_of_issue}
                        name="efa_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.efa_issuing_authority}
                        name="efa_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx3">
                    <th>MFA / MEDICARE</th>
                    <td>
                      <input
                        value={inputs.mfa_cerificate_no}
                        name="mfa_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.mfa_date_of_issue}
                        name="mfa_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.mfa_date_of_expiry}
                        name="mfa_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.mfa_place_of_issue}
                        name="mfa_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.mfa_issuing_authority}
                        name="mfa_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx4">
                    <th>PST</th>
                    <td>
                      <input
                        value={inputs.pst_cerificate_no}
                        name="pst_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.pst_date_of_issue}
                        name="pst_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.pst_date_of_expiry}
                        name="pst_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.pst_place_of_issue}
                        name="pst_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.pst_issuing_authority}
                        name="pst_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx5">
                    <th>PSCRB (Survival)</th>
                    <td>
                      <input
                        value={inputs.pscrb_cerificate_no}
                        name="pscrb_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.pscrb_date_of_issue}
                        name="pscrb_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.pscrb_date_of_expiry}
                        name="pscrb_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.pscrb_place_of_issue}
                        name="pscrb_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.pscrb_issuing_authority}
                        name="pscrb_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx6">
                    <th>PSSR</th>
                    <td>
                      <input
                        value={inputs.pssr_cerificate_no}
                        name="pssr_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.pssr_date_of_issue}
                        name="pssr_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.pssr_date_of_expiry}
                        name="pssr_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.pssr_place_of_issue}
                        name="pssr_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.pssr_issuing_authority}
                        name="pssr_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx7">
                    <th>SSO</th>
                    <td>
                      <input
                        value={inputs.sso_cerificate_no}
                        name="sso_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.sso_date_of_issue}
                        name="sso_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.sso_date_of_expiry}
                        name="sso_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.sso_place_of_issue}
                        name="sso_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.sso_issuing_authority}
                        name="sso_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx8">
                    <th>STSDSD</th>
                    <td>
                      <input
                        value={inputs.stsdsd_cerificate_no}
                        name="stsdsd_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.stsdsd_date_of_issue}
                        name="stsdsd_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.stsdsd_date_of_expiry}
                        name="stsdsd_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.stsdsd_place_of_issue}
                        name="stsdsd_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.stsdsd_issuing_authority}
                        name="stsdsd_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx9">
                    <th>ROC</th>
                    <td>
                      <input
                        value={inputs.roc_cerificate_no}
                        name="roc_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.roc_date_of_issue}
                        name="roc_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.roc_date_of_expiry}
                        name="roc_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.roc_place_of_issue}
                        name="roc_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.roc_issuing_authority}
                        name="roc_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx10">
                    <th>ARPA</th>
                    <td>
                      <input
                        value={inputs.arpa_cerificate_no}
                        name="arpa_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.arpa_date_of_issue}
                        name="arpa_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.arpa_date_of_expiry}
                        name="arpa_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.arpa_place_of_issue}
                        name="arpa_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.arpa_issuing_authority}
                        name="arpa_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx11">
                    <th>GMDSS (GOC)</th>
                    <td>
                      <input
                        value={inputs.gmdss_cerificate_no}
                        name="gmdss_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.gmdss_date_of_issue}
                        name="gmdss_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.gmdss_date_of_expiry}
                        name="gmdss_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.gmdss_place_of_issue}
                        name="gmdss_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.gmdss_issuing_authority}
                        name="gmdss_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx11">
                    <th>GMDSS ENDORSEMENT</th>
                    <td>
                      <input
                        value={inputs.gmdss_endorsement_cerificate_no}
                        name="gmdss_endorsement_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.gmdss_endorsement_date_of_issue}
                        name="gmdss_endorsement_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.gmdss_endorsement_date_of_expiry}
                        name="gmdss_endorsement_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.gmdss_endorsement_place_of_issue}
                        name="gmdss_endorsement_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.gmdss_endorsement_issuing_authority}
                        name="gmdss_endorsement_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx2">
                    <th>REFRESHER & UPDATING</th>
                    <td>
                      <input
                        value={inputs.refresher_cerificate_no}
                        name="refresher_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.refresher_date_of_issue}
                        name="refresher_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.refresher_date_of_expiry}
                        name="refresher_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.refresher_place_of_issue}
                        name="refresher_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.refresher_issuing_authority}
                        name="refresher_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx2">
                    <th>RANSCO / NARAS</th>
                    <td>
                      <input
                        value={inputs.ranso_cerificate_no}
                        name="ranso_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.ranso_date_of_issue}
                        name="ranso_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.ranso_date_of_expiry}
                        name="ranso_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.ranso_place_of_issue}
                        name="ranso_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.ranso_issuing_authority}
                        name="ranso_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx2">
                    <th>SMS</th>
                    <td>
                      <input
                        value={inputs.sms_cerificate_no}
                        name="sms_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.sms_date_of_issue}
                        name="sms_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.sms_date_of_expiry}
                        name="sms_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.sms_place_of_issue}
                        name="sms_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.sms_issuing_authority}
                        name="sms_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx2">
                    <th>INDOS NO.</th>
                    <td>
                      <input
                        value={inputs.indos_cerificate_no}
                        name="indos_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.indos_date_of_issue}
                        name="indos_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.indos_date_of_expiry}
                        name="indos_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.indos_place_of_issue}
                        name="indos_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.indos_issuing_authority}
                        name="indos_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx2">
                    <th style={{ backgroundColor: "#c4c2c2" }}>
                      SIMULATOR TRAINING
                    </th>
                    {/* <td>
                      <input
                        value={inputs.simulator_cerificate_no}
                        name="simulator_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.simulator_date_of_issue}
                        name="simulator_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.simulator_date_of_expiry}
                        name="simulator_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.simulator_place_of_issue}
                        name="simulator_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.simulator_issuing_authority}
                        name="simulator_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td> */}
                  </tr>
                  <tr id="addx2">
                    <th>ENGINE ROOM SIMULATOR</th>
                    <td>
                      <input
                        value={inputs.engine_room_cerificate_no}
                        name="engine_room_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.engine_room_date_of_issue}
                        name="engine_room_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.engine_room_date_of_expiry}
                        name="engine_room_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.engine_room_place_of_issue}
                        name="engine_room_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.engine_room_issuing_authority}
                        name="engine_room_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr id="addx2">
                    <th>BTM</th>
                    <td>
                      <input
                        value={inputs.btm_cerificate_no}
                        name="btm_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.btm_date_of_issue}
                        name="btm_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.btm_date_of_expiry}
                        name="btm_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.btm_place_of_issue}
                        name="btm_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.btm_issuing_authority}
                        name="btm_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>MARPOL</th>
                    <td>
                      <input
                        value={inputs.marpol_cerificate_no}
                        name="marpol_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.marpol_date_of_issue}
                        name="marpol_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.marpol_date_of_expiry}
                        name="marpol_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.marpol_place_of_issue}
                        name="marpol_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.marpol_issuing_authority}
                        name="marpol_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>ECDIS (Generic)</th>
                    <td>
                      <input
                        value={inputs.ecdis_generic_cerificate_no}
                        name="ecdis_generic_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.ecdis_generic_date_of_issue}
                        name="ecdis_generic_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.ecdis_generic_date_of_expiry}
                        name="ecdis_generic_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.ecdis_generic_place_of_issue}
                        name="ecdis_generic_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.ecdis_generic_issuing_authority}
                        name="ecdis_generic_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>ECDIS (type specific)</th>
                    <td>
                      <input
                        value={inputs.ecdis_specific_cerificate_no}
                        name="ecdis_specific_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.ecdis_specific_date_of_issue}
                        name="ecdis_specific_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.ecdis_specific_date_of_expiry}
                        name="ecdis_specific_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.ecdis_specific_place_of_issue}
                        name="ecdis_specific_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.ecdis_specific_issuing_authority}
                        name="ecdis_specific_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>RAAI</th>
                    <td>
                      <input
                        value={inputs.raai_cerificate_no}
                        name="raai_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.raai_date_of_issue}
                        name="raai_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.raai_date_of_expiry}
                        name="raai_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.raai_place_of_issue}
                        name="raai_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.raai_issuing_authority}
                        name="raai_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>BRM / ERM</th>
                    <td>
                      <input
                        value={inputs.brm_cerificate_no}
                        name="brm_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.brm_date_of_issue}
                        name="brm_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.brm_date_of_expiry}
                        name="brm_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.brm_place_of_issue}
                        name="brm_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.brm_issuing_authority}
                        name="brm_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>BALLAST WATER MANAGEMENT</th>
                    <td>
                      <input
                        value={inputs.bwm_cerificate_no}
                        name="bwm_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.bwm_date_of_issue}
                        name="bwm_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.bwm_date_of_expiry}
                        name="bwm_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.bwm_place_of_issue}
                        name="bwm_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.bwm_issuing_authority}
                        name="bwm_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>LARGE VESSEL HANDLING SIMULATOR COURSE</th>
                    <td>
                      <input
                        value={inputs.lvh_cerificate_no}
                        name="lvh_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.lvh_date_of_issue}
                        name="lvh_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.lvh_date_of_expiry}
                        name="lvh_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.lvh_place_of_issue}
                        name="lvh_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.lvh_issuing_authority}
                        name="lvh_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>SIMULATOR COURSE</th>
                    <td>
                      <input
                        value={inputs.sim_course_cerificate_no}
                        name="sim_course_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.sim_course_date_of_issue}
                        name="sim_course_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.sim_course_date_of_expiry}
                        name="sim_course_date_of_expiry"
                        onChange={(e) => onChange(e)}
                        pattern=" "
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={inputs.sim_course_place_of_issue}
                        name="sim_course_place_of_issue"
                        onChange={(e) => onChange(e)}
                        pattern=" "
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={inputs.sim_course_issuing_authority}
                        name="sim_course_issuing_authority"
                        onChange={(e) => onChange(e)}
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ backgroundColor: "#c4c2c2" }}>
                      TANKER COURSES
                    </th>
                    {/* <td>
                      <input
                        value={inputs.tanker_cerificate_no}
                        name="tanker_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.tanker_date_of_issue}
                        name="tanker_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.tanker_date_of_expiry}
                        name="tanker_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.tanker_place_of_issue}
                        name="tanker_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.tanker_issuing_authority}
                        name="tanker_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td> */}
                  </tr>
                  <tr>
                    <th>TASCO / TANK FAM</th>
                    <td>
                      <input
                        value={inputs.tasco_cerificate_no}
                        name="tasco_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.tasco_date_of_issue}
                        name="tasco_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.tasco_date_of_expiry}
                        name="tasco_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.tasco_place_of_issue}
                        name="tasco_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.tasco_issuing_authority}
                        name="tasco_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>CHEMCO / CHEM FAM</th>
                    <td>
                      <input
                        value={inputs.chem_cerificate_no}
                        name="chem_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.chem_date_of_issue}
                        name="chem_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.chem_date_of_expiry}
                        name="chem_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.chem_place_of_issue}
                        name="chem_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.chem_issuing_authority}
                        name="chem_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>GASCO / GAS FAM</th>
                    <td>
                      <input
                        value={inputs.gasco_cerificate_no}
                        name="gasco_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.gasco_date_of_issue}
                        name="gasco_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.gasco_date_of_expiry}
                        name="gasco_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.gasco_place_of_issue}
                        name="gasco_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.gasco_issuing_authority}
                        name="gasco_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>DCE PETROLEUM</th>
                    <td>
                      <input
                        value={inputs.dce_petrol_cerificate_no}
                        name="dce_petrol_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.dce_petrol_date_of_issue}
                        name="dce_petrol_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.dce_petrol_date_of_expiry}
                        name="dce_petrol_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.dce_petrol_place_of_issue}
                        name="dce_petrol_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.dce_petrol_issuing_authority}
                        name="dce_petrol_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>DCE CHEMICAL</th>
                    <td>
                      <input
                        value={inputs.dce_chem_cerificate_no}
                        name="dce_chem_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.dce_chem_date_of_issue}
                        name="dce_chem_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.dce_chem_date_of_expiry}
                        name="dce_chem_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.dce_chem_place_of_issue}
                        name="dce_chem_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.dce_chem_issuing_authority}
                        name="dce_chem_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>DCE GAS</th>
                    <td>
                      <input
                        value={inputs.dce_gas_cerificate_no}
                        name="dce_gas_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.dce_gas_date_of_issue}
                        name="dce_gas_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.dce_gas_date_of_expiry}
                        name="dce_gas_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.dce_gas_place_of_issue}
                        name="dce_gas_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.dce_gas_issuing_authority}
                        name="dce_gas_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>LIQUID CARGO & BALLAST</th>
                    <td>
                      <input
                        value={inputs.lcb_cerificate_no}
                        name="lcb_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.lcb_date_of_issue}
                        name="lcb_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.lcb_date_of_expiry}
                        name="lcb_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.lcb_place_of_issue}
                        name="lcb_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.lcb_issuing_authority}
                        name="lcb_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ backgroundColor: "#c4c2c2" }}>
                      OTHER COURSES
                    </th>
                    {/* <td>
                      <input
                        value={inputs.other_course_cerificate_no}
                        name="other_course_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.other_course_date_of_issue}
                        name="other_course_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.other_course_date_of_expiry}
                        name="other_course_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.other_course_place_of_issue}
                        name="other_course_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.other_course_issuing_authority}
                        name="other_course_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td> */}
                  </tr>
                  <tr>
                    <th>MARITIME ENGLISH</th>
                    <td>
                      <input
                        value={inputs.martime_cerificate_no}
                        name="martime_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.martime_date_of_issue}
                        name="martime_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>

                    <td>
                      <input
                        type="date"
                        value={inputs.martime_date_of_expiry}
                        name="martime_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.martime_place_of_issue}
                        name="martime_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.martime_issuing_authority}
                        name="martime_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>SHIP HANDLING & MANOEUVRING</th>
                    <td>
                      <input
                        value={inputs.shm_cerificate_no}
                        name="shm_cerificate_no"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.shm_date_of_issue}
                        name="shm_date_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={inputs.shm_date_of_expiry}
                        name="shm_date_of_expiry"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.shm_place_of_issue}
                        name="shm_place_of_issue"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                    <td>
                      <input
                        value={inputs.shm_issuing_authority}
                        name="shm_issuing_authority"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>

                  <tr id="addx"></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="container-100">
            <div class="d-flex justify-content-between">
              <button
                class="btn btn-primary btnPrevious7 my-3"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/certificateofcompetency');
                }}
              >
                Previous
              </button>
              <button class="btn btn-primary btnNext7 my-3 "
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/refrences')
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

export default StcwOtherCertificates;
