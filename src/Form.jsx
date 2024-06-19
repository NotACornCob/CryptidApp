import { useEffect, useState } from "react";
import FormComponent from "./Components/FormComponent"
import UserCryptids from "./Components/FormComponent"
import FormSubmissionDisplay from "./Components/FormSubmissionDisplay"
 
function Form () {
    const [submittedData, setSubmittedData] = useState("")
    const [cryptidName, setCryptidName] = useState("")
    const [cryptidImage, setCryptidImage] = useState("")
    const [cryptidLocation, setCryptidLocation] = useState("")
    const [cryptidDetails, setCryptidDetails] = useState("")
    const [date, setDate] = useState("")
    
    const nameHandler = (e) => {
        setCryptidName(e.target.value);
    }
    
    const imageHandler = (e) => {
        setCryptidImage(e.target.value)
    }
    
    const locationHandler = (e) => {
        setCryptidLocation(e.target.value)
    }
    
    const detailHandler = (e) => {
    setCryptidDetails(e.target.value)
    }

    const dateHandler = (e) => {
      setDate(e.target.value)
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        const formData = {
          name: cryptidName || "Slender Man",
          image: cryptidImage || "http://127.0.0.1:5173/Assets/slenderman.jpg",
          location: cryptidLocation || "Appalachia",
          description: cryptidDetails || "A creepypasta is a horror-related legend which has been shared around the Internet. The term creepypasta has since become a catch-all term for any horror content posted onto the Internet. These entries are often brief, user-generated, paranormal stories that are intended to frighten readers. The subjects of creepypasta vary widely and can include topics such as ghosts, cryptids, murder, suicide, zombies, aliens, rituals to summon entities, haunted television shows, and video games. Creepypastas range in length from a single paragraph to extended multi-part series that can span multiple media types, some lasting for years.",
          lastSighting: date || "6/19/2024",
          likes: 0,
          additionalInfo: "A creepypasta is a horror-related legend which has been shared around the Internet. The term creepypasta has since become a catch-all term for any horror content posted onto the Internet. These entries are often brief, user-generated, paranormal stories that are intended to frighten readers. The subjects of creepypasta vary widely and can include topics such as ghosts, cryptids, murder, suicide, zombies, aliens, rituals to summon entities, haunted television shows, and video games. Creepypastas range in length from a single paragraph to extended multi-part series that can span multiple media types, some lasting for years."
        };
        fetch("http://localhost:3000/Cryptids", {
          method: "POST",
          headers: {
            "Content-Type": "Application/JSON",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((newCryptid) => 
            {setSubmittedData(newCryptid)
            setCryptidName("");
            setCryptidImage("");
            setCryptidLocation("");
            setCryptidDetails("");                      
          })
      };

      

return <div>
< FormComponent onFormSubmit={SubmitHandler} dateHandler={dateHandler} nameHandler={nameHandler} imageHandler={imageHandler} locationHandler={locationHandler} detailHandler={detailHandler} />
< FormSubmissionDisplay submittedData={submittedData} />
</div>
}
export default Form;