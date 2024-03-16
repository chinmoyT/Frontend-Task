// import React, { useState } from 'react'
// import './App.css'

// const App = () => {
//   const [research, setresearch] = useState(true)
//   const [planning, setplanning] = useState(true)
//   const [design, setdesign] = useState(true)
//   const [manufacture, setmanufacture] = useState(true)
//   const [sales, setsales] = useState(true)

//   const click1 = () => {
//     //research
//     if(manufacture && design && planning && sales){
//       setmanufacture(false)
//       setdesign(false)
//       setplanning(false)
//       setsales(false)
//     }
//     else{
//       setmanufacture(true)
//       setdesign(true)
//       setplanning(true)
//       setsales(true)
//     }
//   }
//   const click2 = () => {
//     //planning
//     if(research && design && manufacture && sales){
//       setresearch(false)
//       setdesign(false)
//       setmanufacture(false)
//       setsales(false)
//     }
//     else{
//       setresearch(true)
//       setdesign(true)
//       setmanufacture(true)
//       setsales(true)
//     }
//   }
//   const click3 = ()=> {
//     //design
//     if(research && manufacture && planning && sales){
//       setresearch(false)
//       setmanufacture(false)
//       setplanning(false)
//       setsales(false)
//     }
//     else{
//       setresearch(true)
//       setmanufacture(true)
//       setplanning(true)
//       setsales(true)
//     }
//   }

//   const click4 = ()=> {
//     //manufacture
//     if(research && design && planning && sales){
//       setresearch(false)
//       setdesign(false)
//       setplanning(false)
//       setsales(false)
//     }
//     else{
//       setresearch(true)
//       setdesign(true)
//       setplanning(true)
//       setsales(true)
//     }
//   }

//   const click5 = ()=> {
//     //sales
//     if(research && design && planning && manufacture){
//       setresearch(false)
//       setdesign(false)
//       setplanning(false)
//       setmanufacture(false)
//     }
//     else{
//       setresearch(true)
//       setdesign(true)
//       setplanning(true)
//       setmanufacture(true)
//     }
//   }
//   return (
//     <div>{research && (
//       <button onClick={click1}>
//         Research</button>
//     )}
//       {
//         planning && (
//           <button onClick={click2}>
//             Planning</button>
//         )
//       }
//       {
//         design && (
//           <button onClick={click3}>
//             Designing
//           </button>
//         )
//       }
//       {
//         manufacture && (
//           <button onClick={click4}>
//             Manufacturing
//           </button>
//         )
//       }
//       {
//         sales && (
//           <button onClick={click5}>
//             Sales
//           </button>
//         )
//       }
//     </div>
//   )
// }

// export default App