import ReactDOM from "react-dom/client";
import useFetch from "./Components/useFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Map from "./Pages/Map";
import Like from "./Pages/Like";
import NoPage from "./Pages/NoPage";
import Home from "./Pages/Home";
import History from "./Pages/History";


const App = () => {

return(

  <>
 <BrowserRouter>
 <Navbar/>
      <Routes>
        <Route>
        <Route path="/" element={<Home />} />
          <Route path="like" element={<Like />} />
          <Route path="map" element={<Map />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>


  </>
);

  /**
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          if(item.title.charAt(0) ==="a")
          {
            return <p key={item.id}>{item.title}</p>
          }
          
        })}
    </>
  );
   */

};



export default App;