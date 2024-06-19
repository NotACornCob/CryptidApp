import { useEffect, useState } from "react";

function FormSubmissionDisplay ({submittedData}) {
    
    return submittedData ? <div>
        <p>'Data Submitted!'</p>
        <h2>{submittedData.name}</h2>
        <img className="CryptidImg" src={submittedData.image}/>
        <p>Location: {submittedData.location}</p>
        <div><p><b>Latest Sighting: {submittedData.lastSighting}</b></p></div>
        <p>{submittedData.description}</p></div> : ''

}

export default FormSubmissionDisplay;