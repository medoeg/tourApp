import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards'

function App() {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  //getting the state value from localstorage if excist
  const [data, setData] = useState(localStorage.getItem('tour') ? JSON.parse(localStorage.getItem('tour'))  : [])

  const fetchData =async ()=>{
    setLoading(true)
    try{
      const res = await fetch('https://course-api.com/react-tours-project');
      const resData = await res.json();
      setData(resData)
    }catch(err){
      setErrMsg(true)
    }
    setLoading(false)
  }
 
  useEffect(()=>{
    //only make a get req if the user removed all of his data
    if(data.length == 0 ){
      fetchData();
    }
    
  },[data])

  const handleRemoveTour = (id) => {
    const newTour = data.filter((item)=> item.id != id);
    setData(newTour)
    //update the local storage when the user remove a tour from his tours list
    localStorage.setItem('tour', JSON.stringify(newTour))
  }
  return (
    <div className="App">
       <h3>Tour App</h3>
       
      {loading && <p className='loading'>page is loading...</p>}
      {errMsg && <p className='err-msg' > something went wrong, try again late</p>}
      <div className="App-header">
        {data.map((item)=> <Cards key={item.id} handleRemoveTour={handleRemoveTour} {...item}/>)}
      </div>
    </div>
  );
}

export default App;
