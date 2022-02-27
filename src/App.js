import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([])
 
  useEffect(()=>{
    const init =async ()=>{
      const res = await fetch('https://course-api.com/react-tours-project');
      const data = await res.json();
      setData(data)
      setIsLoading(false)
    }
    init();
 
  },[])
console.log('isLoading', isLoading)
  return (
    <div className="App">
       <h3>Tour App</h3>
      {isLoading && <p className='loading'>page is loading...</p>}
      {!isLoading && <div className="App-header">
       {data.map((item)=> <Cards key={item.id} {...item}/>)}
      </div>
      }
    
    </div>
  );
}

export default App;
