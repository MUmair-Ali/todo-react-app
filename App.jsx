// import { useState } from 'react'
 //import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import { Fragment } from 'react'
//import NetflixSeries, {Header, Footer} from './components/NetflixSeries' // importing named export needs curly braces
//import './App.css'
import { Todo } from './projects/Todo/Todo';
//import { ToggleSwitch } from './projects/ToggleSwitch/ToggleSwitch';
//import './components/Netflix.css'
//import styles from './components/Netflix.module.css'
//import { useEffect, useState } from 'react'
//import series from './api/series.json'

const App = () => {
  
  //const [seriesCount, setSeriesCount] = useState([]) // using state hook to store data from series.json file 
  // setting state to the length of series.json file

  //useEffect(()=> {setSeriesCount(series)}, []) // setting state to the length of series.json file

  
  return <>
   {/*  <Header /> {/* named importing and exporting components*/}
   {/* <section className='container'>
      <h1 on className={styles["card-heading"]}>List of Netflix Series : {seriesCount.length} Series </h1>
      <NetflixSeries /> {/* default importing and exporting components*/}
     {/* </section>  */}
    {/*<Footer /> {/* named importing and exporting components*/}

      {/*<ToggleSwitch /> */}
      <Todo />
    </>

}


export default App;