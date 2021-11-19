import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
	return (
		<div className='my-1 bg-gray-700 text-gray-200 py-2 px-4 rounded-lg'>
			<h3 className='flex items-center justify-between pb-2'>
				<span className='text-white font-normal text-xl' target='_blank' rel='noopener noreferrer'>
					{repo.name}
				</span>
				<a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
					<i className='fas fa-external-link-alt'></i>
				</a>
			</h3>
			{repo.description && <p className='pt-2 border-t-2 border-gray-500'>{repo.description}</p>}
		</div>
	);
};

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};

export default RepoItem;
