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
            '처음 프로젝트를 시작할 때 교과목으로 html css javascript의 아주 기초 지식만 가지고 있었기에,많이 부족한 상태로 웹 개발 기술과 react를 학습하며 프로젝트에 뛰어들었습니다. 그래서 코드를 보면 react-hook과 컴포넌트 사용법이 많이 미숙합니다.',
            '또 jira를 사용해서 이슈관리를 팀원과 공유하고 git으로 코드 관리를 하며 개발해 나갔었는데, 전부 처음 접하던 것투성이여서 매 순간이 한계였던 경험을 해보았습니다. 하지만 덕분에 웹 개발의 전반적인 구조와 기본적인 개념을 파악할 수 있었습니다. 덕분에 react에 발을 들이고 프런트엔드 개발자라는 목표가 더 선명해진 계기가 되어 저에겐 큰 의미를 가지는 프로젝트입니다.'
        ],
        date:"20230305 ~ 20230703",
    },
    {
        img:"timeline",
        title:"한신대 수강 신청 추천 웹 프로젝트",
        link:"https://resister-course-vercel.vercel.app/",
        git:"https://github.com/ki2183/Resister_Course",
        reason:[
            "한신대 수강신청 추천 웹사이트 입니다.",
            "일부 타학교에는 존재하나 한신대에는 존재하지 않아 졸업 작품주제로 선정하고 프로젝트를 진행하였습니다."
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
        date:"20230602 ~ 20231024",
    },{
        img:"music",
        title:"뮤직플레이어",
        link:"https://music-ts-gamma.vercel.app/",
        git:"https://github.com/ki2183/music_ts",
        reason:[
            "뮤직플레이어 입니다.",
            "평소에 게임bgm을 많이 듣는데 음악 스트리밍 사이트나 유튜브에는 듣고 싶은 음악이 없는 경우가 있어 아쉬워서 내가 듣는 노래를 모아놓은 사이트를 만들어야지 싶어 만들었습니다",
        ],
        feature:["재생","무한재생","셔플","컨트롤 바"],
        stacks:{
            frontends:[
                {src:"html",title:"html"},
                {src:"css",title:"css"},
                {src:"typescript",title:"typescript"},
                {src:"react",title:"react"},
                {src:"tailwind",title:"tailwind"},
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
            '자동 타입지정해주는 javascript에 한계를 느껴 typescript를 생산성을 늘리기위해 tailwind를 학습하고 적용해보기위해 토이 프로젝트를 진행했습니다.',
            '이전 프로젝트에서는 컴포넌트에 함수를 그냥 명시했었는데 유지보수성과 확장성을 위해서 custom-hook 디자인패턴을 사용했습니다.',
            '생산성을 향상시키기 위해서 tailwind를 사용해 보았습니다.'
        ],
        date:"20231206~20240108",
    },{
        img:"memo",
        title:"메모 웹",
        link:"https://www.g1nu.site/",
        git:"https://memo-vercel.vercel.app/",
        reason:[
            "메모 웹사이트입니다.",
            "이 프로젝트는 메모 웹사이트를 개발하는 것이었습니다. 첫 프로젝트부터 벨로그나 노션 같은 텍스트 에디터를 만들어 리뷰/댓글 작성 기능에 적용하고 싶었으나, 당시 실력 부족으로 구현하지 못했습니다. 이후, React Query와 Redux를 학습하고 나서 React Query가 이 프로젝트에 적합한 컨셉이라고 생각되어 사용하게 되었습니다.",
        ],
        feature:["로그인","메모생성","메모저장","메모수정","메모목록","메모 이미지 추가"],
        stacks:{
            frontends:[
                {src:"html",title:"html"},
                {src:"css",title:"css"},
                {src:"typescript",title:"typescript"},
                {src:"react",title:"react"},
                {src:"redux",title:"redux"},
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
        date:"20240307~20240417",
    },{
        img:"portfolie",
        title:"폴트폴리오 사이트",
        link:"https://portfolie-vercel.vercel.app/",
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
        date:"20240422~20240525",
    },{
        img:"geosantech",
        title:"거산테크",
        link:"https://geosantech.kr",
        git:"https://github.com/ki2183/geosan_webpage_project",
        reason:[
            "거산테크 웹페이지 입니다.",
            "이 프로젝트는 저의 아버지 회사 사이트입니다. 간단하게 회사소개,거래처,기계현황을 보여주기 위해 만든 사이트입니다. seo최적화를 위해 nextjs를 사용하였습니다.",
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
        date:"20240530~20240624",
    }

] as InfoModal_type[]