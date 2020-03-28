import React ,{useEffect, useState}from 'react'
const ImageTogglerOnScroll=({primaryImg,secondaryImg})=>{
    useEffect(()=>{
        window.addEventListener("scroll",scrollHandler);
        return(
            ()=>{
                window.removeEventListener("scroll",scrollHandler);
            }
        );
    });
    const [inView,setInView]=useState(false);
    const inView=()=>{
        if(imageRef.current){
            const rect=imageRef.current.getBoundingClientReact();
            return rect.top>=0 && rect.buttom<=window.innerHeight;
        }
        return false;
    };
    const scrollHandler=()=>{
        setInView(()=>{
            return isInView();})
    }
return(
    <img 
    src={inView?secondaryImg:primaryImg}
    alt=''  ref={imageRef}/>
);
};

export default ImageTogglerOnScroll;