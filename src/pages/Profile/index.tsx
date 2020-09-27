import React, { useEffect } from "react";
import {
	Container,
	Main,
	LeftSide,
	RightSide,
	Repos,
	CalendarHeading,
	RepoIcon,
	Tab,
} from "./styles";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";
import { useParams } from "react-router-dom";

const Profile: React.FC = () => {
	const { username } = useParams();

	useEffect(() => {
		Promise.all([
			fetch(`https://api.github.com/users/${username}`),
			fetch(`https://api.github.com/users/${username}/repos`),
		]).then(async (responses) => {
			console.log([
				await responses[0].json(),
				await responses[1].json(),
			]);
		});
	}, [username]);

	const TabContent = () => (
		<div className="content">
			<RepoIcon />
			<span className="label">Repositories</span>
			<span className="number">26</span>
		</div>
	);

	return (
		<Container>
			<Tab className="desktop">
				<div className="wrapper">
					<span className="offset" />
					<TabContent />
				</div>

				<span className="line" />
			</Tab>
			<Main>
				<LeftSide>
					<ProfileData
						username={"gabrielrmodesto"}
						name={"Gabriel Modesto"}
						avatarUrl={
							"https://avatars0.githubusercontent.com/u/15326732?s=460&u=d0748aae28b41f6eaf3c657ed0ee2a6bc20ceb56&v=4"
						}
						followers={16}
						following={22}
						company={"Itau Unibanco"}
						location={"Cruzeiro, SP, Brazil"}
						email={"gabrielrmodesto5@gmail.com"}
						blog={"linkedin.com/in/gabrielrmodesto"}
					/>
				</LeftSide>
				<RightSide>
					<Tab className="mobile">
						<TabContent />
						<span className="line" />
					</Tab>
					<Repos>
						<h2>Random repos</h2>
						<div>
							{[1, 2, 3, 4, 5, 6].map((n) => (
								<RepoCard
									key={n}
									username={"gabrielrmodesto"}
									reponame={"kaora"}
									description={
										"Kaora is a project to help people"
									}
									language={
										n % 3 === 0
											? "Javascript"
											: "Typescript"
									}
									stars={8}
									forks={4}
								/>
							))}
						</div>
					</Repos>
					<CalendarHeading>
						Random calendar (do not represent actual data)
					</CalendarHeading>
					<RandomCalendar />
				</RightSide>
			</Main>
		</Container>
	);
};

export default Profile;
