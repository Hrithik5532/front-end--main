import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ProfileDetails = ({ setInputs, inputs }) => {
    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };
    let navigate = useNavigate();
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

    //   //console.log(inputs);
    return (
        // <div style={{ width: "100%" }}>
        <div class="d-flex ms-3 py-3 flex-row-reverse">
            <Sidebar />
            <div class="tab-content col-md-9" id="v-pills-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                >
                    <form>
                        <div class="rounded-3 shadow">
                            <div class="display bg-light">
                                <h5 style={{ paddingLeft: ":2rem " }}>
                                    <br /> Application Form / Personal Data Update form{" "}
                                </h5>{" "}
                                <hr />
                            </div>{" "}
                            <div>
                                <div class="display form-heading">
                                    <h4 class="m-4"> APPLIED TO OFFICE IN CITY / COUNTRY: </h4>{" "}
                                </div>{" "}
                                <div class="form-row">
                                    <div class="container-90">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="form-group col-md-3 input-padding">
                                                    <label for="inputname"> Present Rank </label>{" "}
                                                    <input
                                                        value={inputs.present_rank}
                                                        name="present_rank"
                                                        onChange={(e) => onChange(e)}
                                                    />{" "}
                                                </div>
                                                <div class="form-group col-md-3 input-padding">
                                                    <label for="inputname"> Rank Applied </label>{" "}
                                                    <input
                                                        value={inputs.rank_applied}
                                                        name="rank_applied"
                                                        onChange={(e) => onChange(e)}
                                                    />{" "}
                                                </div>
                                                <div class="form-group col-md-3 input-padding">
                                                    <label for="inputname"> Date Of Application </label>{" "}
                                                    {/* <input /> */}{" "}
                                                    <input
                                                        value={inputs.date_of_application}
                                                        name="date_of_application"
                                                        onChange={(e) => onChange(e)}
                                                        type="date"
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                        }}
                                                    />{" "}
                                                    {/* <Stack
                                        value={inputs.date_of_application}
                                        name="date_of_application"
                                        onChange={(e) => onChange(e)}
                                        component="form"
                                        noValidate
                                        spacing={1}
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                        }}
                                      >
                                        <TextField
                                          id="date"
                                          type="date"
                                          defaultValue="2017-05-24"
                                          sx={{ width: "100%" }}
                                          InputLabelProps={{
                                            shrink: true,
                                          }}
                                        />
                                      </Stack> */}{" "}
                                                </div>
                                                <div class="form-group col-md-3 input-padding">
                                                    <label for="inputname"> Date Of Availability </label>{" "}
                                                    <input
                                                        value={inputs.date_of_availability}
                                                        name="date_of_availability"
                                                        onChange={(e) => onChange(e)}
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                        }}
                                                        type="date"
                                                    />{" "}
                                                    {/* <Stack
                                        value={inputs.date_of_application}
                                        name="date_of_application"
                                        onChange={(e) => onChange(e)}
                                        component="form"
                                        noValidate
                                        spacing={1}
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                        }}
                                      >
                                        <TextField
                                          id="date"
                                          type="date"
                                          defaultValue="2017-05-24"
                                          sx={{ width: "100%" }}
                                          InputLabelProps={{
                                            shrink: true,
                                          }}
                                        />
                                      </Stack> */}{" "}
                                                </div>
                                                <div class="form-group col-md-3 input-padding">
                                                    <label for="inputname"> Agency </label>{" "}
                                                    <input
                                                        value={inputs.agency}
                                                        name="agency"
                                                        onChange={(e) => onChange(e)}
                                                    />{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                </div>{" "}
                            </div>{" "}
                            <hr />
                            <div class="display form-heading">
                                <h4 class="m-4"> PROFILE DETAILS </h4>{" "}
                            </div>
                            <div class="d-flex justify-content-center">
                                <div class="container-90">
                                    <div class="form-group d-flex ">
                                        <div class="form-group col-md-4  input-padding">
                                            <label for="inputname"> First Name </label>{" "}
                                            <input
                                                value={inputs.first_name}
                                                name="first_name"
                                                onChange={(e) => onChange(e)}
                                                required
                                            />{" "}
                                        </div>{" "}
                                        <div class="form-group col-md-4  input-padding">
                                            <label for="inputname"> Middle Name </label>{" "}
                                            <input
                                                value={inputs.middle_name}
                                                name="middle_name"
                                                onChange={(e) => onChange(e)}
                                                required
                                            />{" "}
                                        </div>{" "}
                                        <div class="form-group col-md-4  input-padding">
                                            <label for="inputname"> Last Name </label>{" "}
                                            <input
                                                value={inputs.last_name}
                                                name="last_name"
                                                onChange={(e) => onChange(e)}
                                                required

                                            />{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div class="form-group d-flex">
                                        <div class="form-group col-md-4 input-padding">
                                            <label for="dob"> Date of birth </label>{" "}
                                            <input
                                                value={inputs.date_of_birth}
                                                name="date_of_birth"
                                                onChange={(e) => onChange(e)}
                                                required
                                                type="date"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            />{" "}
                                            {/* <Stack
                                    value={inputs.date_of_birth}
                                    name="date_of_birth"
                                    onChange={(e) => onChange(e)}
                                    component="form"
                                    noValidate
                                    spacing={1}
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <TextField
                                      id="date"
                                      type="date"
                                      defaultValue="2017-05-24"
                                      sx={{ width: "100%" }}
                                      InputLabelProps={{
                                        shrink: true,
                                      }}
                                    />
                                  </Stack> */}{" "}
                                        </div>
                                        <div class="form-group col-md-4 input-padding">
                                            <label for="pob"> Place of Birth </label>{" "}
                                            <input
                                                value={inputs.place_of_birth}
                                                name="place_of_birth"
                                                onChange={(e) => onChange(e)}
                                            />{" "}
                                        </div>{" "}
                                        <div class="form-group col-md-4 input-padding">
                                            <label for="national"> Nationality </label>{" "}
                                            <select
                                                value={inputs.nationality}
                                                name="nationality"
                                                onChange={(e) => onChange(e)}
                                                style={{
                                                    height: "50%",
                                                    width: "50%",
                                                    padding: "2px",
                                                    margin: "15px",
                                                }}
                                            >
                                                <option value="Afghanistan"> Afghanistan </option>{" "}
                                                <option value="Åland Islands"> Åland Islands </option>{" "}
                                                <option value="Albania"> Albania </option>{" "}
                                                <option value="Algeria"> Algeria </option>{" "}
                                                <option value="American Samoa"> American Samoa </option>{" "}
                                                <option value="Andorra"> Andorra </option>{" "}
                                                <option value="Angola"> Angola </option>{" "}
                                                <option value="Anguilla"> Anguilla </option>{" "}
                                                <option value="Antarctica"> Antarctica </option>{" "}
                                                <option value="Antigua and Barbuda">
                                                    Antigua and Barbuda{" "}
                                                </option>{" "}
                                                <option value="Argentina"> Argentina </option>{" "}
                                                <option value="Armenia"> Armenia </option>{" "}
                                                <option value="Aruba"> Aruba </option>{" "}
                                                <option value="Australia"> Australia </option>{" "}
                                                <option value="Austria"> Austria </option>{" "}
                                                <option value="Azerbaijan"> Azerbaijan </option>{" "}
                                                <option value="Bahamas"> Bahamas </option>{" "}
                                                <option value="Bahrain"> Bahrain </option>{" "}
                                                <option value="Bangladesh"> Bangladesh </option>{" "}
                                                <option value="Barbados"> Barbados </option>{" "}
                                                <option value="Belarus"> Belarus </option>{" "}
                                                <option value="Belgium"> Belgium </option>{" "}
                                                <option value="Belize"> Belize </option>{" "}
                                                <option value="Benin"> Benin </option>{" "}
                                                <option value="Bermuda"> Bermuda </option>{" "}
                                                <option value="Bhutan"> Bhutan </option>{" "}
                                                <option value="Bolivia"> Bolivia </option>{" "}
                                                <option value="Bosnia and Herzegovina">
                                                    Bosnia and Herzegovina{" "}
                                                </option>{" "}
                                                <option value="Botswana"> Botswana </option>{" "}
                                                <option value="Bouvet Island"> Bouvet Island </option>{" "}
                                                <option value="Brazil"> Brazil </option>{" "}
                                                <option value="British Indian Ocean Territory">
                                                    British Indian Ocean Territory{" "}
                                                </option>{" "}
                                                <option value="Brunei Darussalam">
                                                    Brunei Darussalam{" "}
                                                </option>{" "}
                                                <option value="Bulgaria"> Bulgaria </option>{" "}
                                                <option value="Burkina Faso"> Burkina Faso </option>{" "}
                                                <option value="Burundi"> Burundi </option>{" "}
                                                <option value="Cambodia"> Cambodia </option>{" "}
                                                <option value="Cameroon"> Cameroon </option>{" "}
                                                <option value="Canada"> Canada </option>{" "}
                                                <option value="Cape Verde"> Cape Verde </option>{" "}
                                                <option value="Cayman Islands"> Cayman Islands </option>{" "}
                                                <option value="Central African Republic">
                                                    Central African Republic{" "}
                                                </option>{" "}
                                                <option value="Chad"> Chad </option>{" "}
                                                <option value="Chile"> Chile </option>{" "}
                                                <option value="China"> China </option>{" "}
                                                <option value="Christmas Island">
                                                    Christmas Island{" "}
                                                </option>{" "}
                                                <option value="Cocos (Keeling) Islands">
                                                    Cocos(Keeling) Islands{" "}
                                                </option>{" "}
                                                <option value="Colombia"> Colombia </option>{" "}
                                                <option value="Comoros"> Comoros </option>{" "}
                                                <option value="Congo"> Congo </option>{" "}
                                                <option value="Congo, The Democratic Republic of The">
                                                    Congo, The Democratic Republic of The{" "}
                                                </option>{" "}
                                                <option value="Cook Islands"> Cook Islands </option>{" "}
                                                <option value="Costa Rica"> Costa Rica </option>{" "}
                                                <option value="Cote D'ivoire"> Cote D 'ivoire</option>{" "}
                                                <option value="Croatia"> Croatia </option>{" "}
                                                <option value="Cuba"> Cuba </option>{" "}
                                                <option value="Cyprus"> Cyprus </option>{" "}
                                                <option value="Czech Republic"> Czech Republic </option>{" "}
                                                <option value="Denmark"> Denmark </option>{" "}
                                                <option value="Djibouti"> Djibouti </option>{" "}
                                                <option value="Dominica"> Dominica </option>{" "}
                                                <option value="Dominican Republic">
                                                    Dominican Republic{" "}
                                                </option>{" "}
                                                <option value="Ecuador"> Ecuador </option>{" "}
                                                <option value="Egypt"> Egypt </option>{" "}
                                                <option value="El Salvador"> El Salvador </option>{" "}
                                                <option value="Equatorial Guinea">
                                                    Equatorial Guinea{" "}
                                                </option>{" "}
                                                <option value="Eritrea"> Eritrea </option>{" "}
                                                <option value="Estonia"> Estonia </option>{" "}
                                                <option value="Ethiopia"> Ethiopia </option>{" "}
                                                <option value="Falkland Islands (Malvinas)">
                                                    Falkland Islands(Malvinas){" "}
                                                </option>{" "}
                                                <option value="Faroe Islands"> Faroe Islands </option>{" "}
                                                <option value="Fiji"> Fiji </option>{" "}
                                                <option value="Finland"> Finland </option>{" "}
                                                <option value="France"> France </option>{" "}
                                                <option value="French Guiana"> French Guiana </option>{" "}
                                                <option value="French Polynesia">
                                                    French Polynesia{" "}
                                                </option>{" "}
                                                <option value="French Southern Territories">
                                                    French Southern Territories{" "}
                                                </option>{" "}
                                                <option value="Gabon"> Gabon </option>{" "}
                                                <option value="Gambia"> Gambia </option>{" "}
                                                <option value="Georgia"> Georgia </option>{" "}
                                                <option value="Germany"> Germany </option>{" "}
                                                <option value="Ghana"> Ghana </option>{" "}
                                                <option value="Gibraltar"> Gibraltar </option>{" "}
                                                <option value="Greece"> Greece </option>{" "}
                                                <option value="Greenland"> Greenland </option>{" "}
                                                <option value="Grenada"> Grenada </option>{" "}
                                                <option value="Guadeloupe"> Guadeloupe </option>{" "}
                                                <option value="Guam"> Guam </option>{" "}
                                                <option value="Guatemala"> Guatemala </option>{" "}
                                                <option value="Guernsey"> Guernsey </option>{" "}
                                                <option value="Guinea"> Guinea </option>{" "}
                                                <option value="Guinea-bissau"> Guinea - bissau </option>{" "}
                                                <option value="Guyana"> Guyana </option>{" "}
                                                <option value="Haiti"> Haiti </option>{" "}
                                                <option value="Heard Island and Mcdonald Islands">
                                                    Heard Island and Mcdonald Islands{" "}
                                                </option>{" "}
                                                <option value="Holy See (Vatican City State)">
                                                    Holy See(Vatican City State){" "}
                                                </option>{" "}
                                                <option value="Honduras"> Honduras </option>{" "}
                                                <option value="Hong Kong"> Hong Kong </option>{" "}
                                                <option value="Hungary"> Hungary </option>{" "}
                                                <option value="Iceland"> Iceland </option>{" "}
                                                <option value="India" selected="selected">
                                                    India{" "}
                                                </option>{" "}
                                                <option value="Indonesia"> Indonesia </option>{" "}
                                                <option value="Iran, Islamic Republic of">
                                                    Iran, Islamic Republic of{" "}
                                                </option>{" "}
                                                <option value="Iraq"> Iraq </option>{" "}
                                                <option value="Ireland"> Ireland </option>{" "}
                                                <option value="Isle of Man"> Isle of Man </option>{" "}
                                                <option value="Israel"> Israel </option>{" "}
                                                <option value="Italy"> Italy </option>{" "}
                                                <option value="Jamaica"> Jamaica </option>{" "}
                                                <option value="Japan"> Japan </option>{" "}
                                                <option value="Jersey"> Jersey </option>{" "}
                                                <option value="Jordan"> Jordan </option>{" "}
                                                <option value="Kazakhstan"> Kazakhstan </option>{" "}
                                                <option value="Kenya"> Kenya </option>{" "}
                                                <option value="Kiribati"> Kiribati </option>{" "}
                                                <option value="Korea, Democratic People's Republic of">
                                                    Korea, Democratic People 's Republic of{" "}
                                                </option>{" "}
                                                <option value="Korea, Republic of">
                                                    Korea, Republic of{" "}
                                                </option>{" "}
                                                <option value="Kuwait"> Kuwait </option>{" "}
                                                <option value="Kyrgyzstan"> Kyrgyzstan </option>{" "}
                                                <option value="Lao People's Democratic Republic">
                                                    Lao People 's Democratic Republic{" "}
                                                </option>{" "}
                                                <option value="Latvia"> Latvia </option>{" "}
                                                <option value="Lebanon"> Lebanon </option>{" "}
                                                <option value="Lesotho"> Lesotho </option>{" "}
                                                <option value="Liberia"> Liberia </option>{" "}
                                                <option value="Libyan Arab Jamahiriya">
                                                    Libyan Arab Jamahiriya{" "}
                                                </option>{" "}
                                                <option value="Liechtenstein"> Liechtenstein </option>{" "}
                                                <option value="Lithuania"> Lithuania </option>{" "}
                                                <option value="Luxembourg"> Luxembourg </option>{" "}
                                                <option value="Macao"> Macao </option>{" "}
                                                <option value="Macedonia, The Former Yugoslav Republic of">
                                                    Macedonia, The Former Yugoslav Republic of{" "}
                                                </option>{" "}
                                                <option value="Madagascar"> Madagascar </option>{" "}
                                                <option value="Malawi"> Malawi </option>{" "}
                                                <option value="Malaysia"> Malaysia </option>{" "}
                                                <option value="Maldives"> Maldives </option>{" "}
                                                <option value="Mali"> Mali </option>{" "}
                                                <option value="Malta"> Malta </option>{" "}
                                                <option value="Marshall Islands">
                                                    Marshall Islands{" "}
                                                </option>{" "}
                                                <option value="Martinique"> Martinique </option>{" "}
                                                <option value="Mauritania"> Mauritania </option>{" "}
                                                <option value="Mauritius"> Mauritius </option>{" "}
                                                <option value="Mayotte"> Mayotte </option>{" "}
                                                <option value="Mexico"> Mexico </option>{" "}
                                                <option value="Micronesia, Federated States of">
                                                    Micronesia, Federated States of{" "}
                                                </option>{" "}
                                                <option value="Moldova, Republic of">
                                                    Moldova, Republic of{" "}
                                                </option>{" "}
                                                <option value="Monaco"> Monaco </option>{" "}
                                                <option value="Mongolia"> Mongolia </option>{" "}
                                                <option value="Montenegro"> Montenegro </option>{" "}
                                                <option value="Montserrat"> Montserrat </option>{" "}
                                                <option value="Morocco"> Morocco </option>{" "}
                                                <option value="Mozambique"> Mozambique </option>{" "}
                                                <option value="Myanmar"> Myanmar </option>{" "}
                                                <option value="Namibia"> Namibia </option>{" "}
                                                <option value="Nauru"> Nauru </option>{" "}
                                                <option value="Nepal"> Nepal </option>{" "}
                                                <option value="Netherlands"> Netherlands </option>{" "}
                                                <option value="Netherlands Antilles">
                                                    Netherlands Antilles{" "}
                                                </option>{" "}
                                                <option value="New Caledonia"> New Caledonia </option>{" "}
                                                <option value="New Zealand"> New Zealand </option>{" "}
                                                <option value="Nicaragua"> Nicaragua </option>{" "}
                                                <option value="Niger"> Niger </option>{" "}
                                                <option value="Nigeria"> Nigeria </option>{" "}
                                                <option value="Niue"> Niue </option>{" "}
                                                <option value="Norfolk Island"> Norfolk Island </option>{" "}
                                                <option value="Northern Mariana Islands">
                                                    Northern Mariana Islands{" "}
                                                </option>{" "}
                                                <option value="Norway"> Norway </option>{" "}
                                                <option value="Oman"> Oman </option>{" "}
                                                <option value="Pakistan"> Pakistan </option>{" "}
                                                <option value="Palau"> Palau </option>{" "}
                                                <option value="Palestinian Territory, Occupied">
                                                    Palestinian Territory, Occupied{" "}
                                                </option>{" "}
                                                <option value="Panama"> Panama </option>{" "}
                                                <option value="Papua New Guinea">
                                                    Papua New Guinea{" "}
                                                </option>{" "}
                                                <option value="Paraguay"> Paraguay </option>{" "}
                                                <option value="Peru"> Peru </option>{" "}
                                                <option value="Philippines"> Philippines </option>{" "}
                                                <option value="Pitcairn"> Pitcairn </option>{" "}
                                                <option value="Poland"> Poland </option>{" "}
                                                <option value="Portugal"> Portugal </option>{" "}
                                                <option value="Puerto Rico"> Puerto Rico </option>{" "}
                                                <option value="Qatar"> Qatar </option>{" "}
                                                <option value="Reunion"> Reunion </option>{" "}
                                                <option value="Romania"> Romania </option>{" "}
                                                <option value="Russian Federation">
                                                    Russian Federation{" "}
                                                </option>{" "}
                                                <option value="Rwanda"> Rwanda </option>{" "}
                                                <option value="Saint Helena"> Saint Helena </option>{" "}
                                                <option value="Saint Kitts and Nevis">
                                                    Saint Kitts and Nevis{" "}
                                                </option>{" "}
                                                <option value="Saint Lucia"> Saint Lucia </option>{" "}
                                                <option value="Saint Pierre and Miquelon">
                                                    Saint Pierre and Miquelon{" "}
                                                </option>{" "}
                                                <option value="Saint Vincent and The Grenadines">
                                                    Saint Vincent and The Grenadines{" "}
                                                </option>{" "}
                                                <option value="Samoa"> Samoa </option>{" "}
                                                <option value="San Marino"> San Marino </option>{" "}
                                                <option value="Sao Tome and Principe">
                                                    Sao Tome and Principe{" "}
                                                </option>{" "}
                                                <option value="Saudi Arabia"> Saudi Arabia </option>{" "}
                                                <option value="Senegal"> Senegal </option>{" "}
                                                <option value="Serbia"> Serbia </option>{" "}
                                                <option value="Seychelles"> Seychelles </option>{" "}
                                                <option value="Sierra Leone"> Sierra Leone </option>{" "}
                                                <option value="Singapore"> Singapore </option>{" "}
                                                <option value="Slovakia"> Slovakia </option>{" "}
                                                <option value="Slovenia"> Slovenia </option>{" "}
                                                <option value="Solomon Islands">
                                                    {" "}
                                                    Solomon Islands{" "}
                                                </option>{" "}
                                                <option value="Somalia"> Somalia </option>{" "}
                                                <option value="South Africa"> South Africa </option>{" "}
                                                <option value="South Georgia and The South Sandwich Islands">
                                                    South Georgia and The South Sandwich Islands{" "}
                                                </option>{" "}
                                                <option value="Spain"> Spain </option>{" "}
                                                <option value="Sri Lanka"> Sri Lanka </option>{" "}
                                                <option value="Sudan"> Sudan </option>{" "}
                                                <option value="Suriname"> Suriname </option>{" "}
                                                <option value="Svalbard and Jan Mayen">
                                                    Svalbard and Jan Mayen{" "}
                                                </option>{" "}
                                                <option value="Swaziland"> Swaziland </option>{" "}
                                                <option value="Sweden"> Sweden </option>{" "}
                                                <option value="Switzerland"> Switzerland </option>{" "}
                                                <option value="Syrian Arab Republic">
                                                    Syrian Arab Republic{" "}
                                                </option>{" "}
                                                <option value="Taiwan"> Taiwan </option>{" "}
                                                <option value="Tajikistan"> Tajikistan </option>{" "}
                                                <option value="Tanzania, United Republic of">
                                                    Tanzania, United Republic of{" "}
                                                </option>{" "}
                                                <option value="Thailand"> Thailand </option>{" "}
                                                <option value="Timor-leste"> Timor - leste </option>{" "}
                                                <option value="Togo"> Togo </option>{" "}
                                                <option value="Tokelau"> Tokelau </option>{" "}
                                                <option value="Tonga"> Tonga </option>{" "}
                                                <option value="Trinidad and Tobago">
                                                    Trinidad and Tobago{" "}
                                                </option>{" "}
                                                <option value="Tunisia"> Tunisia </option>{" "}
                                                <option value="Turkey"> Turkey </option>{" "}
                                                <option value="Turkmenistan"> Turkmenistan </option>{" "}
                                                <option value="Turks and Caicos Islands">
                                                    Turks and Caicos Islands{" "}
                                                </option>{" "}
                                                <option value="Tuvalu"> Tuvalu </option>{" "}
                                                <option value="Uganda"> Uganda </option>{" "}
                                                <option value="Ukraine"> Ukraine </option>{" "}
                                                <option value="United Arab Emirates">
                                                    United Arab Emirates{" "}
                                                </option>{" "}
                                                <option value="United Kingdom"> United Kingdom </option>{" "}
                                                <option value="United States"> United States </option>{" "}
                                                <option value="United States Minor Outlying Islands">
                                                    United States Minor Outlying Islands{" "}
                                                </option>{" "}
                                                <option value="Uruguay"> Uruguay </option>{" "}
                                                <option value="Uzbekistan"> Uzbekistan </option>{" "}
                                                <option value="Vanuatu"> Vanuatu </option>{" "}
                                                <option value="Venezuela"> Venezuela </option>{" "}
                                                <option value="Viet Nam"> Viet Nam </option>{" "}
                                                <option value="Virgin Islands, British">
                                                    Virgin Islands, British{" "}
                                                </option>{" "}
                                                <option value="Virgin Islands, U.S.">
                                                    Virgin Islands, U.S.{" "}
                                                </option>{" "}
                                                <option value="Wallis and Futuna">
                                                    Wallis and Futuna{" "}
                                                </option>{" "}
                                                <option value="Western Sahara"> Western Sahara </option>{" "}
                                                <option value="Yemen"> Yemen </option>{" "}
                                                <option value="Zambia"> Zambia </option>{" "}
                                                <option value="Zimbabwe"> Zimbabwe </option>{" "}
                                            </select>{" "}
                                        </div>{" "}
                                    </div>
                                    <div class="form-group d-flex">
                                        <div class="form-group col-md-4 input-padding">
                                            <label for="married"> Maritial Status </label>{" "}
                                            <select
                                                value={inputs.maritial_status}
                                                name="maritial_status"
                                                style={{
                                                    height: "50%",
                                                    width: "50%",
                                                    padding: "2px",
                                                    margin: "15px",
                                                }}
                                                onChange={(e) => onChange(e)}
                                            >
                                                <option value="Single" defaultChecked>
                                                    Single{" "}
                                                </option>{" "}
                                                <option value="Married"> Married </option>{" "}
                                                <option value="Unmarried"> Unmarried </option>{" "}
                                                <option value="Divorced"> Divorced </option>{" "}
                                                <option value="Widow"> Widow </option>{" "}
                                            </select>{" "}
                                        </div>{" "}
                                        <div class="form-group col-md-3 input-padding">
                                            <label for="inputname"> Name of Wife </label>{" "}
                                            <input
                                                value={inputs.name_of_wife}
                                                onChange={(e) => onChange(e)}
                                                name="name_of_wife"
                                            />
                                        </div>
                                        <div class="form-group col-md-2 input-padding">
                                            <label for="inputname"> Relation </label>{" "}
                                            <input
                                                value="Wife"
                                                // onChange={(e) => onChange(e)}
                                                name="relation"
                                            />
                                        </div>{" "}
                                        <div class="form-group col-md-4 input-padding">
                                            <label for="married"> Smoker </label>{" "}
                                            <select
                                                value={inputs.smoker}
                                                name="smoker"
                                                style={{
                                                    height: "50%",
                                                    width: "50%",
                                                    padding: "2px",
                                                    margin: "15px",
                                                }}
                                                onChange={(e) => onChange(e)}
                                            >
                                                <option value="No" selected="selected">
                                                    No{" "}
                                                </option>{" "}
                                                <option value="Yes"> Yes </option>{" "}
                                            </select>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div
                                        class="d-flex row  my-3"
                                        style={{ alignItems: "flex-end" }}
                                    >
                                        <div class="col-md-3 ">
                                            <label> LinkedIn: </label>{" "}
                                            <input
                                                value={inputs.linkedin}
                                                name="linkedin"
                                                onChange={(e) => onChange(e)}
                                            />{" "}
                                        </div>{" "}
                                        <div class="col-md-3 ">
                                            <label> Facebook: </label>{" "}
                                            <input
                                                value={inputs.facebook}
                                                name="facebook"
                                                onChange={(e) => onChange(e)}
                                            />{" "}
                                        </div>{" "}
                                        <div class="col-md-3 ">
                                            <label> Instagram: </label>{" "}
                                            <input
                                                value={inputs.instagram}
                                                name="instagram"
                                                onChange={(e) => onChange(e)}
                                            />{" "}
                                        </div>{" "}
                                        <div class="col-md-3 ">
                                            <label> Twitter: </label>{" "}
                                            <input
                                                value={inputs.twitter}
                                                name="twitter"
                                                onChange={(e) => onChange(e)}
                                            />{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div class="space-2 jumbotron p-3">
                                        <div class="row" style={{ margin: "0 -30px!important" }}>
                                            <div
                                                class="col-md-6"
                                                style={{
                                                    borderRight: "1px solid rgb(232, 232, 232)",
                                                    paddingInline: " 30px",
                                                }}
                                            >
                                                <div>
                                                    <div class="form-group col-md-12  input-padding  ">
                                                        <label for="addr1"> Permanent Address: </label>{" "}
                                                        <input
                                                            value={inputs.permanent_address}
                                                            name="permanent_address"
                                                            onChange={(e) => onChange(e)}
                                                        />{" "}
                                                    </div>
                                                    <div class="d-flex ">
                                                        <div class="form-group col-md-6 input-padding ">
                                                            <label for="inputCity"> City </label>{" "}
                                                            <input
                                                                value={inputs.city_permanent}
                                                                name="city_permanent"
                                                                onChange={(e) => onChange(e)}
                                                            />{" "}
                                                        </div>{" "}
                                                        <div class="form-group col-md-6 input-padding">
                                                            <label for="inputCity"> Pin code </label>{" "}
                                                            <input
                                                                value={inputs.pin_code_permanent}
                                                                name="pin_code_permanent"
                                                                onChange={(e) => onChange(e)}
                                                            />{" "}
                                                        </div>{" "}
                                                    </div>
                                                    <div class="d-flex">
                                                        <div class="form-group col-md-6 input-padding ">
                                                            <label for="phone"> Telephone </label>{" "}
                                                            <input
                                                                value={inputs.telephone_permanent}
                                                                name="telephone_permanent"
                                                                onChange={(e) => onChange(e)}
                                                            />{" "}
                                                        </div>{" "}
                                                        <div class="form-group col-md-6  input-padding">
                                                            <label for="email"> Email 1 </label>{" "}
                                                            <input
                                                                value={inputs.email_present}
                                                                name="email_present"
                                                                onChange={(e) => onChange(e)}
                                                            />{" "}
                                                        </div>{" "}
                                                    </div>
                                                    <div class="form-group col-12 input-padding">
                                                        <label for="airp"> Nearest Domestic Airport </label>{" "}
                                                        <input
                                                            value={inputs.nearest_domestic_airport}
                                                            name="nearest_domestic_airport"
                                                            onChange={(e) => onChange(e)}
                                                        />{" "}
                                                    </div>{" "}
                                                </div>{" "}
                                            </div>
                                            <div class=" col-md-6 " style={{ paddingInline: "30px" }}>
                                                <div>
                                                    <div class="form-group col-md-12 input-padding">
                                                        <label for="addr1"> Present Address: </label>{" "}
                                                        <input
                                                            value={inputs.present_address}
                                                            name="present_address"
                                                            onChange={(e) => onChange(e)}
                                                        />{" "}
                                                    </div>{" "}
                                                    <div class="d-flex">
                                                        <div class="form-group col-md-6 input-padding ">
                                                            <label for="inputCity"> City </label>{" "}
                                                            <input
                                                                value={inputs.city_present}
                                                                name="city_present"
                                                                onChange={(e) => onChange(e)}
                                                            />{" "}
                                                        </div>{" "}
                                                        <div class="form-group col-md-6 input-padding">
                                                            <label for="inputCity"> Pin code </label>{" "}
                                                            <input
                                                                value={inputs.pin_code_present}
                                                                name="pin_code_present"
                                                                onChange={(e) => onChange(e)}
                                                            />{" "}
                                                        </div>{" "}
                                                    </div>
                                                    <div class="d-flex">
                                                        <div class="form-group col-md-6 input-padding ">
                                                            <label for="phone"> Telephone </label>{" "}
                                                            <input
                                                                value={inputs.telephone_present}
                                                                name="telephone_present"
                                                                onChange={(e) => onChange(e)}
                                                            />{" "}
                                                        </div>{" "}
                                                        <div class="form-group col-md-6  input-padding">
                                                            <label for="email"> Email 1 </label>{" "}
                                                            <input
                                                                value={inputs.email_permanent}
                                                                name="email_permanent"
                                                                onChange={(e) => onChange(e)}
                                                            />{" "}
                                                        </div>{" "}
                                                    </div>
                                                    <div class="form-group col-12 input-padding">
                                                        <label for="airp">
                                                            Nearest International Airport{" "}
                                                        </label>{" "}
                                                        <input
                                                            value={inputs.nearest_international_airport}
                                                            name="nearest_international_airport"
                                                            onChange={(e) => onChange(e)}
                                                        />{" "}
                                                    </div>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>
                                    <hr />
                                    <button
                                        disabled={inputs.first_name === "" || inputs.middle_name === "" || inputs.last_name === ""}
                                        class="btn btn-primary btnNext mb-4 pull-right"
                                        onClick={() => {
                                            navigate("/dependents");
                                        }}
                                    >
                                        Next{" "}
                                    </button>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>{" "}
                    </form>{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
};

export default ProfileDetails;
