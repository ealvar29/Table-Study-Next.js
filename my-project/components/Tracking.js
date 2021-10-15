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
		<div className="bg-blue-400 color">
			<div>
				<h1 className="text-xl font-bold bg-red-500 color">
					Day: {day}
				</h1>
			</div>

			<div className="">
				<h4 className="font-medium text-md">Subject: {subject}</h4>
			</div>
			<div className="">
				<h4 className="italic">Time: {time}</h4>
			</div>
		</div>
	);
}

export default Tracking;
