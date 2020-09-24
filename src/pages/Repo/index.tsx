import React from "react";
import {Link} from "react-router-dom";
import {
	Container,
	Breadcrumb,
	RepoIcon,
	Stats,
	StarIcon,
	ForkIcon,
	LinkButton,
	GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
	return (
		<Container>
			<Breadcrumb>
				<RepoIcon />
				<Link className={"username"} to={"/gabrielrmodesto"}>
					gabrielrmodesto
				</Link>
				<span>/</span>

				<Link className={"reponame"} to={"/gabrielrmodesto/kaora"}>
					Kaora
				</Link>
			</Breadcrumb>
			<p>Projeto para ajudar pessoas</p>
			<Stats>
				<li>
					<StarIcon />
					<b>10</b>
					<span>stars</span>
				</li>
				<li>
					<ForkIcon />
					<b>0</b>
					<span>forks</span>
				</li>
			</Stats>
			<LinkButton href={"https://github.com/gabrielrmodesto/kaora"}>
				<GithubIcon />
				<span>View on Github</span>
			</LinkButton>
		</Container>
	);
};

export default Repo;
