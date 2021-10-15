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

			<Tracking />
			{/* <Testing /> */}

			<div /*className="flex bg-blue-600 remarking section display"*/>
				{
					<div /*className="color bg-red-600 p-2 m-0.5"*/>
						{trackingArray.map((tracking) => (
							<div className=" color bg-blue-400 ">
								<div>
									<h1 className="text-xl font-bold color bg-red-500">
										{tracking.day}
									</h1>
								</div>

								<div className="">
									<h4 className="text-md font-medium">{tracking.subject}</h4>
								</div>
								<div className="">
									<h4 className="italic">{tracking.time}</h4>
								</div>
							</div>
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
