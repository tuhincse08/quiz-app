import Image from "next/image";
import Link from "next/link";

type Data ={
  title: string
  icon: string
  questions: Array<{
    question: string
    options: string[]
    answer: string
  }>
}

export default async function Home() {
  const res = await fetch('http://localhost:4000/quizzes/' , {
    cache: 'no-store'
  });
  const data: Data[] = await res.json();
  let obj = data.find(o => o.title === 'HTML');

  return (
    <>
    <div className="flex justify-end cursor-pointer gap-2 ">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
      <input type="checkbox" className="toggle toggle-primary" checked />
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    </div>
    <div className="grid grid-cols-2">
      <div className="flex justify-end mr-12">
      <div>
        <h1 className="text-4xl font-bold mb-8 ">Welcome to the <br/>Frontend Quiz!</h1>
        <p className="text-xl">Pick a subject to get started.</p>
      </div></div>
    
      <ul>
      {
        data.map((topic) =>
        <Link href={`./quiz/${topic.title}`} className="flex justify-start items-center gap-2 bg-white text-slate-800 px-3 py-3 my-3 rounded-lg">
          <div className="p-2 bg-slate-100 rounded">
          <Image src={topic.icon} 
          alt={topic.title} width={24}
          height={24}/> </div>
          <h1>{topic.title}</h1>

        </Link>
          )
      }
      </ul>
    </div>
    </>
      )
}
