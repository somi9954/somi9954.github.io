import React, { Component } from "react";
import PageWrap from "../templates/PageWrap";
import PageHeader from "../molecules/PageHeader";
import PortfolioMain2 from "../organisms/PortfolioMain2";


export class ProjectsPage2 extends Component {
	render() {
		return (
			<PageWrap page="projects2">
				<main>
					<PageHeader titleBg="Works">
						My <span className="point">Projects2</span>
					</PageHeader>
					<section>
						<PortfolioMain2 />
					</section>
				</main>
			</PageWrap>
		);
	}
}

export default ProjectsPage2;
