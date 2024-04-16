import styled from 'styled-components';
import logo from '../../assets/images/project3/logo2.png';
import main from '../../assets/images/project3/main4.png';
import domain from '../../assets/images/project3/git3.png'
import board from '../../assets/images/project3/게시판.png'
import jwt from '../../assets/images/project/jwt.png'
import aws2 from '../../assets/images/project3/aws구성.bmp'
import java from '../../assets/images/logo/java.png'
import html from '../../assets/images/logo/html.png'
import css from '../../assets/images/logo/css.png'
import MySQL from '../../assets/images/logo/mysql.png'
import spring from '../../assets/images/logo/spring.png'
import spring_boot from '../../assets/images/logo/spring_boot.png'
import node_js from '../../assets/images/logo/node.js.png'
import react from '../../assets/images/logo/react.png'
import gradle from '../../assets/images/logo/gradle.png'
import git from '../../assets/images/logo/git.png'
import aws from '../../assets/images/logo/aws.png'
import architecture from '../../assets/images/project3/아키텍처1.jpg'





const ProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 30px;
        margin-bottom: 20px;
    }
    h1.subject {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .project-container {
        display: flex;
        margin: 20px 230px 10px 0px;

        .project-details {
            display: flex;
            flex-direction: column;
            margin-right: 20px;
            
            img.project-logo {
                width: 400px;
            }

            img.project {
                width: 400px;
                margin-bottom: 10px; 
            }
            
            img.project-main-image {
                width: 400px;
            }
        }

        .project-info {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            margin-left: 50px;

            h2 {
                font-size: 24px;
                margin-bottom: 5px; 
            }

            ul, li {
                text-align: justify;
                margin: 0; 
            }
            p {
                font-size: 25px;
            }
        }
        img.domain {
            margin-left: 1px;
            margin-top: 15px
        }
    }
    .project-view {
        margin-top: 20px;
        h2 {
            font-size: 30px;
            text-align: left;
            margin-left: 30px;
        }
        p {
            margin-left: 30px;
            text-align: left;
            font-size: 25px;
        }
    }
    .skils img {
        width: 138px;
        margin: 6px
    }
    
    .skils2 img {
        width: 180px;
        margin: 6px;
    }
    img.MySQL {
        width: 130px;
        height: 60px;
    }
    img.AWS {
        width: 130px;
    }
    .project-explanation {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-left: 20px;

        h2 {
            margin-top: 20px;
            font-size: 30px;
            text-align: left;
            margin-left: 15px;
            flex-basis: 100%;
        }

        p {
            margin-top: 15px;
            text-align: left;
            font-size: 25px;
            flex-basis: 100%;
        }

        .exceptions1,
        .exceptions2 {
            box-sizing: border-box;
            padding-right: 20px;
            margin-bottom: 20px;
            flex-basis: calc(50% - 10px);
        }

        img {
            margin-top: 15px;
            width: 100%;
            height: auto;
        }
        @media (min-width: 768px) {
            h2,
            p,
            .exceptions1,
            .exceptions2 {
                flex-basis: calc(50% - 10px);
            }
            .aws2 {
                width: 700px;
            }
            .jwt {
                width: 650px;
            }
        }
    }
`;

const ProjectMain = () => {
  return (
    <ProjectBox>

      <div className="project-container">
        <div className="project-details">
          <img className="project-logo" src={logo} alt="프로젝트 로고" />
          <img className="project-main-image" src={main} alt="주요 프로젝트 이미지" />
          <img className="project" src={board} alt="프로젝트 이미지" />
        </div>
        <div className="project-info">
          <h1 className="subject">게시판 프로젝트(백엔드 & 프론트엔드 개발)</h1>
          <h2>개발 주요 사항</h2>
          <ul>
            <p> - 게시판 CURD 기능</p>
            <p> - AWS EC2를 이용한 서비스 배포</p>
            <p> - <a href="http://www.freeboard.store">http://www.freeboard.store👈</a></p>
          </ul>
          <br />
          <h2>⚙️ 기술 스택</h2>
          <ul className="skils">
            <img className="java" src={java} alt="자바 아이콘" />
            <img className="html" src={html} alt="html 아이콘" />
            <img className="Spring" src={spring} alt="Spring 아이콘" />
            <img className="css" src={css} alt="css 아이콘" />
          </ul>
          <ul className="skils">
            <img className="Node.js" src={node_js} alt="Node.js 아이콘" />
            <img className="React" src={react} alt="React 아이콘" />
            <img className="Gradle" src={gradle} alt="Gradle 아이콘" />
            <img className="Git" src={git} alt="Gradle 아이콘" />
          </ul>
          <ul className="skils2">
            <img className="MySQL" src={MySQL} alt="oracle 아이콘" />
            <img className="Springboot" src={spring_boot} alt="spring_boot 아이콘" />
            <img className="JJWT" src={jwt} alt="JJWT 아이콘" />
            <img className="AWS" src={aws} alt="aws 아이콘" />
          </ul>
          <img className="domain" src={domain} alt={domain} />
        </div>
      </div>
      <div className="project-view">
        <h2>살펴보기</h2>
        <p>게시판 프로젝트는 자유롭게 게시판에 글을 작성하고 댓글로 여러 의견을 나누는 커뮤니티 기능을 제공하는 웹 사이트입니다. 회원으로만 가능한 게시글 조회하기, 게시글 추가, 삭제 기능과 댓글 추가, 삭제 기능이 있습니다. SpringBoot 기반으로 개발한 REST 백엔드 서버와 REACT.js로 만들어진 프론트 엔드 서버가 있습니다.</p>
      </div>
      <div className="project-explanation">
        <h2>개발 관련 설명</h2>
        <div className="exceptions1">
        <img className="aws2" src={aws2} alt={aws2} />
        <p> AWS 관리형 네트워크 기반 vpn을 통하여 Web 서브넷과 Was 서브넷을 사용한 가용영역을 EC2로 배포하였으며 데이터 베이스는 RDS를 사용하여 저장하도록 하였습니다. </p>
        </div>
        <div className="exceptions2">
        <img className="architecture" src={architecture} alt={architecture} />
        <p>이 서비스는 SpringBoot와 React로 개발하였으며 깃허브에 있는 데이터를 통하여 AWS의 EC2의 우분투를 사용하여 배포하고 RDS를 통한 데이터를 저장하고, Route53을 통한 http로 서비스를 이용할 수 있게 하였습니다  </p>
        </div>
      </div>
    </ProjectBox>
  );
};

export default ProjectMain;
