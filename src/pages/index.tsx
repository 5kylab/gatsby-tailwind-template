import * as React from 'react';
import { PageLayout } from '@components';
import type { HeadFC } from 'gatsby';


const IndexPage = () => {
	return (
		<PageLayout>
			<h1>Hi!</h1>
		</PageLayout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Page Title</title>;
