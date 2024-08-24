import React, { useEffect, useState } from 'react'

export default function Practice () {
  //question 1  
  // const [count, setCount] = useState(0);
    // useEffect(() => {
    //    console.log("Component rendered successfully");
    //  }, []);
    //   return (
    //    <div>
    //      <button onClick={() => setCount(count + 1)}>Click me</button>
    //      <p>You clicked {count} times</p>
    //    </div>
    //  );
//question 2
  //   const names = ["Brian", "Paul", "Krug", "Halley"];
  //  const listItems = names.map((name) => <li>{name}</li>);
  //  return <ul>{listItems}</ul>;


  //question 3
  //question 4 currency converter

  // const [currencie, setCurrencie] = useState([]); //holds all my currencies
  // const [amount, setAmount] = useState(1);//converted amount

  // const fetchCurrencies = async () => {
  //   try{
  //     const res = await fetch("https://api.frankfurter.app/currencies");
  //     const data = await res.json();

  //     setCurrencie(data);
  //   }catch(error){
  //     console.error("Error Fetching", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCurrencies();
  // },[]);
  // console.log(currencie);

  // return(
  //   <div className="max-w mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
  //     <h2 className="mb-5 text-2xl font-semibold text-grey-700">
  //       Currency Converter
  //     </h2>
  //     <div>Dropdown </div>
  //     <div className="mt-4">
  //       <label htmlFor="amount" className='block text-sm font-medium text-gray-700'>Amount:</label>
  //       <input type="number" 
  //       value={amount}
  //        onChange={(e) => setAmount(e.target.value)}
  //       className='w-full p-2 border border-grey-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400'/>
  //     </div>
  //     <div className="flex justify-end mt-6">
  //       <button className="px-5 py-2bg-indigo-600 text-black rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
  //         Convert
  //       </button>
  //       <div className="mt-4 text-lg font-medium text-right text-green-600">
  //         Converted Amount: 69 USD
  //       </div>
  //       <button>clickMe</button>
  //     </div>
  //   </div>


  // )

  // question 5 
  // const [value, setValue] = useState("");
  // function handleChange(event){
  //   setValue(event.target.value);
  // }
  // return(
  //   <div>
  //     <input type="text" onChange={handleChange} value={value}/>
  //     <p> you entred : {value}</p>
  //   </div>
  // )

  // question 6
  // what is missing in the snippet
  const [Count, setCount] = useState(0);
  const increment = () => {
    setCount(Count + 1);
  }
  return(
    <div>
      <button onClick={increment}>Incriment</button>
      <p>Count : {Count}</p>
    </div>
  )
}

