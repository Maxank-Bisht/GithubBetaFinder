import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = ({ showAlert }) => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const [text, setText] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert(` Please Enter Something.`, 'red-500');
		} else {
			githubContext.searchUser(text);
			setText('');
		}
	};
	const changeValue = (e) => setText(e.target.value);

	return (
		<div className='w-full'>
			<form onSubmit={onSubmit} className='form flex gap-2 flex-col items-center justify-center'>
				<input
					className='w-full py-2 text-center bg-gray-300 rounded-2xl text-black font-normal text-xl'
					type='text'
					name='text'
					value={text}
					onChange={changeValue}
					placeholder='Search Users...'
				/>
				<input
					className='w-full py-2 text-center bg-gray-800 rounded-2xl text-gray-100 font-normal text-xl cursor-pointer'
					type='submit'
					value='Search'
				/>
			</form>
			{githubContext.users && githubContext.users.length > 0 && (
				<button
					className='w-full my-2 py-2 text-center bg-red-400 rounded-2xl text-gray-100 font-normal text-xl cursor-pointer'
					onClick={githubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
