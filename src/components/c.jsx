import React, { Component } from "react";
import githubLogo from "../assets/gh32px.png";

export class C extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};

	style = {
		align: "middle"
	};

	information = {
		about: "Im dark-soul.",
		corvette: " Discord server ",
		projects: [
			{
				projectName: "darksoul",
				liveDemo: "https://github.com/darksoul228",
				linkToGithub: "https://github.com/darksoul228"
			}
		],
		links: [
			{
				platform: "Github",
				link: "https://github.com/darksoul228"
			}
		]
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.value} </p>
				{this.handelCd()}
			</React.Fragment>
		);
	}

	handelCd = () => {
		const navigation = this.state.value.split(" ")[1];
		if (navigation) {
			const lower = navigation.toLowerCase();
			if (lower === "about") {
				return <p className="result">{this.information.about}</p>;
			} else if (lower === "corvette") {
				return <p className="result">{this.information.corvette}</p>;
			} else if (lower === "corvette") {
			} else if (lower === "links" || lower === "links") {
				return (
					<React.Fragment>
						{this.information.projects.map(everyProject => {
							return (
								<p className="result">
									{everyProject.projectName}
									<a href={everyProject.liveDemo} target="_blank">
										Live Link
									</a>
									<a href={everyProject.linkToGithub} target="_blank">
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else if (
				lower === "links" ||
				lower === "link" ||
				lower === "LINKS" ||
				lower === "LINK"
			) {
				return (
					<React.Fragment>
						{this.information.social.map(everySocial => {
							return (
								<p className="result">
									<a href={everyLinks.link} target="_blank">
										{everyLinks.platform}
									</a>
									<a href="https://github.com/darksoul228" target="_blank">
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else {
				return <p className="result">Wrong input.</p>;
			}
		} else {
			return <p className="result">Wrong input.</p>;
		}
	};
}

export default C;
