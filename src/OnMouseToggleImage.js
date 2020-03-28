import React, { useRef } from 'react';

const OnMouseToggleImage=({primaryImg,secondaryImg})=>{
    const imageRef=useRef(null);
    return(
        <div>
            <img 
            onMouseOver={()=>{imageRef.current.src=secondaryImg;
            }}
            onMouseLeave={()=>{imageRef.current.src=primaryImg;
            }}
            src={primaryImg} alt='' ref={imageRef}/>
        </div>
    );
};

export default OnMouseToggleImage;