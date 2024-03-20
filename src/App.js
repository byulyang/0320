import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import Main from './pages/Main';
import Error from "./pages/Error";

function App() {
  return (
   
      <BrowserRouter>
      <Routes>
        
        
        <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="main" element={<Main/>}/>
        <Route path="mypage" element={<Mypage/>}/>
        <Route path="login" element={<Login/>}/>
      
      <Route path="*" element={<Error/>}/>
      </Route>


      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
