'use client'
import { useState } from "react"
import Link from "next/link";

type Props = {
    title: string
    icon: string
    questions: Array<{
      question: string
      options: string[]
      answer: string
    }>
  }

export default function Question({title,icon,questions}: Props) {
    const [current,setCurrent] = useState(0);
    const [buttonType, setButtonType] = useState('Submit Answer');
    const [err,setErr] = useState('');
    const [rightAns, setRightAns] = useState(0);
    const letter = ['A','B','C','D'];

    const handleClick = ()=>{
      const ele = document.querySelector<HTMLInputElement>('input[name=hosting]:checked')

            if(buttonType ==='Next Question'){
              setCurrent(current + 1);
              if(ele)
                ele.checked = false;
              setErr('');
              setButtonType('Submit Answer');
               return;
            }
              
              
            
            //abc.find(r => r.checked).value;

            if (!ele) {
              setErr('Please Select An Answer');
              return;
            }
            if(questions[current].answer === ele?.value){
              setRightAns(a => a + 1);
              
            }
            else{
              console.log("Wrong Answer")
            }
            ele.checked = false;
            setErr('');
            setButtonType('Next Question');

            if(current === (questions.length-1)) 
              setCurrent(current +1)
    }
    
  return (
    <>
    
    <div className="grid grid-cols-2 gap-6 place-content-center">
        {(current < (questions.length)) && <><div>
            <p className="italic"> Question {current + 1} of {questions.length}</p>
            <h2 className="text-2xl font-bold">{questions[current].question}</h2>
           
            <progress className="progress my-4 w-full bg-slate-400 progress-primary" value={(current +1)/questions.length*100} max="100"></progress>
        </div>
        
        <div>
          
            {questions[current].options.map((opt,index) =>
        <>
        <div className="mb-2">  

        <input type="radio" id={"hosting-small" + current+ index} name={"hosting"} value={opt} className="hidden peer"  />
        <label htmlFor={"hosting-small"+current+index} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 ">                           
            <div className="flex justify-start gap-3 items-center">
                <label htmlFor={"hosting-small"+current+index} className="px-3 py-2 bg-slate-200 text-gray-600 rounded peer-checked:bg-violet-500">{letter[index]}</label>
                <div className="w-full text-lg font-semibold">{opt}</div>
               
            </div>
            
        </label></div>  
    
                </>
                )}
            <button type="submit"  onClick={handleClick} className="btn btn-primary mt-4">{buttonType}</button>
           <p id="err" className="text-red-400 mt-2 flex justify-start gap-2 items-center text-sm">{err && <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>} {err}</p>
        </div> </> }

        {
          (current===questions.length) &&
          <>
          <div>
            <h1 className="text-3xl">Quiz Completed</h1>
            <h2 className="text-2xl font-bold">You Scored</h2>
          </div>

          <div className="bg-white rounded-2xl p-12">
            <div className="flex justify-start gap-2 items-center">
            <div className="p-2 bg-slate-100 rounded">
              <img src={icon} 
              alt={title} width={24}
              height={24}/> 
            </div>
            <h2 className="text-xl ">{title}</h2>
            </div>

            <h1 className="text-6xl">{rightAns}</h1>
            <p>out of {questions.length}</p>

            <Link href="/"><button className="btn btn-primary mt-4"> Play Again</button></Link>
            
          </div>

          </>
        }


    </div>
    </>
  )
}
