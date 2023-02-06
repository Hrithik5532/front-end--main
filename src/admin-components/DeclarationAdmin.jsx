import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SidebarAdmin from "../components/SideBarAdmin";

const DeclarationAdmin = ({ inputs, setInputs }) => {
    const [imgFile, setImgFile] = useState({
        formal_photo: inputs.formal_photo,
        signature_photo: inputs.signature_photo,
    });

    const {id} = useParams();
    const navigate = useNavigate();
    const [file, setFile] = useState({
        formal_photo: "",
        signature_photo: "",
    });

    const onFormChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleFileChange = (event) => {
        setFile({ ...file, [event.target.name]: event.target.files });
        //console.log(file.formal_photo);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        let id = event.target.id;
        // for (var x = 0; x < file.length; x++) {
        data.append("file", file[`${id}`][0]);
        // }
        axios.post("http://206.189.143.226:5000/upload/file", data).then((res) => {
            //console.log(res.data);
            setImgFile({
                ...imgFile,
                [event.target.id]: "http://206.189.143.226:5000/public/images/" + res.data.filename,
            });
            setInputs({
                ...inputs,
                [event.target.id]: "http://206.189.143.226:5000/public/images/" + res.data.filename,
            });
        });
        //console.log(inputs.formal_photo);
    };

    const updateForm = async (e) => {
        e.preventDefault();
        const query = localStorage.marine_form_id;

        const response = await fetch(
            `http://206.189.143.226:5000/admin/form/update/${query}}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputs),
        }
        );

        const parseRes = await response.json();
        console.log(parseRes);
    };

    return (
        <div className="d-flex ms-3 py-3 flex-row-reverse" >
            <SidebarAdmin />
            <div style={
                { width: "100%" }} >
                <div class="rounded-5 shadow p-4" >
                    <h4 > DECLARATION </h4>
                    <br />
                    <p class="jumbotron p-3" >
                        I declare that the information given by me in filling up this form to the best of my knowledge are true complete.I also declare that the documents submitted to NAUTICAL MARINE MANAGEMENT SERVICES PVT.LTD.Are genuine, given and signed by the persons whose names appear on them.Any false declaration may render me liable
                        for termination or dismissal </p>

                    <div class="row my-3"
                        style={
                            { alignItems: "flex-end" }} >
                        <div class="col-md-4" >
                            <label > Date: </label>{" "}

                            <input type="date"
                                name="declaration_date"
                                value={inputs.declaration_date}
                                onChange={
                                    (e) => onFormChange(e)}
                            /> </div>

                        <div class="col-md-4" >
                            <form >
                                <div className="form-group" >
                                    <label htmlFor="file" > Upload Formal Photo: </label> <                                            input className="form-control-file mb-3"
                                        type="file"
                                        id="file"
                                        name="formal_photo"
                                        onChange={
                                            (e) => handleFileChange(e)}
                                    />

                                    <button className="btn btn-primary mt-3"
                                        id="formal_photo"
                                        onClick={
                                            (e) => handleSubmit(e)} >
                                        Upload </button> </div> </form> <div >
                                <                                                    img src={imgFile.formal_photo}
                                    width={100}
                                    height={100}
                                    alt="img" /
                                >
                            </div> </div>

                        <div class="col-md-4" >
                            <label >
                                Click on the "Choose File"
                                button to upload Signature of applicant:
                            </label>{" "} <                                                            input type="file"
                                name="signature_photo"
                                onChange={
                                    (e) => handleFileChange(e)}
                            /> <button className="btn btn-primary mt-3"
                                id="signature_photo"
                                onClick={
                                    (e) => handleSubmit(e)} >
                                Upload </button> <div >
                                <                                                                    img src={imgFile.signature_photo}
                                    width={100}
                                    height={100}
                                    alt="img" /
                                >
                            </div> </div> </div> <                                                                    hr class="mt-3" />
                    <div class="end-tab" >
                        <button class="btn btn-primary btnPrevious17"
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    navigate('/admin/edit/onshoreservice')
                                }
                            } >
                            Previous </button>
                        <button href="#myModal" toggle="modal"
                            class="btn btn-success nautical-submit trigger-btn"
                            type="submit"
                            title="Send"
                            onClick={
                                (e) => {
                                    //console.log("i was here");
                                    updateForm(e);
                                }
                            } >
                            Send </button> </div> </div> </div> { /* modal */} <                                                                            div id="myModal"
                                class="modal fade"
                                keyboard="false"
                                backdrop="static" >
                <div class="modal-dialog modal-confirm" >
                    <div class="modal-content" >
                        <div class="modal-header" >
                            <div class="icon-box" >
                                <i class="material-icons" > & #xE876; </i> </div>				 <h4 class="modal-title w-100" > Awesome! </h4>	 </div> <div class="modal-body" >
                            <p class="text-center" > Your Form has been Edited Successfully </p> </div> <                                                                                                            div class="modal-footer"

                            >
                            <a class="btn btn-success btn-block"
                                href="https://nauticalglobal.com/index.html" >
                                OK </a> </div> </div> </div> </div>  { /* modal */} </div>

    );
};

export default DeclarationAdmin;