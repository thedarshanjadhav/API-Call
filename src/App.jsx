import { useEffect,useState } from 'react'

function App() {
  const [data, setData] = useState()
  useEffect(()=>{
    try{
      const fetchdata = async() => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        console.log(data);
        setData(data)
      }
      fetchdata();
      
      // fetch('https://fakestoreapi.com/products')
      //       .then(res=>res.json())
      //       .then(json=>setData(json))
    }catch(err){
      console.log(err);
    }
  });
  console.log(data);

  
  return (
    <>
    <h1>API Call from fake store api</h1>
    {data && data.map(item =>(
      <h3 key={item.id} color='white'>{item.title}</h3>
    ))}
    </>
  )
}

export default App




