import Head from 'next/head';
import Table from '../components/Table';
import Test from '../components/Test';
import SideBar from '../components/Sidebar';
import Tracking from '../components/Tracking';
import Remarks from '../components/Remarks';

export default function Home() {
	let test1 = 'This is prop 1';
	let test2 = 'this is prop 2';
	let test3 = 100;

	let activitiesArray = [
		'Study',
		'Eat',
		'Travel',
		'Sports',
		'Gaming',
		'Tv',
		'Chill',
		'Friends',
		'Family',
		'Pray',
		'Work',
		'Sleep',
		'Blank',
	];
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>This is the Next.js Table Project</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex items-center justify-center flex-1 w-full px-20 text-center flex-raw">
				<Table />
				<SideBar
					activitiesArray={activitiesArray}
					test1={test1}
					test2={test2}
				/>
			</main>

			<div className="flex section display ">
				<div className="color bg-red-600 p-2 m-0.5">
					<Tracking day="Monday" time={'11:45'} subject="Math" />
				</div>

				<div className="color bg-red-600 p-2 m-0.5">
					<Tracking day="Wednesday" time={'5'} subject="English" />
				</div>
				<div className="color bg-red-600 p-2 m-0.5">
					<Tracking day="Friday" time={'8:30'} subject="History" />
				</div>
				<div className="color bg-red-600 p-2 m-0.5">
					<Tracking day="Saturday" time={'4:00'} subject="Geography" />
				</div>
				<div className="color bg-red-600 p-2 m-0.5">
					<Remarks subject="English" remark="Please reread the last chapter" />
				</div>
			</div>
		</div>
	);
}
