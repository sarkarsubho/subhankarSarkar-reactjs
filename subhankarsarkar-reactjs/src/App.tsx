
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Home } from './pages/Home';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home></Home>}>

        </Route>
      </Routes>
      
    </div>
  );
}

export default App;

// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhcmthcnNhYnlAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3NhcmthcnN1YmhvIiwiaWF0IjoxNjYzOTk2NzQ2LCJleHAiOjE2NjQ0Mjg3NDZ9.YDCqLKwlPW82FoYghm2USeZR9dI-Todwle6AE3Bt7do