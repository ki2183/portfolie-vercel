import { ModalStack_type } from "./COMPONENTS/modal/modal"

export type projectInformation_type = {
    title:string
    info:string[]
    img:string,
    link:string,
    frontend:string[],
    backend?:string[],
    versionControl:string[]
}

export type InfoModal_type = {
    img:string,
    title:string,
    link:string,
    git:string,
    feature:string[],
    reason:string[],
    date:string,
    stacks:ModalStack_type,
    reflection:string[]
}
export const project_information_dto = [
    {
        img:"Dapp",
        title:"배달웹 프로젝트",
        link:"https://d-app-frontend-9610p28mo-gijoonkims-projects.vercel.app/login",
        git:"https://d-app-frontend.vercel.app/",
        reason:["배달앱/웹의 전반적인 기능을 구현 해보기 위해서 만든 사이트입니다.",
        "당시 배달의민족과 요기요 같은 배달 플랫폼이 뜨거웠기에 한 번 구현해 보고자 프로젝트를 진행해 보았습니다."
    ],
        feature:["로그인","정보수정","회원탈퇴","카테고리","가게목록","주문","주문확인"],
        stacks:{
            frontends:[
                {src:"html",title:"html"},
                {src:"css",title:"css"},
                {src:"js",title:"javascript"},
                {src:"react",title:"react"}
            ],
            backends: [
                {src:"aws",title:"aws",not_mine:true},
                {src:"spring",title:"spring",not_mine:true},
                {src:"h2",title:"h2",class_name:"base-black-svg",not_mine:true},
            ],
            versionControls: [
                {src:"git",title:"git"},
                {src:"github",title:"github"},
                {src:"jira",title:"jira"}
            ],
        },
        reflection:[
            '당시 SPA라이브러리나 프레임워크를 조금씩 공부해보았는데, 당시 같이 진행했던 팀원의 조언을 듣고 큰 커뮤니티와 활발한 생태계를 가지고 있는 React를 사용하였습니다.',
            'AWS프리티어에 한 번에 빌드 하고 배포하게 된다면 한 달 플랜을 모두 무료로 이용할 수 있으나, 인스턴스를 두 개로 나눠서 배포하게 된다면 무료 제공 시간을 두 배로 할애하여 추가 비용을 내기 때문입니다. 때문에 merge 과정에서 오류가 자주 나는 것을 감안하더라도 묶어서 배포했습니다.'
        ],
        date:"2023/03 ~ 2023/06",
    },
    {
        img:"timeline",
        title:"한신대 수강 신청 추천 웹 프로젝트",
        link:"https://resister-course-vercel.vercel.app/",
        git:"https://github.com/ki2183/Resister_Course",
        reason:[
            "한신대 시간표 추천 웹사이트 입니다.",
            "일부 타학교에는 수강신청표를 추천해주는 기능이 있는데 한신대 수강신청 앱에는 시간표를 추천해주는 기능이 없어, 학생들이 쉽게 시간표를 구성할 수 있도록 팀과 함께 한신대 수강신청 웹사이트를 개발했습니다.",
            "이 웹사이트는 소프트웨어융합학부생을 타겟으로 만들었으며 수강 희망 과목, 남은 학점과 몇 가지 질문을 응답하면 API로 시간표 데이터를 받고 본인이 원하는대로 수정할 수 있습니다.."
        ],
        feature:["로그인","정보수정","메뉴","시간표 목록","시간표 수정","시간표 수정"],
        stacks:{
            frontends:[
                {src:"html",title:"html"},
                {src:"css",title:"css"},
                {src:"js",title:"javascript"},
                {src:"react",title:"react"}
            ],
            backends: [
                {src:"aws",title:"aws",not_mine:true,class_name:"base-white-svg"},
                {src:"nodejs",title:"nodejs",not_mine:true,class_name:"base-black-svg"},
                {src:"mysql",title:"mysql",class_name:"base-white-svg",not_mine:true},
            ],
            versionControls: [
                {src:"git",title:"git"},
                {src:"github",title:"github",class_name:"base-white-svg"},
            ],
        },
        reflection:[
            '이 프로젝트를 진행하며 이전 프로젝트에서 부족했던 React Hook의 개념을 다시 정립하는 계기가 되었습니다. 특히 useEffect와 useState의 활용에 대해 더 깊이 이해하게 되었고 컴포넌트 상태관리와 라이프사이클 메서드의 중요성을 다시 한 번 느꼈습니다.',
            '주제 컨텐츠가 다소 적었고, 학생들이 사용할 것을 염두에 두고 만들어야 했기 때문에 UI/UX를 더욱 신경 써서 만들어야 했습니다. 예를 들어 질문을 읽을 때 사용자가 집중력을 높이기 위해서 스크롤 방향을 상하가 아닌 좌우로 바꾼다던지 사용자 경험을 개선하기 위해 gsap 라이브러리를 이용한 반응형 다지인과 스크롤 트리거를 이용하여 만든 인터페이스를 구현하였습니다. 예를 들어서  이를 경험을 통해 UI/UX설계 능력이 조금 향상되었습니다',
            '비록 완성도가 부족하여 학생들에게 배포시도는 못했으나 더 나은 UX/UI를 위해서 gsap, react-dnd등 여러 라이브러리를 활용해 볼 수 있는 기회를 얻었습니다.'
        ],
        date:"2023/09 ~ 2023/10",
    },{
        img:"memo",
        title:"메모 웹",
        link:"https://memo-vercel.vercel.app/",
        git:"https://github.com/ki2183/memo-vercel",
        reason:[
            "메모 웹사이트입니다.",
            "이 프로젝트는 메모 웹사이트를 개발하는 것이었습니다. 첫 프로젝트부터 벨로그나 노션 같은 텍스트 에디터를 만들어 리뷰/댓글 작성 기능에 적용하고 싶었으나, 당시 실력 부족으로 구현하지 못했습니다. 그 아쉬움에 만든 프로젝트입니다.",
        ],
        feature:["로그인","메모생성","메모저장","메모수정","메모목록","메모 이미지 추가"],
        stacks:{
            frontends:[
                {src:"html",title:"html"},
                {src:"css",title:"css"},
                {src:"typescript",title:"typescript"},
                {src:"react",title:"react"},
                {src:"redux",title:"redux"},
                {src:"react-query",title:"reactQuery"},
                {src:"tailwind",title:"tailwind"},
            ],
            backends: [
                {src:"aws",title:"aws",class_name:"base-white-svg"},
                {src:"vercel",title:"vercel",class_name:"base-white-svg"},
                {src:"nodejs",title:"nodejs",class_name:"base-black-svg"},
                {src:"mongodb",title:"mongodb"},
            ],
            versionControls: [
                {src:"git",title:"git"},
                {src:"github",title:"github",class_name:"base-white-svg"},
            ],
        },
        reflection:[
            "텍스트 에디터 특성상 이벤트리스너가 많았는데, 초기에는 익숙하지 않았던 Typescript로 구현하기 꽤 벅찼으나, 프로젝트를 점차 진행하며 리액트 타입에 적응하여 능숙하게 사용할 수 있게 되었습니다.",
            "react-query를 사용하여 서버 캐싱이란 기능을 접하고 비용과 렌더링 속도를 보며 필요성을 느끼게 되었습니다."
        ],
        date:"2024/03 ~ 2024/04",
    },{
        img:"portfolie",
        title:"폴트폴리오 사이트",
        link:"https://www.g1nu.site/",
        git:"https://github.com/ki2183/my-Portfolio-site",
        reason:[
            "폴트폴리오 사이트 입니다.",
            "폴트폴리오를 모아놓는 사이트를 만들고 싶었고, 최대한 동적인 사이트를 만들고 싶어서 GSAP Scroll Trigger을 적극 활용했습니다.",
        ],
        feature:["스택,폴트폴리오"],
        stacks:{
            frontends:[
                {src:"html",title:"html"},
                {src:"scss",title:"scss"},
                {src:"typescript",title:"typescript"},
                {src:"redux",title:"redux"},
                {src:"react",title:"react"},
            ],
            backends: [
                {src:"vercel",title:"vercel",class_name:"base-white-svg"},
            ],
            versionControls: [
                {src:"git",title:"git"},
                {src:"github",title:"github",class_name:"base-white-svg"},
            ],
        },
        reflection:[
            "scss를 사용한 이유는 css보다 가독성이 좋다고 해서 사용해보았는데 별차이 없어서 빠르게 적응했습니다.",
            "Scroll Trigger과 Typescript는 상성이 좋지않는데다가 창 크기를 조절할때마다 모든 컴포넌트의 ScrollTrigger이 사라지는 오류가 발생했었습니다. \
            하지만 이 문제는 컴포넌트의 라이프 사이클 관리에 개선을 도입함으로써 해결했습니다. ScrollTrigger의 kill메소드는 모든 ScrollTrigger을 없앴기에 clean up시 \
            해당 ref에 할당되어있는 애니메이션을 kill함으로써 간섭을 줄이고 리사이즈시 ScrollTrigger가 초기화 되는 문제를 해결했습니다.",
        ],
        date:"2024/04~2024/05",
    },{
        img:"geosantech",
        title:"거산테크",
        link:"https://geosantech.kr",
        git:"https://github.com/ki2183/geosan_webpage_project",
        reason:[
            "거산테크 웹페이지 입니다.",
            "이 프로젝트는 지인의 회사 소개 사이트입니다. 간단하게 회사소개,거래처,기계현황을 보여주기 위해 만든 사이트입니다. seo최적화를 위해 nextjs를 사용하였습니다.",
            "회사 위치를 시각적으로 보여주기위해서 카카오 맵 api를 사용하였습니다.",
            "구글과 네이버 검색엔진에 도메인 등록 및 메타데이터를 추가하였습니다."
        ],
        feature:["회사소개","기계현황","거래처"],
        stacks:{
            frontends:[
                {src:"html",title:"html"},
                {src:"css",title:"css"},
                {src:"typescript",title:"typescript"},
                {src:"nextjs",title:"nextjs" },
                {src:"tailwind",title:"tailwind"},
            ],
            backends: [
                {src:"vercel",title:"vercel",class_name:"base-white-svg"},
                {src:"postgres",title:"postgres"},
            ],
            versionControls: [
                {src:"git",title:"git"},
                {src:"github",title:"github",class_name:"base-white-svg"},
            ],
        },
        reflection:[
            "검색 친화적인 웹 페이지를 만들기 위해 SSR를 지원하는 Next.js를 채택했습니다.",
            "Next.js를 처음 학습하고 사용할 때 폴더 구조 라우팅과 전역 변수 선언으로 컴포넌트에 전달하는 것이 생소해서 처음에는 적응하는 데 어려움이 있었습니다. 하지만 약 1년 동안 React를 사용해봤기 때문에 React Hook이나 컴포넌트 사용에는 문제가 없었습니다.",
            "문제는 App Router였는데, 입문자가 사용하기 쉬워서 채택했으나 생각보다 지원하지 않는 기능이 많아 아쉬웠습니다. 특히 get--Props를 사용하지 못해 서버 캐싱 기능을 사용하지 못한 점이 아쉬웠습니다.",
            "Tailwind 대신 Styled Components를 사용해보고자 했으나, Next.js에서 사용하려면 CSR이 강제되어 의미가 퇴색되어 Tailwind를 사용했습니다. Redux도 사용하려고 했으나 페이지가 간단하여 필요 없었고, 마찬가지로 CSR이 강제되기에 사용하지 않았습니다.",
            "아쉬운 부분이 많았지만, 여러 검색엔진에 메타데이터를 등록하고 검색 친화적인 코드를 작성하는 경험을 했을 뿐만 아니라 Next.js로 SSR웹페이지를 구현해보는 값진 경험을 할 수 있었습니다."
        ],
        date:"2024/05~2024/06",
    }

] as InfoModal_type[]
