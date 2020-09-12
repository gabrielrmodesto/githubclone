import React from "react";
import { Container, Main, LeftSide, RightSide } from "./styles";
import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
	return (
		<Container>
			<Main>
				<LeftSide>
					<ProfileData
						username={'gabrielrmodesto'}
						name={'Gabriel Modesto'}
						avatarUrl={'https://avatars0.githubusercontent.com/u/15326732?s=460&u=d0748aae28b41f6eaf3c657ed0ee2a6bc20ceb56&v=4'}
						followers={16}
						following={22}
						company={'Itau Unibanco'}
						location={'Cruzeiro, SP, Brazil'}
						email={'gabrielrmodesto5@gmail.com'}
						blog={'linkedin.com/in/gabrielrmodesto'}
					/>
				</LeftSide>
				<RightSide></RightSide>
			</Main>
		</Container>
	);
};

export default Profile;
