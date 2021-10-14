import Head from 'next/head';
import Table from '../components/Table';
import SideBar from '../components/Sidebar';
import Tracking from '../components/Tracking';
import Remarks from '../components/Remarks';
import { Form } from '../components/Form';

export default function Home() {
	let eleven = `${11}:${45}`;

	let days = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];
	let subjects = 'Maths';

	let trackingArray = [
		{
			index: 1,
			day: days,
			time: eleven,
			subject: subjects,
		},
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
				<Form />
			</main>

			<div className="flex bg-blue-600 remarking section display">
				{
					<div className="color bg-red-600 p-2 m-0.5">
						{trackingArray.map((tracking, index) => (
							<tracking
								key={index}
								day={tracking.day}
								time={tracking.time}
								subject={tracking.subject}
							/>
						))}
					</div>

					/* 
				<div className="color bg-red-600 p-2 m-0.5">
					<Tracking day="Wednesday" time={'5'} subject="English" />
				</div>
				<div className="color bg-red-600 p-2 m-0.5">
					<Tracking day="Friday" time={'8:30'} subject="History" />
				</div>
				<div className="color bg-red-600 p-2 m-0.5">
					<Tracking day="Saturday" time={'4:00'} subject="Geography" />
				</div> */
				}
				<div className="color bg-red-600 p-2 m-0.5">
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
