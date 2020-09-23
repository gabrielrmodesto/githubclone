import React from "react";
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading } from "./styles";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
	return (
		<Container>
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
