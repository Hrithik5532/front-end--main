import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import { useSearchParams } from "react-router-dom";


function EditPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate();
    // const [loading, setLoading] = useState(true);
    // const [curQ, setCurQ] = (searchParams.get("q"));
    // const [inputs, setInputs] = useState({
    //   kin_array: [],
    //   on_shore: [],
    //   special_experience: [],
    // });
    // const getDetails = async () => {
    //   const query = localStorage.marine_form_id;
    //   //console.log(query);
    //   const response = await fetch(
    //     `206.189.143.226:5000/admin/form/${query}`,
    //     {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const parseRes = await response.json();
    //   //console.log("cowwww");
    //   //console.log("i was here", parseRes.kin_array);
    //   //console.log(parseRes, "after death");
    //   setInputs(parseRes);
    //   setLoading(false);
    // };
    // // getDetails();

    // const updateForm = async (e) => {
    //   e.preventDefault();
    //   const query = localStorage.marine_form_id;

    //   const response = await fetch(
    //     `206.189.143.226:5000/admin/form/update/${query}`,
    //     {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(inputs),
    //     }
    //   );

    //   const parseRes = await response.json();
    //   //console.log(parseRes);
    // };

    // const setParams = () => {

    // }
    // useEffect(() => {


    // }, []);
    useEffect(() => {

        const query = searchParams.get("q");
        //console.log(query, "here");
        localStorage.setItem("marine_form_id", query);
        // searchParams.delete("q");

        // setSearchParams(searchParams);
        navigate('/admin/edit/profile');
        // setTimeout(() => {
        // }, 2000)
    }, []);

    return <div > </div>

}

export default EditPage;