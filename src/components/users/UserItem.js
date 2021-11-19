import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<div className='bg-gray-200 rounded-lg text-center'>
			<img src={avatar_url} alt='' className='rounded-full mx-auto mt-4' style={{ width: '60px' }} />
			<h3 className='font-semibold text-xl'>{login}</h3>
			<div className='w-full my-4'>
				<Link to={`/user/${login}`} className='bg-gray-800 text-gray-200 text-medium rounded-md py-2 px-4'>
					More
				</Link>
			</div>
		</div>
	);
};

UserItem.propType = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
