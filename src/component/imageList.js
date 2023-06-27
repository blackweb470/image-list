import React from "react";

const ImageList = (props) => {
   console.log(props)
   const images = props.image.map((images) => {
return <div key={images.id}>
    <img src={images.webformatURL}  alt=""/>
</div>
    })
    return(
        <div style={{display: "grid", gridTemplateColumns: "auto auto", border: "2px solid white"}}>
          {images}
        </div>
    )
}

export default ImageList;