import styled, { keyframes } from 'styled-components';
import { FaCheck } from "react-icons/fa";
import React from 'react';
import { Link } from 'react-router-dom';
import Banner02 from './Banner02';

const horizontal = keyframes`
	0% {
		transform: translateX(0);
	}
	50% {
		transform: translateX(10px);
	}
	100% {
		transform: translateX(0);
	}
`;

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
        width: 65px;
    }
    .arrow_right {
        align-content: center;
        position: absolute;
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 7px solid white;
        margin-top: 5px;
        margin-left: 7px;
        animation: ${horizontal} 0.7s ease-in-out infinite;
    }
    .more-btn {
        margin-left: 20px;
        padding: 12px 40px;
        border-radius: 26px;
        background-color: ${(props) => props.theme.mainColor};
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        line-height: 20px;
        letter-spacing: 0.5px;
        float: right;
    }
`;



const ProjectMain = () => {
  return(
    <ProjectBox>
      <h1 className="subject">오늘의 할일:TODOLIST</h1>
      <p className="sub-subject">2023.12(1人프로젝트)</p>
      <div>
        <Banner02 />
      </div>
      <div className="description">
        <span style={{fontWeight:'bold', color:'#ffb400'}}>오늘의 할일은 오늘을 계획하고 작성하면서 그 계획을 체크하면서 성취감을 느끼고자 만든 웹 사이트</span><span>입니다.<br/>
        가장 기본적이면서도 많이 쓰는 앱에서 많이 쓰는 TODOLIST를 웹에서 사용하고자 개발하였습니다. </span>
        <p>회원으로만 가능한 할일 추가, 삭제, 리스트 기능을 추가하였으며 SpringBoot 기반으로 개발한 REST 백엔드 서버와 REACT.js로 만들어진 프론트 엔드 서버가 있습니다.</p>
        <p>국비교육 과정중에서 자세히 배우지 못한 리액트에 대해 더 자세히 배우는 계기가 되었으며 컴포넌트와 컨테이너와 같은 구성요소에 대해 더 자세히 공부하게 되었습니다.</p>
      </div>
      <hr />
      <div className="function">
        <p><FaCheck /> 주요 기능</p> 일정 추가, 등록, 삭제, 목록
        <p><FaCheck /> GitGub</p> <a
        href="https://github.com/somi9954/ProjectFE">https://github.com/somi9954/ProjectFE</a>👈<br />
        <a href="https://github.com/somi9954/projectBE">https://github.com/somi9954/projectBE</a>👈
        <p><FaCheck /> FrontEnd</p> React.js, javascript, html, css
        <p><FaCheck /> BackEnd</p> Spring_Boot, Spring, JAVA, gradle
        <p><FaCheck /> Database</p> ORACLE
        <p><FaCheck /> Deployment</p> intellij
        <br />
        <Link to="/projects3" className="more-btn">
          MORE PROJECT <span className="arrow_right"></span>
        </Link>
      </div>
    </ProjectBox>
  );
};

export default ProjectMain;
