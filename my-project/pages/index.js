import Head from 'next/head';
import Table from '../components/Table';
import SideBar from '../components/Sidebar';
import Tracking from '../components/Tracking';
import Remarks from '../components/Remarks';
import Testing from '../components/Testing';
// import { Form } from '../components/Form';

export default function Home() {
	let trackingArray = [
		{
			// index: 1,
			day: 'Monday',
			subject: 'Math',
			time: new Date().toLocaleString(),
		},
		{
			// index: 2,
			day: 'Tuesday',
			subject: 'Science',
			time: new Date().toLocaleString(),
		},
		{
			// index: 3,
			day: 'Wednesday',
			subject: 'English',
			time: new Date().toLocaleString(),
		},
		{
			// index: 4,
			day: 'Thursday',
			subject: 'History',
			time: new Date().toLocaleString(),
		},
		{
			// index: 5,
			day: 'Friday',
			subject: 'French',
			time: new Date().toLocaleString(),
		},
		{
			// index: 6,
			day: 'Saturday',
			subject: 'Project',
			time: new Date().toLocaleString(),
		},
		// {
		// 	 keep going until you have all objects in the same format -- Wednesday, Thursday, etc
		// },
	];

	let remarksArray = [
		{
			index: 1,
			subject: 'English',
			remark: 'Please reread the last chapter',
		},
		{
			index: 2,
			subject: 'Science',
			remark: 'Please go over Astrology',
		},
		{
			index: 3,
			subject: 'Math',
			remark: 'Please complete lessons 1-5',
		},
	];

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>This is the Next.js Table Project</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex items-center justify-center flex-1 w-full px-20 text-center flex-raw">
				<Table />
				<SideBar />
				{/* <Form /> */}
			</main>

			
			{/* <Testing /> */}

			<div /*className="flex bg-blue-600 remarking section display"*/>
				{
					<div /*className="color bg-red-600 p-2 m-0.5"*/>
						{trackingArray.map((tracking) => (
							<Tracking day={tracking.day} time={tracking.time} subject={tracking.subject}/>
						))}
					</div>
				}
				<div /*className="color bg-red-600 p-2 m-0.5"*/>
					{remarksArray.map((remark, index) => (
						<Remarks
							key={index}
							subject={remark.subject}
							remark={remark.remark}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
