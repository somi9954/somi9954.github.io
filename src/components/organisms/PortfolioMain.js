import styled, { keyframes } from 'styled-components';
import { FaCheck } from "react-icons/fa";
import Banner01 from './Banner01';
import { Link } from 'react-router-dom';
import React from 'react';

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
      <h1 className="subject">게시판 프로젝트:BoardProject</h1>
      <p className="sub-subject">2024.02(1人프로젝트)</p>
      <div>
        <Banner01 />
      </div>
      <div className="description">
        <span style={{fontWeight:'bold', color:'#ffb400'}}>게시판 프로젝트는 자유롭게 게시판에 글을 작성하고 댓글로 여러 의견을 나누는 커뮤니티 기능을 제공하는 웹 사이트</span><span>입니다.<br/>
        가장 기본적이면서도 많이 쓰는 커뮤니티를 만들어 보고 싶단 생각이 들어 개발하게 되었습니다. </span>
        <p>회원으로만 가능한 게시글 조회하기, 게시글 추가, 삭제 기능과 댓글 추가,
          삭제 기능이 있습니다. SpringBoot 기반으로 개발한 REST 백엔드 서버와 REACT.js로 만들어진 프론트 엔드 서버가 있습니다.</p>
        <p><span>AWS</span>서비스를 처음 사용해봤다는 것만으로도 의미가 이었지만, 그 과정에서 VPN 구성부터 WEB과 WAS가 어떻게 구성이 되어 있는지에 대해 알아봤으며 실제로 사용해볼 수 있었다는 점에서 더욱 의미가 있었습니다.</p>
      </div>
      <hr />
      <div className="function">
        <p><FaCheck />  주요 기능</p> 게시판(등록,수정,삭제), 게시판글(등록,수정,삭제), 댓글(등록,수정,삭제)
        <p><FaCheck />  GitGub</p> <a href="https://github.com/somi9954/BoardReact">https://github.com/somi9954/BoardReact</a>👈
        <p><FaCheck />  URL</p> <a href="http://freeboard.store" className="URL">http://freeboard.store</a> 👈
        <p><FaCheck />  FrontEnd</p> React.js, javascript, html, css
        <p><FaCheck />  BackEnd</p> Spring_Boot, Spring, JAVA, gradle
        <p><FaCheck />  Database</p> MySQL
        <p><FaCheck />  Deployment</p> AWS(EC2, RDS)
        <Link to="/projects2" className="more-btn">
          MORE PROJECT <span className="arrow_right"></span>
        </Link>
      </div>
    </ProjectBox>
  );
};

export default ProjectMain;
