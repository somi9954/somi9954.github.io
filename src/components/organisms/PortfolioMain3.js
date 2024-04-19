import logo from '../../assets/images/project3/logo2.png';
import main from '../../assets/images/project3/main4.png';
import main2 from '../../assets/images/project3/게시판.png'
import domain from '../../assets/images/project3/git3.png'
import jwt from '../../assets/images/project/jwt.png'
import architecture from '../../assets/images/project3/aws구성.bmp'
import architecture2 from '../../assets/images/project3/아키텍처1.jpg'
import java from '../../assets/images/logo/java.png'
import html from '../../assets/images/logo/html.png'
import css from '../../assets/images/logo/css.png'
import MySQL from '../../assets/images/logo/mysql.png'
import spring from '../../assets/images/logo/spring.png'
import spring_boot from '../../assets/images/logo/spring_boot.png'
import react from '../../assets/images/logo/react.png'
import gradle from '../../assets/images/logo/gradle.png'
import git from '../../assets/images/logo/git.png'
import jpa2 from '../../assets/images/logo/jpa-removebg-preview.png'
import aws from '../../assets/images/logo/aws.png'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;

    h2 {
        font-size: 23px;
        margin-bottom: 20px;
    }
    h2.subject {
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
    }
    .project-details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        img {
            width: 280px;
            margin-bottom: 20px;
        }
    }
    .skils {
        img {
            width: 120px;
        }
    }
    img.AWS {
        height: 40px;
    }

    .project-info {
        margin-left: 35px;
    }

    .project-explanation {
        margin-bottom: 30px;
        img {
            width: 300px;
            height: 150px;
        }
    }
    .more-btn {
        margin-left: 20px;
        padding: 12px 40px;
        border-radius: 26px;
        background-color: ${(props) => props.theme.mainColor};
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        line-height: 46px;
        letter-spacing: 0.5px;
    }
`;

const ProjectMain = () => {
  return (
    <ProjectBox>
      <div className="project-container">
        <h2 className="subject">게시판 프로젝트(백엔드 & 프론트엔드 개발)</h2>
        <div className="project-details">
          <img className="project-logo" src={logo} alt="프로젝트 로고" />
          <img className="project-main-image" src={main} alt="주요 프로젝트 이미지" />
          <img className="project" src={main2} alt="프로젝트 이미지" />
        </div>
      </div>
      <div className="project-info">
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
          <img className="React" src={react} alt="React 아이콘" />
          <img className="Gradle" src={gradle} alt="Gradle 아이콘" />
        </ul>
        <ul className="skils">
          <img className="Git" src={git} alt="Gradle 아이콘" />
          <img className="JPA" src={jpa2} alt="JPA 아이콘" />
          <img className="MySQL" src={MySQL} alt="MySQL 아이콘" />
          <img className="Springboot" src={spring_boot} alt="spring_boot 아이콘" />
          <img className="JJWT" src={jwt} alt="JJWT 아이콘" />
          <img className="AWS" src={aws} alt="AWS 아이콘" />
        </ul>
        <img className="domain" src={domain} alt={domain} />
      </div>
      <div className="project-view">
        <h2>살펴보기</h2>
        <p>게시판 프로젝트는 자유롭게 게시판에 글을 작성하고 댓글로 여러 의견을 나누는 커뮤니티 기능을 제공하는 웹 사이트입니다. 회원으로만 가능한 게시글 조회하기, 게시글 추가, 삭제 기능과 댓글 추가,
          삭제 기능이 있습니다. SpringBoot 기반으로 개발한 REST 백엔드 서버와 REACT.js로 만들어진 프론트 엔드 서버가 있습니다.</p>
        <div className="project-explanation">
          <h2>개발 관련 설명</h2>
          <div className="exceptions">
            <img className="architecture" src={architecture} alt={architecture} />
            <p> AWS 관리형 네트워크 기반 vpn을 통하여 Web 서브넷과 Was 서브넷을 사용한 가용영역을 EC2로 배포하였으며 데이터 베이스는 RDS를 사용하여 저장하도록 하였습니다. </p>
          </div>
          <div className="exceptions">
            <img className="architecture2" src={architecture2} alt={architecture2} />
            <p>이 서비스는 SpringBoot와 React로 개발하였으며 깃허브에 있는 데이터를 통하여 AWS의 EC2의 우분투를 사용하여 배포하고 RDS를 통한 데이터를 저장하고, Route53을 통한 http로 서비스를 이용할 수 있게 하였습니다 </p>
          </div>
        </div>
      </div>
    </ProjectBox>
  );
};

export default ProjectMain;
