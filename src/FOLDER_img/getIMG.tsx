import Dapp from "./Dapp.webp"
import musicApp from "./music.webp"
import memo from "./memo.webp"
import timeline from "./timeline.webp"
import geosantech from "./geasantech.webp"
import portfolie from "./portfolie.webp"

type GetIMG_type = {
    src:string
}

function GetIMG({src}:GetIMG_type){

    let src_ = ""
    if(src === "Dapp")
        src_ = Dapp
    else if(src === "music")
        src_ = musicApp
    else if(src === "memo")
        src_ = memo
    else if(src === "timeline")
        src_ = timeline
    else if(src === "geosantech")
        src_ = geosantech
    else if(src === "portfolie")
        src_ = portfolie
    return (
        <img src={src_}/>
    )
}

export default GetIMG