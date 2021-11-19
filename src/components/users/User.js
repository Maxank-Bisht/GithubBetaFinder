import React, { useEffect, Fragment, useContext } from 'react';
import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
	const githubContext = useContext(GithubContext);
	const { user, loading, getUser, getUserRepos, repos } = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		// eslint-disable-next-line
	}, []);

	const {
		name,
		company,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

	if (loading) return <Spinner />;

	return (
		<Fragment>
			<div className='flex gap-4 justify-start items-center'>
				<Link to='/' className='bg-gray-800 text-gray-200 text-medium rounded-md py-2 px-4'>
					Back to Search
				</Link>
				<div className='bg-gray-300 text-gray-800 text-medium rounded-md py-2 px-4'>
					Hireable :{' '}
					{hireable ? (
						<i className='fas fa-check text-green-500'></i>
					) : (
						<i className='fas fa-times-circle text-red-500'></i>
					)}
				</div>
			</div>
			<div className='grid grid-cols-2 gap-4 bg-gray-300 mt-4 rounded-t-md py-4'>
				<div className='flex flex-col justify-center items-center'>
					<img
						src={avatar_url}
						alt='avatar'
						className='border-4 border-gray-800 rounded-full'
						style={{ width: '150px' }}
					/>
					<h1 className='font-bold text-2xl'>{name}</h1>
					{location && <p className='italic'>Location: {location} </p>}
				</div>
				<div className='flex flex-col justify-center gap-2'>
					{bio && (
						<Fragment>
							<h1 className='text-2xl font-semibold'>Bio</h1>
							<p className='text-lg'>{bio}</p>
						</Fragment>
					)}
					<div>
						<a href={html_url} className='bg-gray-800 text-gray-200 text-medium rounded-md py-1 px-4'>
							Visit Github Profile
						</a>
					</div>
					<ul>
						<li>
							{login && (
								<Fragment>
									<strong>Username : </strong>
									{login}{' '}
								</Fragment>
							)}
						</li>
						<li>
							{company && (
								<Fragment>
									<strong>Company :</strong>
									{company}{' '}
								</Fragment>
							)}
						</li>
						<li>
							{blog && (
								<Fragment>
									<strong>Website :</strong>
									{blog}{' '}
								</Fragment>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className='flex flex-col gap-y-1 bg-gray-300 rounded-b-md py-4 text-center'>
				<div>
					<span className='bg-blue-400 py-0.5 px-2 rounded-md  badge-primary'>Followers : {followers}</span>
				</div>
				<div>
					<span className='bg-green-400 py-0.5 px-2 rounded-md  badge-primary'>Following : {following}</span>
				</div>
				<div>
					<span className='bg-pink-400 py-0.5 px-2 rounded-md  badge-primary'>
						Public Repos : {public_repos}
					</span>
				</div>
				<div>
					<span className='bg-yellow-400 py-0.5 px-2 rounded-md  badge-primary'>
						Public Gists : {public_gists}
					</span>
				</div>
			</div>
			<Repos repos={repos} />
		</Fragment>
	);
};

export default User;
