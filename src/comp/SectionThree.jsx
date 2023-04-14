import React, { useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed";

export default function SectionThree() {
    const [youtubeVideo, setyoutubeVideo] = useState(false)
  return (
    <div
      className="container my-3 py-5"
      style={{
        backgroundImage: `url(./images/3.jpg)`,
        backgroundSize:"",
        backgroundOrigin:"border-box",
        backgroundClip:"border-box",
        backgroundAttachment:"fixed"
      }}
    >
      <div className="d-flex flex-column text-center">
        <h1 className="title text-center">
          When a man's stomach is full it makes no difference whether he is rich
          or poor.
        </h1>
        <p className="p-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus.
        </p>
        <button onClick={()=>{
            setyoutubeVideo(true)
        }} className="custom-btn d-block m-auto ">watch our story</button>
      </div>
      {youtubeVideo && <YoutubeEmbed embedId={'4eweEsiiJhI'} setyoutubeVideo={setyoutubeVideo}/>}
    </div>

  );
}
