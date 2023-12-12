
import Question from "@/app/components/Question"
import { error } from "console"
import Image from "next/image";

type Props ={
    params:{
        topic:string
    }
}

type Data = Array<{
    title: string
    icon: string
    questions: Array<{
      question: string
      options: string[]
      answer: string
    }>
  }>

export default async function page({params:{topic}}:Props) {

    const res = await fetch('http://localhost:4000/quizzes/',{
        cache: 'no-store'
    })
    const data: Data = await res.json();
    const obj = data.find(o => o.title === topic);
    if(!obj)    throw error('Questions not Found on this topic')
  return (
    <>
    <div className="flex justify-between mb-4">
      <div className="flex justify-start gap-2 items-center">
            <div className="p-2 bg-slate-100 rounded">
              <Image src={'.'+obj.icon}
              alt={obj.title} width={24}
              height={24}/> 
            </div>
            <h2 className="text-xl ">{obj.title}</h2>
      </div>
      <label className="flex cursor-pointer gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
        <input type="checkbox" value="synthwave" className="toggle  toggle-primary theme-controller"/>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </label>
    </div>
    
    <Question {...obj}/>

    </>
  )
}
