import React from 'react';
import { MjmlButton } from 'mjml-react';
import { black, gold, grayLight } from './theme';
import { leadingTight, textBase, borderBase } from './theme';

const ButtonPrimary = ({ link, uiText }: { link: string; uiText: string }) => {
	return (
		<>
			<MjmlButton
				lineHeight={leadingTight}
				fontSize={textBase}
				height={52}
				padding="0"
				align="left"
				href={link}
				backgroundColor={black}
				color={grayLight}
				borderRadius={borderBase}
				cssClass="light-mode"
			>
				{uiText}
			</MjmlButton>
			<MjmlButton
				lineHeight={leadingTight}
				fontSize={textBase}
				height={52}
				padding="0"
				align="left"
				href={link}
				backgroundColor={gold}
				color={black}
				borderRadius={borderBase}
				cssClass="dark-mode"
			>
				{uiText}
			</MjmlButton>
		</>
	);
};

export default ButtonPrimary;
