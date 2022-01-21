
import React from "react"
import Content from "./Content"
import Avatar from "./Avatar"
import speakerBorder from "../../assets/images/designs/speakerBorder.svg";
import telephone from "../../assets/images/designs/telephone.svg";

const TelephoneAvatar = ({image}) => {
    return (
        <Avatar style={{position: "relative",
                            top: "0",
                            left: "0",
                            width: "50%",
                            }}>
                <img style={{width:"330px",
                            borderImage:"../../../public/static/speakerBorder.svg",
                            position: "relative",
                            top: "0",
                            left: "0",
                            }} 
                    src = {speakerBorder}/>
                <img style={{width:"303px",
                            position: "absolute",
                            top: "13px",
                            left: "13px",
                            zIndex:"1",
                            borderRadius: "50%"
                            }} 
                    src={image}/>
                <img style={{width:"380px",
                            position: "absolute",
                            top: "100px",
                            left: "-32px",
                            zIndex: "2"
                            }} 
                    src={telephone}/>
            </Avatar>
    )
}

export default TelephoneAvatar;