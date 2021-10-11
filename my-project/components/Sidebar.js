import React from 'react';
import { BeakerIcon } from '@heroicons/react/solid';

function SideBar() {
	let activitiesArray = [
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
					</svg>, 
			activity: 'Study'
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
				</svg>, 
			activity: 'Eat'
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
					</svg>, 
			activity: 'Travel'
		},
		// 'Sports',
		// 'Gaming',
		// 'Tv',
		// 'Chill',
		// 'Friends',
		// 'Family',
		// 'Pray',
		// 'Work',
		// 'Sleep',
		// 'Blank',
	];
	return (
		<div className="aside">
			<div className="activities"></div>
			<div className="hobbie">
				{activitiesArray.map((acts) => (
					<>
					<p>{acts.icon}</p>
					<p>{acts.activity}</p>
					</>
				))}
			</div>
		</div>
	);
}

export default SideBar;
