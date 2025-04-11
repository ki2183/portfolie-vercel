import GetSVG from "../../../../../FOLDER_svg/getSVG"
import "./viewINFO.scss"
import { InfoModal_type, project_information_dto } from "../../../../../projectInformation"
import { useAppDispatch, useAppSelector } from "../../../../../REDUX/hooks"
import { modal_open } from "../../../../../REDUX/Slices/modalSlice"

type ViewINFO_type = {
    informationRef: React.MutableRefObject<(HTMLDivElement | null)[]>
}

function ViewINFO({
    informationRef
}:ViewINFO_type){
    const wh = useAppSelector(store => store.wh);
    return(
        <div className="frame-projectView-info">
            <div className="frame-projectView-info-in f-c-c-s">
                <div className="f-c-c-s projectView-info" style={{marginTop:wh.h/2,gap:"48px"}}>
                    {(project_information_dto && project_information_dto.length > 0) 
                        && project_information_dto.slice().reverse().map((item,idx)=>(
                                <ProejectINFOParts
                                    key={idx}
                                    idx={idx}
                                    informationRef={informationRef}
                                    projectInformation={item}
                                />
                        )
                    )}
                </div>
             </div>
        </div>
    )
}

export default ViewINFO

interface ViewINFOParts_interface extends ViewINFO_type{
    idx:number
    projectInformation:InfoModal_type
}

function ProejectINFOParts({
    idx,
    informationRef,
    projectInformation
}:ViewINFOParts_interface){
    const {link,git,title,stacks,reason,date} = projectInformation
    const {backends,frontends,versionControls} = stacks

    const click_link = (e:React.MouseEvent<HTMLSpanElement>) => window.location.href = link
    const click_git = (e:React.MouseEvent<HTMLSpanElement>) => window.location.href = git
    const dispatch = useAppDispatch()

    const modal_is_open = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        dispatch(modal_open())
    }

    return(
        <div className="f-c-c-c" ref={el => informationRef.current[idx] = el}>
            <div className="projectView-info-in f-c-c-c">
                <span className="projectView-in-title">{title}</span>
                <div className="f-c-c-c">
                    <span>{reason[1]}</span>
                </div>
            </div>
            <div className="projectView-info-link">
                <div>
                    <span>git:</span>
                    <span onClick={click_git}>{git}</span>
                </div>
                <div>
                    <span>link:</span>
                    <span onClick={click_link}>{link}</span>
                </div>
            </div>
        
            <div className="projectView-info-date f-r-c-s">
                <span>기간:</span>
                <span>{date}</span>
            </div>
        <div className="projectView-info-skill-set f-c-s-s">
            {
                frontends && (
                    <div className=" f-r-c-s">
                        {
                            frontends.map((item,idx)=>(
                                <span key={idx} className="f-r-c-c">
                                    <GetSVG src={item.src} class_name={item.class_name}/>
                                    <span className={item.not_mine ? "modal-not-mine":""}>{item.title}</span>
                                </span>   
                            ))
                        }
                           
                    </div>
                )
            }
                
            {
                backends && (
                    <div className="f-r-c-s">
                        {
                            backends.map((item,idx)=>(
                                <span key={idx} className="f-r-c-c">
                                    <GetSVG src={item.src} class_name={item.class_name}/>
                                    <span className={item.not_mine ? "modal-not-mine":""}>{item.title}</span>
                                </span>   
                            ))
                        }
                           
                    </div>
                )
            }
            {
                versionControls && (
                    <div className="f-r-c-s">
                        {
                            versionControls.map((item,idx)=>(
                                <span key={idx} className="f-r-c-c">
                                    <GetSVG src={item.src} class_name={item.class_name}/>
                                    <span>{item.title}</span>
                                </span>   
                            ))
                        }
                           
                    </div>
                )
            }
            </div>

            {/* <button onClick={modal_is_open} className="projectButton text-color">자세히보기</button> */}
        
    </div>
    )
}