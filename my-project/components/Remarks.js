import React from 'react';

function Remarks({ subject, remark }) {
	return (
		<div>
			<p className="font-bold">Subject: {subject}</p>
			<p>
				<i>
					<p className="font-bold">Remarks: {remark}</p>
				</i>
			</p>
		</div>
	);
}

export default Remarks;
