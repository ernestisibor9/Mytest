import logo from './logo.svg';
import './App.css';
import Good from './components/Good'
import Mydata from './components/Mydata'
import Obj from './components/Obj';
import Counter from './components/Counter';
import UseEff from './components/UseEff';
import Loading from './components/Loading';
import Ternary from './components/Ternary';
import Form from './components/Form';
import { FaApple } from "react-icons/fa";
import Review from './components/Review';




function App() {
  return (
    <div className="App">
      {/* 
      <Good/>
      <Mydata/>
      <Obj/>
      <Counter/>
      <UseEff/>
      <Loading/>
      <Ternary/>
       <Form/>
      */}
      <FaApple className='myicon'/>
      <Review/>
    </div>
  );
}

export default App;
