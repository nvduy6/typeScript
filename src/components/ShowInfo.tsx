import React from "react";
type ShowInfoProps={
    name:string,
    age:number
}
const ShowInfo = ({name,age}:ShowInfoProps)=>{
    return (
        <div>
            <h1>Helo{name}</h1>
            <p>Age{age}</p>
            </div>
    )
}
export default ShowInfo