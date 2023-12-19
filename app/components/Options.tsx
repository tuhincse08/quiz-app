
type Props ={
    index: number
    opt: string;
}

export default function Options({index,opt}:Props ) {
    const letter = ['A','B','C','D'];

  return (
    <div className="mb-2">  

    <input type="radio" id={"hosting-small" + index} name={"hosting"} value={opt} className="hidden peer"  />
    <label htmlFor={"hosting-small"+index} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 ">                           
        <div className="flex justify-start gap-3 items-center">
            <label htmlFor={"hosting-small"+index} className="px-3 py-2 bg-slate-200 text-gray-600 rounded peer-checked:bg-violet-500">{letter[index]}</label>
            <div className="w-full text-lg font-semibold">{opt}</div>
           
        </div>
        
    </label></div> 
  )
}
