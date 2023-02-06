import React, { useEffect, useState } from "react";
import FormDetailsCard from "../sub-components/FormDetailsCard";

function Admin() {



    const [forms, setForms] = useState([]);
    const getForms = async () => {
        const response = await fetch("http://206.189.143.226:5000/admin/forms", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });
        let parseRes = await response.json();
        //console.log(parseRes);
        setForms(parseRes);
    };

    useEffect(() => {
        getForms();
    }, [])

    return (<
        div > {
            forms.map((ele, key) => {
                return (<
                    FormDetailsCard key={key}
                    id={ele._id}
                    name={ele.first_name + " " + ele.middle_name + " " + ele.last_name}
                    present_rank={ele.present_rank}
                    rank_applied={ele.rank_applied}
                    getForms={
                        () => getForms()}
                />
                );
            })
        }

        <
        /div>
        );
}

        export default Admin;