import { useEffect, useState } from "react";
 
function FormComponent({onFormSubmit, nameHandler, imageHandler, locationHandler, detailHandler, dateHandler}) {

return <div>
<div className="formHeader"><h2>Report Your Sighting</h2></div>
<div className="new-plant-form">
<form onSubmit={onFormSubmit}>
  <input className="CryptidName" type="text" name="name" placeholder="Cryptid Name" onChange={nameHandler} />
  <input className="CryptidImage" type="text" name="image" placeholder="Image URL" onChange={imageHandler} />
  <input className="CryptidLocation" type="text" name="location" placeholder="Location" onChange={locationHandler} />
  <input className="sightingDate" type="date" name="date" placeholder="Date" onChange={dateHandler}/>
  <input type="text" className="CryptidDetails" name="details" placeholder="Additional Details" onChange={detailHandler} />
  <div className="formButton"><button id="submit" type="submit" >Add Sighting</button></div>
</form>
</div>
</div>
}

export default FormComponent;