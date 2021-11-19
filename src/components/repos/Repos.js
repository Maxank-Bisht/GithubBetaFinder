import React from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
	return (
		<div className='mt-4'>
			<h1 className='text-3xl font-bold text-gray-800 pb-2'>Top Repos</h1>
			{repos.map((repo) => (
				<RepoItem repo={repo} key={repo.id} />
			))}
		</div>
	);
};

Repos.protoType = {
	repos: PropTypes.array.isRequired,
};

export default Repos;
