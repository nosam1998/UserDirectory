import React from "react";
import "./style.css";

function EmpDetails(props) {
    // console.log(props.results);
    return (

        <tr key={props.id}>
            <td><img alt={props.name} src={props.image}/></td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
        // <div className="card">
        //   <div className="img-container">
        //     <img alt={props.name} src={props.image} />
        //   </div>
        //   <div className="content">
        //     <ul>
        //       <li>
        //         <strong>Name:</strong> {props.name}
        //       </li>
        //       <li>
        //         <strong>Occupation:</strong> {props.occupation}
        //       </li>
        //       <li>
        //         <strong>Location:</strong> {props.location}
        //       </li>
        //     </ul>
        //   </div>
        //   <span onClick={() => props.removeFriend(props.id)} className="remove">
        //     𝘅
        //   </span>
        // </div>
    );
}

export default EmpDetails;
