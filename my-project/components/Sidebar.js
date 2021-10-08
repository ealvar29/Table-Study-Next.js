import React from 'react';
import { BeakerIcon } from "@heroicons/react/solid"

function SideBar({activitiesArray, test1, test2}) {
	console.log(activitiesArray);
	return (
		<div className="aside">
			<div className="activities">
			</div>
			<div className="hobbie">
				{activitiesArray.map((acts) => <p>{acts}</p>
				)}
				<p>{test1}</p>
				<p>{test2}</p>
			</div>
		</div>
	);
}

export default SideBar;
