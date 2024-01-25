import React, { Component } from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";
import PageHeader from "../molecules/PageHeader";
import ExperienceWrap from "../organisms/ExperienceWrap";
import SkillsWrap from "../organisms/SkillsWrap";
import PageWrap from "../templates/PageWrap";
import { Link } from 'react-router-dom';

export class aboutPage extends Component {
	render() {
		return (
			<PageWrap page="about">
				<StyledSkills>
					<PageHeader titleBg="Skills">
						About <span className="point">Me</span>
					</PageHeader>

					<section>
						<Heading level="2">SKILLS</Heading>
						<SkillsWrap />
					</section>

					<section>
						<Heading level="2">EDUCATION</Heading>
						<ExperienceWrap />
						<Link to="/projects" className="more-btn">
							MORE PROJECT
						</Link>
					</section>
				</StyledSkills>
			</PageWrap>
		);
	}
}

const StyledSkills = styled.main`
	section {
		max-width: 1140px;
		margin: auto;
		padding-bottom: 80px;
		text-align: center;
		.more-btn {
			display: inline-block; /* 버튼을 블록 요소로 만들지 않고 inline-block으로 설정 */
		}
		&:not(:last-child) {
			margin-bottom: 60px;

			&::after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				width: 500px;
				height: 1px;
				background-color: #252525;
			}
		}

		> h2 {
			margin-bottom: 40px;
			font-size: 26px;
			font-weight: 600;
			text-align: center;
		}
	}
	


	// EDUCATION 섹션에 대한 스타일 조정
	section:last-child {
		&:not(:last-child)::after {
			display: none; // 마지막 섹션 이후의 수평 선 숨기기
		}
	}
	.more-btn {
		padding: 3px 40px;
		border-radius: 26px;
		background-color: ${(props) => props.theme.mainColor};
		font-size: 15px;
		font-weight: 500;
		color: #fff;
		line-height: 46px;
		letter-spacing: 0.5px;
		margin: 0 auto;
		text-align: center;
		
	}
	@media ${(props) => props.theme.mobile} {
		section {
			padding-bottom: 40px;

			&:not(:last-child) {
				&::after {
					width: 70%;
				}
			}
		}
	}
`;
export default aboutPage;
