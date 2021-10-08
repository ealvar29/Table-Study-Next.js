import React from 'react';

// props way
//-----------------------------------------------------------------------------
// function Tracking(props) {
// 	return (
//         <div>

// 			<h1>{props.day}</h1>
// 			<h2>{props.time}</h2>
// 			<h3>{props.subject}</h3>
// 		</div>
// 	);
// }

//----------------------------------------------------------------------------

// Destructuring
function Tracking({ day, time, subject }) {
	return (
		<div>
			<h1 className="font-bold">Day: {day}</h1>
			<h2>Time: {time}</h2>
			<h3>Subject: {subject}</h3>
		</div>
	);
}

export default Tracking;
