
type Props ={
    index: number,
    opt: string,
    selected: boolean,
    result: boolean
}

export default function Options({index,opt,selected,result}:Props ) {
    const letter = ['A','B','C','D'];

  return (
    <div className="mb-2">  

    <input type="radio" id={'' + index} name={"option"} value={opt} className="hidden peer"  />
    <label htmlFor={''+index} className={(selected && result? 'border-green-400 ' : (selected && !result? 'border-red-400 ': 'border-gray-200 ')) + "flex items-center justify-between w-full p-5 text-gray-500 bg-white border-solid border-2  rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100" }>                           
        
        <div className="flex justify-start gap-3 items-center">
            <label htmlFor={""+index} className={ (selected && result? 'bg-green-400 ': (selected && !result? 'bg-red-400 ':'bg-slate-200 ' ))+(selected?'text-white ':'text-gray-600 ' ) +"px-3 py-2  rounded peer-checked:bg-violet-500"}>{letter[index]}</label>
            <div className="w-full text-lg font-semibold">{opt}</div>
            
        </div>
        {result && 
            <div>
            <svg className="w-6 h-6 text-green-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            </div>}

        {(selected && !result) && 
            <div>
            <svg className="w-6 h-6 text-red-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            </div>}

        </label>
        </div> 
  )
}





