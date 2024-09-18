import React from 'react'

function Card() {
  return (
    <div>
              <form>

      <div className="flex flex-col bg-slate-600 space-y-5 w-[500px] h-[250px] fixed top-80 left-80 pt-5 shadow-lg shadow-cyan-500/50">
        <div className="flex flex-row"><label htmlFor="name">Name:</label> 
        <input type='text' id='name' className='w-[200px] hover:bg-slate-500 focus:outline-none focus:outline-black rounded-lg' /></div>
    <div className="flex flex-row space-x-4">    <label htmlFor='mail' className='text-2xl text-bold'>Email:</label>
    <input type="email" className='rounded-lg w-[250px] hover:bg-slate-500 focus:outline-none focus:ring-8 ring-red-500 foucs:outline-amber-600 hover:uppercase  invalid:outline-red-500 invalid:text-red-600'required /></div>
  
      <input type='submit'/>

    </div>
    </form>

    </div>

  )
}

export default Card
