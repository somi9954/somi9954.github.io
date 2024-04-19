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
					<SectionContainer>
						<section>
							<Heading level="2">Skill</Heading>
							<SkillsWrap />
						</section>
						<section>
							<Heading level="2">Education</Heading>
							<ExperienceWrap />
							<Link to="/projects" className="more-btn">
								MORE PROJECT
							</Link>
						</section>
					</SectionContainer>
				</StyledSkills>
			</PageWrap>
		);
	}
}


const StyledSkills = styled.main`
	section {
		max-width: 1140px;
		text-align: center;
		.more-btn {
			display: inline-block;
			margin-top: 30px;
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
			}
		}

		> h2 {
			margin-bottom: 50px;
			font-size: 26px;
			font-weight: 600;
			text-align: center;
		}
	}
	
	
	section:last-child {
		&:not(:last-child)::after {
			display: none;
		}
	}
	.more-btn {
		float: left;
		padding: 0 40px;
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

const SectionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap; 

	section {
		width: calc(50% - 20px); 
		margin-bottom: 60px;
		position: relative; 
	}

	section::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		width: 500px;
		height: 1px;
	}

	section:last-child::after {
		display: none;
	}

	@media ${(props) => props.theme.mobile} {
		section {
			width: 100%; 
		}
	}
`;
export default aboutPage;
