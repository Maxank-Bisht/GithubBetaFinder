import React from 'react';

const About = () => {
	return (
		<div className='bg-gray-500 p-6 rounded-xl shadow-xl text-gray-100'>
			<h1 className='text-2xl font-semibold underline mb-2'>About this App</h1>
			<p className='text-lg'>
				Find any github user easily, just search there username or name and get all the users in one go. Click
				on 'more' to know more about that user and its repositories.
			</p>
			<p className='mt-2'>Version : 1.0.0</p>
		</div>
	);
};

export default About;
