import React from "react";
import Videoitem from "./VideoItem";


const VideoList = ({videos}) =>{

 const renderedList =   videos.map((video)=>{

        return<Videoitem video={video}/>
    })

return<div className="ui relaxed divided list">{renderedList}</div>

};



export default VideoList;