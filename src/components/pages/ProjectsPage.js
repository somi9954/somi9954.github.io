import React, { Component } from "react";
import PageWrap from "../templates/PageWrap";
import PageHeader from "../molecules/PageHeader";
import PortfolioMain from "../organisms/PortfolioMain";


export class ProjectsPage extends Component {
	render() {
		return (
			<PageWrap page="projects">
				<main>
					<PageHeader titleBg="Works">
						My <span className="point">Projects 1</span>
					</PageHeader>
					<section>
						<PortfolioMain />
					</section>
				</main>
			</PageWrap>
		);
	}
}

export default ProjectsPage;
