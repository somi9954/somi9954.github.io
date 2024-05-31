import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";
import Banner01 from './Banner01';
import React from 'react';
import Banner03 from './Banner03';

const ProjectBox = styled.div`
    .subject {
        font-weight: bold;
        font-size: 3rem;
        text-align: center;
    }
    .sub-subject {
        color: #ffb400;
        text-align: center;
        margin-bottom: 8px;
        font-weight: 500;
        font-size: 1.3rem;
    }
    .description {
        margin-bottom: 10px;
        line-height: 1.5
    }

    .function{
        line-height: 2;
        p {
            font-weight: bold;
        }
        a {
            background: #ffb400;
        }
    }
    img {
        width: 90px;
    }
`;



const ProjectMain = () => {
  return(
    <ProjectBox>
      <h1 className="subject">운동 정보 커뮤니티:GoToGym</h1>
      <p className="sub-subject">2023.11(3人프로젝트)</p>
      <div>
        <Banner03 />
      </div>
      <div className="description">
        <span style={{fontWeight:'bold', color:'#ffb400'}}>GoToGym은 운동 정보를 공유, 커뮤니티에서 회원 의견을 나누고 개인의 식단관리와 운동방법(캘린더)을 위한 웹 사이트</span><span>입니다.<br/>
        앱에서는 많이 사용하지만 pc버전으로는 많이 없어 사용하고자 개발하였습니다. </span>
        <p>회원으로만 가능한 커뮤니티기능과 캘린더 기능을 추가하였으며 SpringBoot 기반으로 개발한 REST 백엔드 서버와 REACT.js로 만들어진 프론트 엔드 서버가 있습니다.</p>
        <p>팀원들과 프로젝트를 하면서 짧은 기간에 의사소통과 다른 사람들의 코드를 보면서 많은 점을 배울 수 있었습니다.</p>
      </div>
      <hr />
      <div className="function">
        <p><FaCheck /> 주요 기능</p> 캘린더 내 식단 및 운동 기록, 커뮤니티 기능
        <p><FaCheck /> GitGub</p> <a href="https://github.com/somi9954/GoToGym">https://github.com/somi9954/GoToGym</a>👈<br />
        <a href="https://github.com/daeyounggg/GoToGym">https://github.com/daeyounggg/GoToGym</a>👈
        <p><FaCheck /> FrontEnd</p> React.js, javascript, html, css
        <p><FaCheck /> BackEnd</p> Spring_Boot, Spring, JAVA, gradle
        <p><FaCheck /> Database</p> ORACLE
        <p><FaCheck /> Deployment</p> intellij
        <br />
      </div>
    </ProjectBox>
  );
};

export default ProjectMain;
