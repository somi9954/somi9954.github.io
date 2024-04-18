import styled from "styled-components";
import java from '../../assets/images/logo/java.png'
import css from '../../assets/images/logo/css.png'
import html from '../../assets/images/logo/html.png'
import git from '../../assets/images/logo/git.png'
import github from '../../assets/images/logo/github.png'
import mysql from '../../assets/images/logo/mysql.png'
import oracle from '../../assets/images/logo/oracle.png'
import node from '../../assets/images/logo/node.js.png'
import react from '../../assets/images/logo/react.png'
import spring from '../../assets/images/logo/spring.png'
import spring_boot from '../../assets/images/logo/spring_boot.png'
import javascript from '../../assets/images/logo/javascript.png'

const SkillBox = styled.div`
    text-align: center;
    .skills {
    margin-bottom: 15px;
    }
    
    img {
        width: 100px;
        margin: 20px;
    
    }
`

const SkillsWrap = () => {
    return(
        <SkillBox>
          <div className="skills">
            <img src={java} alt={java} />
            <img src={css} alt={css} />
            <img src={html} alt={html} />
            <img src={mysql} alt={mysql} />
            <img src={oracle} alt={oracle} />
            <img src={javascript} alt={javascript} />
            <img src={node} alt={node} />
            <img src={react} alt={react} />
            <img src={spring} alt={spring} />
            <img src={spring_boot} alt={spring_boot}/>
            <img src={git} alt={git} />
            <img src={github} alt={github} />
          </div>
        </SkillBox>
    )
}

export default SkillsWrap