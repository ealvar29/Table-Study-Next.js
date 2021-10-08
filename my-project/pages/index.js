import Head from 'next/head'
import Table from '../components/Table';
import Test from '../components/Test'
import SideBar from '../components/Sidebar';


export default function Home() {
  let test1 = "This is prop 1";
  let test2 = "this is prop 2";
  let test3 = 100;

  let activitiesArray = ["Study", "Eat", "Travel", "Sports", "Gaming","Tv","Chill","Friends","Family","Pray","Work","Sleep","Blank"];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <Table />
      <SideBar activitiesArray={activitiesArray} test1={test1} test2={test2}/>
      </main>
    </div>
  )
}
