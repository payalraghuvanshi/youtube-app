import React from "react";

const Videoitem = ({video}) =>{
   console.log(video)
   return( 
   
   <div className=" video-item item"> <img className="ui image" src={video.snippet.thumbnails.medium.url} />
   <div className="content">
  <div className="header"> {video.snippet.tittle}</div> 
   </div>
  
   
   
   </div>)


};

export default Videoitem;
