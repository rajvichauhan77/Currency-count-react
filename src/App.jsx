import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input'
import SelectCurrency from './components/SelectCurruncey'
import fetchApi from './utilities/FetchApi'

function App() {

  const [from, setFrom]  = useState("usd")
  const [to, setTo]  = useState("inr")
  const [amountFrom, setAmountFrom]  = useState(0)
  const [amountTo, setAmountTo]  = useState(0)

  const [obj, setObj] = useState({username: "red" , num: "1234"})

  const data = fetchApi(from,to)

  const selectCurFrom = (e) => {
    setFrom(e.target.value)
   }

   const selectCurTo = (e) => {
    setTo(e.target.value)
   }

   function changeAmountFrom(e){
    let val  = e.target.value

    setObj((prev) =>({...prev, num : e}))
    console.log(val)
    // setAmountFrom(val)

    setAmountTo(data[to] *val)
   }

   const changeAmountTo = (e) => {
    let val  = e.target.value

    setAmountTo(val)
    console.log(val/ data[to])
    setAmountFrom(val / data[to])

    // console.log(data [from])
   }

   useEffect (() =>{
    setAmountTo(data[to] * amountFrom)
    setAmountFrom(data[from] * amountTo)
   }, [from, to, data])

   function swap(){
      let sw = from
      setFrom(to)
      setTo(sw)
   }


  return (
    <>

        <div className='h-lvh flex justify-center items-center'>

            <div className=' w-3xl m-auto shadow rounded shadow-slate-600 p-3'>

              <div className='shadow rounded-3xl shadow-purple-400 p-9 m-2 flex justify-between'>

                <label htmlFor="" className='font-bold'>From</label>
                
                <Input place={from} changeAmount={changeAmountFrom} amount={amountFrom}/>
                <SelectCurrency selectCur={selectCurFrom} data={data} curCur={from}/>
              </div>

              <div className='text-center p-2'>
                  <button onClick={swap} className='bg-teal-950 text-white font-bold px-3 py-1 shadow rounded'>swap</button>
              </div>

              <div className='shadow rounded-3xl shadow-purple-400  p-10 m-2 flex justify-between'>

                <label htmlFor="" className='font-bold'>To</label>
                <Input place={to} changeAmount={changeAmountTo} amount={amountTo}/> 
                <SelectCurrency selectCur={selectCurTo} data={data} curCur={to}/>
              </div>

            </div>
        </div>

    </>
  )
}

export default App
