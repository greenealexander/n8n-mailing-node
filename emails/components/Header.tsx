import React from 'react';
import { MjmlSection, MjmlColumn, MjmlImage } from 'mjml-react';

const Header = ({ loose = false }: { loose?: boolean }) => {
	return (
		<MjmlSection padding={loose ? '48px 0 40px' : '48px 0 24px'}>
			<MjmlColumn>
				<MjmlImage
					padding="0 24px 0"
					width="49px"
					height="54px"
					align="center"
					src="https://s3.amazonaws.com/lab.campsh.com/bb-transparent%402x.png"
					cssClass="logo"
				/>
			</MjmlColumn>
		</MjmlSection>
	);
};

export default Header;
