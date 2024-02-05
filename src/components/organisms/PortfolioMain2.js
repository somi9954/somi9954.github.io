import styled from 'styled-components';
import logo from '../../assets/images/project2/logo.png';
import main from '../../assets/images/project2/리스트.png';
import domain from '../../assets/images/project2/git1.png'
import domain1 from '../../assets/images/project2/git2.png'
import main2 from '../../assets/images/project2/리스트2.png'
import jwt from '../../assets/images/project/jwt.png'
import architecture from '../../assets/images/project2/아키텍쳐.png'
import java from '../../assets/images/logo/java.png'
import html from '../../assets/images/logo/html.png'
import css from '../../assets/images/logo/css.png'
import oracle from '../../assets/images/logo/oracle.png'
import spring from '../../assets/images/logo/spring.png'
import spring_boot from '../../assets/images/logo/spring_boot.png'
import node_js from '../../assets/images/logo/node.js.png'
import react from '../../assets/images/logo/react.png'
import gradle from '../../assets/images/logo/gradle.png'
import git from '../../assets/images/logo/git.png'
import JPA from '../../assets/images/logo/jpa-removebg-preview.png';
import { Link } from 'react-router-dom';


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
            margin-top: 20px;
            margin-left: 1px;
            height: 45px;
        }
        img.domain1 {
            margin-top: 15px;
            margin-left: 1px;
            height: 45px;
        }
        img.JPA_icon {
            width: 98px;
            height: 77px;
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
        width: 165px;
        margin: 6px;
    }
    .more-btn {
        padding: 2px 40px;
        border-radius: 26px;
        background-color: ${(props) => props.theme.mainColor};
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        line-height: 46px;
        letter-spacing: 0.5px;
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
            .architecture {
                width: 700px;
                height: 330px ;
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
          <img className="project" src={main2} alt="프로젝트 이미지" />
        </div>
        <div className="project-info">
          <h1 className="subject">오늘의 할일:TODOLIST(백엔트 & 프론트엔드 개발)</h1>
          <h2>개발 주요 사항</h2>
          <ul>
            <p> - Spring Boot 기반 REST 백엔드 서버 개발</p>
            <p> - React.js를 이용한 프론트 앤드 서버 개발</p>
            <p> - JWT를 활용한 토큰 기반 사용자 인증 적용 과정 적용</p>
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
            <img className="oracle" src={oracle} alt="oracle 아이콘" />
            <img className="Springboot" src={spring_boot} alt="spring_boot 아이콘" />
            <img className="JJWT" src={jwt} alt="JJWT 아이콘" />
            <img className="JPA_icon" src={JPA} alt="JPA 아이콘" />
          </ul>
          <img className="domain" src={domain} alt={domain} />
          <img className="domain1" src={domain1} alt={domain1} />
        </div>
      </div>
      <div className="project-view">
        <h2>살펴보기</h2>
        <p>'오늘의 할일:TODOLIST'는 오늘의 할일을 계획적으로 적을수 있거나 삭제 조회할 수 있는 웹 서비스입니다. TODOLIST는 간단하게 조회부터 오늘의 날짜와 완료의 done 체크와 할일 추가, 삭제의 기능이 가능하며 회원으로만 리스트를 사용할 수있게 하였습니다. 또한 restful하게 구현된 Spring Boot 백엔드 서버와 React.js로 만들어진 프론트 앤드 서버가 있습니다. </p>
      </div>
      <div className="project-explanation">
        <h2>개발 관련 설명</h2>
        <div className="exceptions1">
          <img className="architecture" src={architecture} alt={architecture} />
          <p>이 서비스의 아키텍쳐는 위와 같습니다. 각 기능을 서비스 단위로 분리하고 각 언어의 장점을 활용하여 기능 수행을 독립적으로 하였고, 각 기능을 담당하는 서비스는 REST API를 사용, 구현하게 되어 프론트앤드 서버에서 유저가 요청했을때 모두 비동기적으로 처리하여 결과를 응답합니다. </p>
        </div>
        <div className="exceptions2">
          <img className="jwt" src={jwt} alt={jwt} />
          <p>SpringBoot 백앤드 서버의 사용자 인증 로직에서 일반적인 http 세션 기반 인증이 아닌, JJWT 라이브러리를 이용한 JWT 토큰 기반 사용자 인증을 구현하였습니다.</p>
        </div>
      </div>
      <Link to="/projects3" className="more-btn">
        MORE PROJECT 3
      </Link>
    </ProjectBox>
  );
};

export default ProjectMain;
