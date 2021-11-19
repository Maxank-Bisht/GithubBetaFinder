import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
	const alertContext = useContext(AlertContext);
	const { alert } = alertContext;
	return (
		alert !== null && (
			<div
				className={`z-20 fixed bottom-0 right-0 text-center mb-10 px-4 py-1 mr-6 shadow-lg py-2 rounded-lg text-xl font-normal text-gray-100 bg-${alert.type}`}
			>
				<i className='fas fa-info-circle'></i>
				{alert.message}
			</div>
		)
	);
};

export default Alert;
