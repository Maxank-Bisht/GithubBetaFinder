import React, { useContext, useEffect } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Users = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const { loading, users } = githubContext;

	useEffect(() => {
		if (!loading && users === null) {
			alertContext.setAlert(` No user found !!`, 'red-500');
		}
		// eslint-disable-next-line
	}, [loading]);

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{users && users.map((user) => <UserItem key={user.id} user={user} />)}
			</div>
		);
	}
};

export default Users;
