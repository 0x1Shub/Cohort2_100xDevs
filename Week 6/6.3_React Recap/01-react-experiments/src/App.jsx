import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

// 1. State

// function App() {
//   const [count, setCount] = useState(0)

//   console.log("Hii there from APP.jsx");  

//   return (
//     <div>
//       <button onClick={() => setCount(count+1)}>
//         Count is {count}
//       </button>
      
//     </div>
//   )
// }


// 2. UseEffect

// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});

//   console.log("Hii there re-render");

//   // useEffect(() => {
//   //   fetch("https://google.com", async (res) => {
//   //     const json = await res.json();
//   //     setBankData(json);
//   //     // Assume it is { income: 100 }
//   //   });
//   // }, [])


//   useEffect(() => {
//     setTimeout(() => {
//       setBankData({income: 100});
//     }, 3000);
//   }, [])
 

//   useEffect(() => {
//     setTimeout(() => {
//       setExchangeData({
//         returns: 100
//       });
//     }, 1000);
//   }, []);


//   const incomeTax = (bankData.income + exchangeData) * 0.3;

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }



// 3. UseMemo

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange1Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange2Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100
//       });
//     }, 5000);
//   }, [])

//   const cryptoReturns = useMemo(() => {
//     console.log("hi there before");
//     return exchange1Data.returns + exchange2Data.returns;
//   }, [exchange1Data, exchange2Data]);
  
  
  
//   const incomeTax = (cryptoReturns + bankData.income) * 0.3

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }


// 4. UseCallback

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange1Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange2Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100
//       });
//     })
//   }, [])


//   // usecallback is not about minimizingthe amount of code that is run
//   // usecallback is about not rendering a child component, if the function hasnt/ doesnt need to change across function

//   const cryptoReturns = useCallback(function(){
//     return exchange1Data.returns + exchange2Data.returns;
//   }, [exchange1Data, exchange2Data]);
  
//   const incomeTax = (cryptoReturns + bankData.income) * 0.3

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }


// 5. UseRef

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10"
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return (
    <div>
        hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}


export default App





