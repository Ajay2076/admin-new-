
import './App.css';

import Nav from './components/Nav';
import Cardadd from './components/Cardadd';
import Dataviewa from './components/Dataviewa';
import { Route, Routes } from 'react-router-dom';
// import Ud from './components/Ud';
import Detalis from './components/Detalis';
import Login from './components/Login';
import Signup from './components/signup';
// import Feedbackview from './components/Feedbackview';
import Home from './components/Home';
import Tdsp from './components/Tdsp';
import Sp from './components/Sp';
import Card11 from './components/Card11';
import Card2 from './components/card2';
import Card2up from './components/Card2up';
import DataviewA from './components/Dataviewa';
import FeedbackView from './components/Feedbackview';





function App() {
  return (
    <div className="App">



      <Routes>
      <Route path='/'element={<><Nav/></>}/>
      <Route path='/Home'element={<><Nav/><Home/></>}/>
      <Route path='/Login'element={<><Nav/><Login/></>}/>
      <Route path='/Signup'element={<><Nav/><Signup/></>}/>
      {/* <Route path='/Ud'element={<><Ud/><DataviewA/></>}/> */}
      <Route path='/Detalis'element={<><Detalis/><Cardadd/></>}/>
      <Route path='/Feedbackview'element={<><FeedbackView/></>}/>
      <Route path='/Tdsp'element={<><Card11/><Tdsp/></>}/>
      <Route path='/Sp'element={<><Card2/><Card2up/></>}/>
      </Routes>
    
 
     

   
    </div>
  );
}

export default App;
