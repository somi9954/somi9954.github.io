import React, { Component } from "react";
import PageWrap from "../templates/PageWrap";
import PageHeader from "../molecules/PageHeader";
import PortfolioMain3 from '../organisms/PortfolioMain3';


export class ProjectsPage2 extends Component {
	render() {
		return (
			<PageWrap page="projects3">
				<main>
					<PageHeader titleBg="Works">
						My <span className="point">Projects 3</span>
					</PageHeader>
					<section>
						<PortfolioMain3 />
					</section>
				</main>
			</PageWrap>
		);
	}
}

export default ProjectsPage2;
