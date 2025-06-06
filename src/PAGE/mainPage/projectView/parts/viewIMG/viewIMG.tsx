import "./viewIMG.scss"

import { project_information_dto } from "../../../../../projectInformation"
import { modal_open } from "../../../../../REDUX/Slices/modalSlice"
import { useAppDispatch } from "../../../../../REDUX/hooks"
import GetIMG from "../../../../../FOLDER_img/getIMG"
import { useLayoutEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
type ViewIMG_type ={
    imgRef: React.MutableRefObject<(HTMLDivElement | null)[]>
}

function ViewIMG({
    imgRef,

}:ViewIMG_type){

    // useLayoutEffect(()=>{
    //     gsap.set("#triangle1",{
    //         skewY:9,
    //         rotateY:-9,
            
    //     })
    // },[])
    
    // useGSAP(()=>{
    //     gsap.to("#triangle1",{
    //         opacity:0,
    //         repeat:Infinity,
    //         duration:4,
    //     })
    // },[])

    return (
        <>
            <div className="frame-projectView-img f-c-c-c" >
                <div id="triangle12"/>
                <div>
                    {
                        (project_information_dto && project_information_dto.length > 0) &&
                            project_information_dto.slice().reverse().map((item,idx)=>(
                                <ViewIMGPart
                                    key={idx}
                                    idx={idx}
                                    src={item.img}
                                    imgRef={imgRef}                                           
                                />
                            ))
                    }
                </div>
            </div>
        </>
    ) 
}

export default ViewIMG

interface ViewIMGPart_type extends ViewIMG_type {
    src:string
    idx:number
}

function ViewIMGPart({
    idx,
    src,
    imgRef
}:ViewIMGPart_type){
    const dispatch = useAppDispatch()

    const modal_is_open = () =>{
        // dispatch(modal_open())
    }

    return (
        <div className="projectView-img" ref={el => imgRef.current[idx] = el}>
            <div onClick={(()=>{modal_is_open()})}>
                <GetIMG src={src}/>
                <GetIMG src={src}/>
            </div>
        </div>
    )
}