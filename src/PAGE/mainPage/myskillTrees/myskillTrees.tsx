import "./myskillTrees.scss"
import '../../../flex.scss'
import "../../../font.scss"
import { ReactNode, useEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"
import { hookAnimation } from "./hooks"
import GetSVG from "../../../FOLDER_svg/getSVG"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppSelector } from "../../../REDUX/hooks"
gsap.registerPlugin(ScrollTrigger)

function MyskillTrees(){
    const containerRef = useRef<HTMLDivElement>(null)

    return(
        <div className="container-myskilltrees" ref={containerRef}>
            <AboutMe />
            <AboutFrontend />
            <AboutBackend />
            <AboutVersionControl />
        </div>
    )
}

export default MyskillTrees;

function AboutMe() {
    const {theme} = useAppSelector(state => state.theme);

    return (
            <AboutFrame 
                y={-50}
                title={"about-me"}
                class_name_in="container-aboutme-in"
                class_name_out="container-aboutme-out"
            >
                    <ol className="fcss">
                        <li>
                            <span>1</span> 
                            <span>
                                안녕하세요! 저는 프론트엔드 신입개발자 <span className={theme === "dark"?"green":"blue"}>김기준</span>입니다.
                            </span>
                        </li>
                        <li>
                            <span>2</span>
                            <span> 저는 인터렉티브 웹에 흥미를 갖고 프런트엔드 공부를 시작했습니다. </span>

                        </li>
                        <li>
                            <span>3</span>
                            <span> 사용자들이 만족할만한 ux/ui를 만들 수 있는 사람이 되겠습니다.</span>
                        </li>                        
                    </ol>
            </AboutFrame>
    )
}

function AboutFrontend(){
    const svgArr = [
        {
            src:"html",
            name:"html",
        },{
            src:"css",
            name:"css"
        },{
            src:"js",
            name:"javascript"
        },{
            src:"typescript",
            name:"typescript"
        },{
            src:"react",
            name:"react"
        },
        {
            src:"nextjs",
            name:"nextjs"
        },{
            src:"react-query",
            name:"react-query"
        },{
            src:"redux",
            name:"redux"
        },{
            src:"recoil",
            name:"recoil"
        },{
            src:"scss",
            name:"scss"
        },{
            src:"tailwind",
            name:"tailwind"
        }
    ]

    return (
        <AboutFrame 
                y={70}
                title={"frontend-me"}
                class_name_in="container-frontend-in"
                class_name_out="container-frontend-out"
            >
                <ol className="fcsc">
                    {
                        (svgArr && svgArr.length > 0) && svgArr.map((item,idx)=>(
                            <li className="frcc" key={idx}>
                            <GetSVG class_name="tree-icon" src={item.src}/>
                            <span>{item.name}</span>
                        </li>
                        ))
                    }

                </ol>   
        </AboutFrame>
    )
}

function AboutBackend(){
    const svgArr = [
        {
            src:"mongodb",
            name:"mongoDB",
            baseColor:"none"
        },{
            src:"aws",
            name:"aws",
            baseColor:"base-white-svg"
        },{
            src:"vercel",
            name:"vercel",
            baseColor:"base-white-svg"
        }
    ]

    return (
        <AboutFrame 
                x={-300}
                title={"backend-deploy-me"}
                class_name_in="container-backend-in"
                class_name_out="container-backend-out"
            >
            <ol className="fcsc">
                {
                    (svgArr && svgArr.length > 0) && svgArr.map((item,idx)=>(
                        <li className="frcc" key={idx}>
                        <GetSVG class_name={item.baseColor} src={item.src}/>
                        <span>{item.name}</span>
                    </li>
                    ))
                }

            </ol>   
        </AboutFrame>
    )
}

function AboutVersionControl(){
    
    const svgArr = [
        {
            src:"git",
            name:"git",
            baseColor:""
        },{
            src:"github",
            name:"github",
            baseColor:"base-white-svg"
        }
    ]

    return (
        <AboutFrame 
                y={-20}
                x={-550}
                title={"version-control-me"}
                class_name_in="container-vc-in"
                class_name_out="container-vc-out"
            >
            <ol className="fcsc">
                {
                    (svgArr && svgArr.length > 0) && svgArr.map((item,idx)=>(
                        <li className="frcc" key={idx}>
                        <GetSVG class_name={item.baseColor} src={item.src}/>
                        <span>{item.name}</span>
                    </li>
                    ))
                }

            </ol>   
        </AboutFrame>
    )
}


type AboutFrame_type = {
    x?:number,
    y?:number,
    title:string
    children:ReactNode
    class_name_in:string
    class_name_out:string
}

function AboutFrame({
    x,
    y,
    title,
    children,
    class_name_in,
    class_name_out
}:AboutFrame_type){
    const wh = useAppSelector(store => store.wh);
    const inRef = useRef<HTMLDivElement>(null)
    const outRef = useRef<HTMLDivElement>(null)
    const {onLeave,onMove} = hookAnimation({outRef,inRef})
    const {window,tree_info_border} = useAppSelector(state => state.theme)
 
    useGSAP(()=>{
        outRef.current?.addEventListener('mousemove',onMove)
        outRef.current?.addEventListener('mouseleave',onLeave)
        return()=>{
            outRef.current?.removeEventListener('mousemove',onMove)
            outRef.current?.removeEventListener('mouseleave',onLeave)
        }
    },{dependencies:[wh]})

    const ani = () => {
        const tl = gsap.from(outRef.current,{
            x:x,
            y:y,
            duration: 1,
            scrollTrigger:{
                scrub:1,
                trigger: outRef.current,
                start: `0% 80%`,
                end: `100% 80%`,
                toggleActions:"restart none reverce none"
            }
        })
        return tl
    }

    useEffect(()=>{
        ani()
        return ()=>{
            ani().kill()
        }    
    },[wh])

    
    return (
        <div 
            ref={outRef}
            className={`container-about-out ${class_name_out}`}>
                <div ref={inRef} className={`container-about-in ${class_name_in}`}
                    style={{background:window}}
                >
                    <div>
                        
                        <div className="frcc">
                            <div/>
                        </div>
                        <span>{title}</span>
                    </div>
                    {children}
                </div>
        </div>
    )
}
