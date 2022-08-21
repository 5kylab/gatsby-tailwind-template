import React, { ReactElement } from 'react';
import '@assets/main.scss';

type PageLayoutProps = {
  children: ReactElement;
}

const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<>
			{children}
		</>
	);
};

export default PageLayout;
